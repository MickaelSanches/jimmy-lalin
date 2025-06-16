import { useState } from "react";

const combats = [
  {
    id: 1,
    image: "/img/15.webp",
    adversaire: "Giorgi Khaduri",
    date: "24 Mars 2024",
    lieu: "Aix-les-Bains, France",
    resultat: "Victoire - TKO",
    stats: "1-0-0",
  },
  {
    id: 2,
    image: "/img/18.webp",
    adversaire: "Marko Petrovic",
    date: "25 Mai 2024",
    lieu: "Gaillard, France",
    resultat: "Défaite - TKO",
    stats: "1-1-0",
  },
  {
    id: 3,
    image: "/img/20.webp",
    adversaire: "Giorgi Muktiashvili",
    date: "24 Novembre 2024",
    lieu: "Albertville, France",
    resultat: "Victoire - W-KO",
    stats: "2-1-0",
  },
  {
    id: 4,
    image: "/img/21.webp",
    adversaire: "Dimitri Tsiklauri",
    date: "22 Février 2025",
    lieu: "Gaillard, France",
    resultat: "Victoire - W-KO",
    stats: "3-1-0",
  },
  {
    id: 5,
    image: "/img/22.webp",
    adversaire: "Ghenadie Gitlan",
    date: "15 Mars 2025",
    lieu: "Aix-les-Bains, France",
    resultat: "Victoire - Décision",
    notes: ["🇫🇷58-56🇲🇩", "🇫🇷58-56🇲🇩", "🇫🇷60-54🇲🇩"],
    stats: "4-1-0",
  },
  {
    id: 6,
    image: "/img/23.webp",
    adversaire: "Sofien Khaldi",
    date: "12 Juin 2025",
    lieu: "Bron, France",
    resultat: "Nul - Décision",
    stats: "4-1-1",
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
        <button
          onClick={prevSlide}
          className="w-10 h-10 absolute left-2 sm:left-4 bg-secondary text-black p-3 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          ❮
        </button>

        {/* Combat Actuel */}
<div className="w-full bg-dark p-8 rounded-xl shadow-lg text-center border-2 border-secondary space-y-4">
  <div className="mb-6">
    <img
      src={combats[currentIndex].image}
      alt={`Combat ${combats[currentIndex].adversaire}`}
      loading="lazy"
      className="w-full h-auto object-contain rounded-lg shadow-lg"
    />
  </div>
  <h3 className="text-2xl font-bold">
    {combats[currentIndex].adversaire}
  </h3>
  <p className="text-gray-400">
    {combats[currentIndex].date} - {combats[currentIndex].lieu}
  </p>
  <p className="text-lg font-semibold text-secondary">
    {combats[currentIndex].resultat}
  </p>
  {Array.isArray(combats[currentIndex].notes) && (
    <p className="text-lg font-semibold text-light">
      {combats[currentIndex].notes.join(" / ")}
    </p>
  )}
  <p className="text-gray-400">Stats: {combats[currentIndex].stats}</p>
</div>

        {/* Bouton Suivant */}
        <button
          onClick={nextSlide}
          className="w-10 h-10 absolute right-2 sm:right-4 bg-secondary text-black p-3 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          ❯
        </button>
      </div>

      {/* Indicateurs */}
      <div className="flex justify-center mt-6 space-x-2">
        {combats.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-secondary" : "bg-gray-500"
            } transition`}
          />
        ))}
      </div>
    </section>
  );
};

export default Combats;
