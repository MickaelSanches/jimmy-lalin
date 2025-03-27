import { useEffect, useState } from "react";

const faqData = [
  {
    question: "Qui est Jimmy Lalin ?",
    answer:
      "Jimmy Lalin est un boxeur professionnel français originaire d’Argenteuil, ayant grandi à Aix-les-Bains (Savoie). Fort d’un parcours atypique, marqué par une carrière militaire, Jimmy s’est imposé comme un athlète complet, alliant discipline, mental d’acier et détermination.",
  },
  {
    question: "Où s’entraîne Jimmy Lalin ?",
    answer:
      "Jimmy s’entraîne au club France Boxe Aix-les-Bains, un centre réputé pour la qualité de ses entraînements et son encadrement professionnel. 📍 Adresse exacte : 1 Rue du Bon Pasteur, 73100 Aix-les-Bains, France",
  },
  {
    question: "Quels sont les palmarès et statistiques de Jimmy Lalin ?",
    answer:
      "Avec plus de 30 combats amateurs et un passage en professionnel en 2024, Jimmy affiche un palmarès en constante évolution. 🏆 Son dernier combat, remporté à Aix-les-Bains, témoigne de sa montée en puissance sur la scène nationale.",
  },
  {
    question: "Peut-on suivre les combats de Jimmy Lalin en direct ?",
    answer:
      "Non pas encore mais vous pouvez suivre son actualité sur Instagram pour ne rien manquer.",
  },
  {
    question: "Comment contacter Jimmy Lalin pour un partenariat ou une apparition ?",
    answer:
      "Pour toute demande de sponsoring, partenariat, événement ou apparition médiatique, veuillez utiliser la page Contact du site. 🤝 L’équipe de Jimmy étudiera toutes propositions sérieuses.",
  },
  {
    question: "Jimmy Lalin propose-t-il des sessions de coaching ou stages ?",
    answer:
      "Des stages de boxe ou de coaching individuel pourront être proposés à l’avenir selon le calendrier des compétitions. Restez connecté pour les annonces officielles.",
  },
  {
    question: "Comment soutenir Jimmy dans sa carrière ?",
    answer:
      "Vous pouvez soutenir Jimmy en : 🥊 Assistant à ses combats 💬 Partageant ses contenus sur les réseaux 🤝 Proposant des partenariats",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Générer dynamiquement le script JSON-LD pour la FAQ
    const script = document.createElement("script");
    script.type = "application/ld+json";

    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" className="pt-40 py-20 px-6 md:px-16 text-dark">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-dark text-transparent bg-clip-text">
          FAQ - Questions Fréquemment Posées
        </h2>

        <div className="space-y-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item border-b border-primary pb-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-xl font-semibold flex justify-between items-center">
                {item.question}
                <span className="text-primary text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>
              {openIndex === index && (
                <div className="mt-4 text-lg text-dark leading-relaxed animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
