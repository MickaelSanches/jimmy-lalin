import { motion } from "framer-motion";
import { MapPin, Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative text-dark py-20 px-6 md:px-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Entrer dans l'arène
        </h2>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          Pour une collaboration, un partenariat ou un combat, connecte-toi via
          mes réseaux ou retrouve-moi sur les lieux stratégiques.
        </p>
      </motion.div>

      {/* Carte stylisée */}
      <div className="relative w-full max-w-5xl mx-auto h-[450px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.899972212293!2d5.905110375779474!3d45.68183797107417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba1b1884341f7%3A0x6f907dc38621170c!2sFrance%20Boxe%20Aix-les-Bains!5e0!3m2!1sfr!2sfr!4v1711540624056!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Pins fictifs ? */}
        <div className="absolute bottom-4 left-4 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
          <MapPin size={18} /> Aix-les-Bains, France
        </div>
      </div>

      {/* Boutons contact */}
      <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
        <a
          href="https://www.instagram.com/jimmylalin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-secondary text-black rounded-lg font-semibold shadow-md hover:bg-primary hover:text-secondary transition"
        >
          <Instagram size={20} /> Envoyer un DM
        </a>
      </div>
    </section>
  );
};

export default Contact;
