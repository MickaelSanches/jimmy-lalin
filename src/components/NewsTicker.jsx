/*
const NewsTicker = () => {
  return (
    <div className="tracking-wider  text-black py-2">
      <marquee behavior="scroll" scrollamount="10">
        🏅 En octobre 2024, Jimmy Lalin rejoint fièrement le Club des
        Ambassadeurs Sportifs Aixois, une reconnaissance de son engagement,
        de sa discipline et de son exemplarité !
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 🥇 Le 2 juillet 2025,
        Jimmy remporte le prestigieux Trophée du Meilleur Sportif de l’Année à
        Aix-les-Bains ! Une consécration pour un parcours hors-norme.
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 🇫🇷 Fier représentant
        de sa ville, de sa région et de la France, Jimmy poursuit son ascension
        dans le monde de la boxe professionnelle. ✨
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 🏅 En octobre 2024, Jimmy Lalin rejoint fièrement le Club des
        Ambassadeurs Sportifs Aixois, une reconnaissance de son engagement,
        de sa discipline et de son exemplarité !
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 🥇
        Le 2 juillet 2025, Jimmy remporte le prestigieux Trophée du Meilleur
        Sportif de l’Année à Aix-les-Bains ! Une consécration pour un parcours
        hors-norme. &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 🇫🇷 Fier
        représentant de sa ville, de sa région et de la France, Jimmy poursuit
        son ascension dans le monde de la boxe professionnelle. ✨
      </marquee>
    </div>
  );
};

export default NewsTicker;
*/

import { useEffect, useState } from "react";

const EVENT_DATE_ISO = "2025-10-04T19:00:00+02:00"; // 19h Paris
const STREAM_URL = "https://www.rmcsport.tv/";
const DETAILS_URL = "/04-10-25";

function useCountdown(targetIso) {
  const [val, setVal] = useState("");
  useEffect(() => {
    const update = () => {
      const ms = new Date(targetIso).getTime() - Date.now();
      const s = Math.max(0, Math.floor(ms / 1000));
      const d = Math.floor(s / 86400);
      const h = Math.floor((s % 86400) / 3600);
      const m = Math.floor((s % 3600) / 60);
      setVal(`J-${d} · ${String(h).padStart(2, "0")}h${String(m).padStart(2, "0")}m`);
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, [targetIso]);
  return val;
}

const NewsTicker = () => {
  const cd = useCountdown(EVENT_DATE_ISO);

  return (
    <div className="tracking-wider text-black py-2">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="10"
        onMouseOver={(e) => e.currentTarget.stop()}
        onMouseOut={(e) => e.currentTarget.start()}
      >
        {/* --- BLOC COMBAT PRIORITAIRE --- */}
        <strong>{cd}</strong>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <strong>04 oct. 2025 — Adidas Arena (Paris)</strong>
        &nbsp;•&nbsp; Lalin vs Baraia &nbsp;•&nbsp; Live RMC Sport 1
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href={STREAM_URL} target="_blank" rel="noopener noreferrer">
          Regarder sur RMC Sport 1
        </a>
        &nbsp;•&nbsp;
        <a href={DETAILS_URL}>Détails & Affiche HD</a>
      </marquee>
    </div>
  );
};

export default NewsTicker;

