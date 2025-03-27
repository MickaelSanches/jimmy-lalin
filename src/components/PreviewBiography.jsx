const BiographyPreview = () => {
    return (
      <section className="bg-black text-white py-20 px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text mb-6">
          L'Histoire d'une Ascension
        </h2>
        <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
          Chaque champion a une histoire. Découvrez le parcours, les combats, et la détermination qui ont forgé un combattant prêt à tout pour atteindre le sommet.
        </p>
        <div className="mt-6">
          <a href="/biography" className="px-6 py-3 text-lg font-bold uppercase bg-[#FFD700] text-black rounded-lg shadow-md hover:bg-white transition">
            Lire la Biographie
          </a>
        </div>
      </section>
    );
  };
  export default BiographyPreview;