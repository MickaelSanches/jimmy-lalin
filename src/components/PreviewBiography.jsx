import { motion } from "framer-motion";

const BiographyPreview = () => {
  return (
    <section className="relative bg-black text-white py-40 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:backdrop-blur-sm">
        <img
          src="/img/1.webp"
          alt="Background"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-white text-transparent bg-clip-text mb-6"
        >
          L'Histoire d'une Ascension
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto"
        >
          Chaque athlète a une histoire. Découvrez le parcours, les combats, et
          la détermination qui ont forgé un combattant prêt à tout pour atteindre
          le sommet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a
            href="/biography"
            className="inline-flex px-6 py-3 text-lg font-bold uppercase bg-secondary text-black rounded-lg shadow-md hover:bg-primary hover:text-secondary transition gap-2"
          >
            Lire la Biographie <span className="text-xl">➡️</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BiographyPreview;
