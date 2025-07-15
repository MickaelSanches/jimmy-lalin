import React, { useState } from "react";

const highlights = [
  {
    title: "Jimmy devient Ambassadeur Sportif Aixois",
    date: "Octobre 2024",
    image: "/img/ambassadeurAixois/2024.webp",
    description:
      "En octobre 2024, Jimmy Lalin est contacté par la mairie et le service des sports afin d’officialiser son entrée dans le club des ambassadeurs sportifs Aixois, signant un partenariat avec la ville d’Aix les Bains sur la période 2025/2026.",
  },
  {
    title: "Trophée du Meilleur Sportif 2025",
    date: "2 Juillet 2025",
    image: [
      "/img/ambassadeurAixois/2025.webp",
      "/img/ambassadeurAixois/20251.webp",
      "/img/ambassadeurAixois/20253.webp",
    ],
    description:
      "En juillet 2024, le service des sports de la mairie créa un superbe événement : le trophée des champions. Jimmy fut nominé dans la catégorie meilleur sportif de l’année, mais ne gagna pas. En juillet 2025, Jimmy fût à nouveau nominé et remporta le trophée du meilleur sportif 2025 devant 10 rudes candidats ! Trophées créés spécialement pour l’occasion par « Tonton Carton » et par « LeloLuce »",
  },
];

const HighlightsSection = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNext = (images) => {
    setCarouselIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (images) => {
    setCarouselIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-light text-dark px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Distinctions & Engagements
      </h2>

      <div className="space-y-16">
        {highlights.map((item, index) => {
          const isCarousel = Array.isArray(item.image);
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2 flex flex-col items-center">
                {isCarousel ? (
                  <div className="relative w-full max-w-[300px]">
                    <img
                      src={item.image[carouselIndex]}
                      alt={`${item.title} ${carouselIndex + 1}`}
                      className="rounded-lg shadow-lg w-full h-auto object-contain"
                    />
                    <div className="flex justify-between mt-2">
                      <button
                        onClick={() => handlePrev(item.image)}
                        className="text-primary text-xl px-2"
                      >
                        ◀
                      </button>
                      <span className="text-sm text-gray-500">
                        {carouselIndex + 1} / {item.image.length}
                      </span>
                      <button
                        onClick={() => handleNext(item.image)}
                        className="text-primary text-xl px-2"
                      >
                        ▶
                      </button>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-[300px] h-auto rounded-lg shadow-lg"
                  />
                )}
              </div>

              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-secondary mb-2">{item.date}</p>
                <p className="text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HighlightsSection;
