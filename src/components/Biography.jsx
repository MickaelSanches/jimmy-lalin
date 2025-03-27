import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const biographyData = [
  {
    title: "Jimmy Lalin : Un Parcours de Vie et de Boxe",
    subtitle: "Né le 19 avril 1996 à Argenteuil, en France",
    text: "Jimmy Lalin a grandi en banlieue parisienne, dans une famille nombreuse et modeste. Sa mère, antillaise, était caissière, et son père, originaire du nord de la France, facteur. Il a vécu une enfance marquée par des tensions familiales, notamment des violences verbales et parfois physiques, ainsi que par une éducation stricte. Malgré ces difficultés, Jimmy garde en tête de nombreux moments heureux et part du principe que cela a contribué à lui forger un mental à toute épreuve.",
    image: "/img/8.webp",
    nextImage: "/img/7.webp",
    gradient: "from-primary to-dark",
  },
  {
    title: "Jeunesse et Foi",
    text: "Élevé dans la foi chrétienne, Jimmy s’est éloigné de la religion à l'âge de 18 ans, se sentant contraint de suivre des pratiques qu’il trouvait hypocrites. Un stress familial intense lui a causé un bégaiement, qui s'est atténué avec le temps mais peut resurgir en périodes de stress.",
    image: "/img/7.webp",
    nextImage: "/img/1.webp",
    gradient: "from-dark to-light",
  },
  {
    title: "Déménagement et Engagement Militaire",
    subtitle: "Aix-les-Bains",
    text: "À 12 ans, Jimmy quitte le Val-d'Oise pour s'installer à Aix-les-Bains en Savoie. À 18 ans, il obtient son baccalauréat et s'engage immédiatement dans l'armée de terre française, au sein des troupes de marine. Il devient tireur dans un véhicule blindé, l'AMX10RC. À 19 ans, il part en mission en Côte d'Ivoire, puis au Mali dans le cadre de l'opération Barkhane.",
    image: "/img/1.webp",
    nextImage: "/img/6.webp",
    gradient: "bg-primary",
  },
  {
    title: "Découverte de la Boxe",
    subtitle: "Aix-les-Bains",
    text: "À 22 ans, un emploi de surveillant dans un collège change sa vie. En discutant avec les élèves, il découvre la boxe et s’inscrit dans un club à Aix-les-Bains en janvier 2018. Son premier combat amateur en 2019 est un échec, principalement en raison de problèmes de gestion de ses émotions.",
    image: "/img/6.webp",
    nextImage: "/img/3.webp",
    gradient: "bg-[#BDD2FF]",
  },
  {
    title: "Évolution et Succès vers une carrière Professionnelle",
    subtitle: "Aix-les-Bains",
    text: "En janvier 2024, avec un palmarès de 35 combats, dont 26 victoires et 9 défaites, Jimmy se classe 3ᵉ à la coupe de France. Cette même année, il passe professionnel et dispute son premier combat le 16 mars au casino d’Aix-les-Bains. Un tournant décisif s’opère grâce au travail réalisé avec un préparateur mental, qui l’a aidé à mieux gérer ses émotions, canaliser son énergie, et franchir un véritable cap mental et émotionnel vers le haut niveau.",
    image: "/img/3.webp",
    nextImage: "/img/logo.webp",
    gradient: "from-dark to-secondary",
  },
];

const BiographySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const item = biographyData[activeIndex];
  const nextItem = biographyData[(activeIndex + 1) % biographyData.length];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % biographyData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? biographyData.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Image gauche */}
      <div className="relative w-full md:w-3/3 h-[50vh] md:h-screen">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="absolute z-20 top-[45%] md:top-1/4 left-4 md:left-10 text-white max-w-[95%] md:max-w-md">
          {item.subtitle && (
            <p className="text-xs md:text-base font-light flex items-center mb-1 md:mb-2">
              <span className="mr-1 md:mr-2">📍</span> {item.subtitle}
            </p>
          )}
          <h2 className="text-lg md:text-4xl font-bold leading-tight">
            {item.title}
          </h2>
          <p className="mt-2 md:mt-4 text-xs md:text-base leading-snug md:leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>

      {/* Gradient + preview + flèches */}
      <div
        className={`relative w-full md:w-1/2 h-[50vh] md:h-screen bg-gradient-to-r ${item.gradient} flex flex-col justify-center items-center`}
      >
        {/* Preview */}
        <div className="w-60 md:w-96 h-36 md:h-56 rounded-xl overflow-hidden shadow-lg -translate-y-6">
          <img
            src={item.nextImage}
            alt="Next Preview"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Flèches + compteur */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300"
          >
            <FaArrowLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300"
          >
            <FaArrowRight className="text-white" />
          </button>
          <span className="text-white md:text-lg">
            {String(activeIndex + 1).padStart(2, "0")} -{" "}
            {String(biographyData.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BiographySlider;
