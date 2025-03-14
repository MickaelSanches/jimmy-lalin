import { useState } from "react";

const combats = [
  {
    id: 1,
    image: "/img/combat1.webp",
    adversaire: "John Doe",
    date: "12 Mars 2025",
    lieu: "Paris, France",
    resultat: "Victoire - KO",
    stats: "10-2-1",
  },
  {
    id: 2,
    image: "/img/combat2.webp",
    adversaire: "Carlos Mendes",
    date: "25 Février 2025",
    lieu: "Londres, UK",
    resultat: "Victoire - Décision",
    stats: "11-2-1",
  },
  {
    id: 3,
    image: "/img/combat3.webp",
    adversaire: "Mike Tyson Jr",
    date: "5 Janvier 2025",
    lieu: "Las Vegas, USA",
    resultat: "Défaite - Décision",
    stats: "11-3-1",
  },
];

const Combats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? combats.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === combats.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-20 text-white px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center italic bg-gradient-to-r from-primary to-dark text-transparent bg-clip-text mb-10">
        Derniers Combats
      </h2>

      <div className="flex justify-center items-center relative mx-auto max-w-lg sm:max-w-xl lg:max-w-4xl">
        {/* Bouton Précédent */}
        <button onClick={prevSlide} className="absolute left-2 sm:left-4 bg-[#FFD700] text-black p-3 rounded-full hover:scale-110 transition">
          ❮
        </button>

        {/* Combat Actuel */}
        <div className="w-full bg-dark p-8 rounded-xl shadow-lg text-center border-2 border-secondary">
          <img src={combats[currentIndex].image} alt="Combat" className="w-full h-60 object-cover rounded-lg mb-4" />
          <h3 className="text-2xl font-bold">{combats[currentIndex].adversaire}</h3>
          <p className="text-gray-400">{combats[currentIndex].date} - {combats[currentIndex].lieu}</p>
          <p className="text-lg font-semibold text-[#FFD700]">{combats[currentIndex].resultat}</p>
          <p className="text-gray-400">Stats: {combats[currentIndex].stats}</p>
        </div>

        {/* Bouton Suivant */}
        <button onClick={nextSlide} className="absolute right-2 sm:right-4 bg-[#FFD700] text-black p-3 rounded-full hover:scale-110 transition">
          ❯
        </button>
      </div>

      {/* Indicateurs */}
      <div className="flex justify-center mt-6 space-x-2">
        {combats.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#FFD700]" : "bg-gray-500"} transition`}
          />
        ))}
      </div>
    </section>
  );
};

export default Combats;
