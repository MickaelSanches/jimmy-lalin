import React, { useEffect, useState } from "react";

const logos = [
  {
    src: "/logos/aixlesbains.webp",
    alt: "Ville d’Aix-les-Bains",
    url: "https://www.aixlesbains.fr/",
  },
  {
    src: "/logos/bizolon.webp",
    alt: "Chocolaterie Bizolon",
    url: "https://chocolaterie-bizolon-aixlesbains.fr/",
  },
  {
    src: "/logos/boxeaix.webp",
    alt: "France Boxe Aix-les-Bains",
    url: "https://www.facebook.com/franceboxeaixlesbains/",
  },
  {
    src: "/logos/croce.webp",
    alt: "Yves Croce",
    url: "https://www.jingoo.com/yves-croce/",
  },
  {
    src: "/logos/graph.webp",
    alt: "Capitaine Graph",
    url: "https://www.instagram.com/capitaine_graph/?locale=de-DE",
  },
  {
    src: "/logos/innovpower.webp",
    alt: "InnovPower",
    url: "https://www.innovpower.io/",
  },
  { src: "/logos/massage.webp",
    alt: "SuédoSportif",
    url: "https://www.suedosportif.com/" },
  {
    src: "/logos/synese.webp",
    alt: "Maison Synèse",
    url: "https://www.maison-synese.com/",
  },
];

const LogosCarousel = () => {
  const [scrollSpeed, setScrollSpeed] = useState(10);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const speed = window.innerWidth < 640 ? 20 : 10;
      setScrollSpeed(speed);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-4">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount={scrollSpeed}
        className="marquee"
      >
        {logos.concat(logos).map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-4"
          >
            <img src={logo.src} alt={logo.alt} className="h-32 w-auto" />
          </a>
        ))}
      </marquee>
    </div>
  );
};

export default LogosCarousel;
