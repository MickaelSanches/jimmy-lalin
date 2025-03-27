import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Vidéo en arrière-plan plein écran */}
      <div className="absolute inset-0 z-0">
        <video
          className="min-w-full min-h-full absolute top-0 left-0 object-cover opacity-30 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          src="https://d7hj6vdod8jfd.cloudfront.net/jimmy-cinema.mp4"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight tracking-widest bg-gradient-to-r from-primary to-white text-transparent bg-clip-text">
          LA DISCIPLINE FORGE LES LÉGENDES
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-primary italic opacity-90">
          Entraînement. Détermination. Victoire.
        </p>

        {/* Boutons CTA */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/combats"
            className="px-6 py-3 text-lg font-bold uppercase bg-secondary text-black rounded-lg shadow-md hover:bg-primary hover:text-secondary transition"
          >
            Voir les combats
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
