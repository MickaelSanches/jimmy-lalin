import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Vidéo ou Image en arrière-plan */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/boxing-intro.mp4"
        ></video>
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
          <a href="/combats" className="px-6 py-3 text-lg font-bold uppercase bg-[#D1BB34] text-black rounded-lg shadow-md hover:bg-primary hover:text-secondary transition">
            Voir les combats
          </a>
          <a href="#" className="px-6 py-3 text-lg font-bold uppercase border border-[#D1BB34] text-[#D1BB34] rounded-lg hover:bg-primary hover:text-secondary transition">
            Suivez l’ascension
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
