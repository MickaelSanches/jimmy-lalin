import { useEffect, useState } from "react";

const FightPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setShow(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl text-center relative">
        <button
          className="absolute top-2 right-2 text-black text-2xl font-bold"
          onClick={() => setShow(false)}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-dark">Prochain Combat !</h2>
        <img
          src="/img/23.webp"
          alt="Affiche du combat"
          className="w-full h-auto rounded-md mb-4"
        />
        <a
          href="https://www.helloasso.com/associations/bron-boxing-academy/evenements/championnat-wba?fbclid=PAQ0xDSwKsP2pleHRuA2FlbQIxMQABpzaaJFd13iaLWRoQ8UGyVWrhkpRYYZb9v_MgctYZeMsln8shubQQtjTs1CU1_aem_HjK3kM7gZznvD7hbc4ny3Q"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-secondary transition"
        >
          Réserver vos places 🎟️
        </a>
      </div>
    </div>
  );
};

export default FightPopup;
