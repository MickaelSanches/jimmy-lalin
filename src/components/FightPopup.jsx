import { useEffect, useRef, useState } from "react";

const EVENT_DATE_ISO = "2025-10-04T19:00:00+02:00";
const STORAGE_KEY = `fightpopup-${EVENT_DATE_ISO}`;

function useCountdown(targetIso) {
  const [remaining, setRemaining] = useState(() => {
    const t = new Date(targetIso).getTime() - Date.now();
    return t > 0 ? t : 0;
  });

  useEffect(() => {
    if (remaining <= 0) return;
    const id = setInterval(() => {
      const t = new Date(targetIso).getTime() - Date.now();
      setRemaining(t > 0 ? t : 0);
    }, 1000);
    return () => clearInterval(id);
  }, [targetIso, remaining]);

  const total = Math.max(0, remaining);
  const sec = Math.floor(total / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  return { days, hours, minutes, seconds, done: total === 0 };
}

const FightPopup = () => {
  const [show, setShow] = useState(false);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const { days, hours, minutes, seconds, done } = useCountdown(EVENT_DATE_ISO);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem(STORAGE_KEY);
    // Afficher si pas encore vu ET si on est avant l’événement
    if (!hasSeenPopup && !done) {
      setShow(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  }, [done]);

  // Focus initial + échap pour fermer
  useEffect(() => {
    if (show) {
      closeBtnRef.current?.focus();
      const onKey = (e) => {
        if (e.key === "Escape") setShow(false);
        // Focus trap minimal
        if (e.key === "Tab") {
          const focusable = dialogRef.current?.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusable || focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fight-popup-title"
      onMouseDown={(e) => {
        // fermer au clic sur l’overlay
        if (e.target === e.currentTarget) setShow(false);
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"

      >
        {/* Header */}
        <button
          ref={closeBtnRef}
          aria-label="Fermer la fenêtre"
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100"
          onClick={() => setShow(false)}
        >
          ×
        </button>

        {/* Media (borné en hauteur) */}
<div className="relative w-full bg-black shrink-0">
  {/* Backdrop plein, flouté */}
  <img
    aria-hidden="true"
    src="/img/affichebaraia.webp"
    className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover opacity-40 blur-xl"
  />
  {/* Affiche nette */}
  <div className="relative flex items-center justify-center p-4 sm:p-6">
    <img
      src="/img/affichebaraia.webp"
      alt="Affiche officielle — Jimmy Lalin vs Chadi Baraia, Adidas Arena Paris, 4 octobre 2025"
      className="max-h-[48vh] sm:max-h-[52vh] w-auto max-w-full rounded-md shadow-2xl"
      loading="eager"
    />
  </div>
</div>

        {/* Content */}
        <div className="p-6 text-center flex-1 overflow-y-auto"        >
          <h2
            id="fight-popup-title"
            className="text-2xl font-extrabold tracking-tight text-[#3F2876]"
          >
            Jimmy Lalin sur la carte principale — <span className="text-[#D1BB34]">RMC Sport 1</span> !
          </h2>

          <p className="mt-3 text-sm text-gray-700">
            Le <strong>samedi 04 octobre 2025</strong> à l’
            <strong>Adidas Arena (Paris)</strong>, lors de la soirée
            <strong> 100% Fight</strong> (carte principale du{" "}
            <em>Parnasse vs Petitjean</em>), Jimmy affronte{" "}
            <strong>Chadi Baraia</strong>, champion de France amateur 2023 (-75 kg).
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Conférence de presse : <strong>jeudi 11 septembre 2025</strong> à Aubervilliers (avec
            Philippe Fontanel).
          </p>

          {/* Countdown */}
          {!done && (
            <div className="mt-5 grid grid-cols-4 gap-2">
              {[["Jours", days], ["Heures", hours], ["Min", minutes], ["Sec", seconds]].map(
                ([label, val]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-gray-200 py-3"
                  >
                    <div className="text-2xl font-bold">{String(val).padStart(2, "0")}</div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-500">
                      {label}
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* CTA */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.rmcsport.tv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#D1BB34] px-5 py-3 font-bold text-black transition hover:bg-black hover:text-[#D1BB34]"
            >
              Regarder sur RMC Sport 1
            </a>
            <a
              href="/04-10-25"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-800 hover:bg-gray-50"
            >
              Détails & Affiche HD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FightPopup;
