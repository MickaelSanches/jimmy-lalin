import React, { useEffect, useState } from 'react';

const logos = [
  '/logos/aixlesbains.webp',
  '/logos/bizolon.webp',
  '/logos/boxeaix.webp',
  '/logos/croce.webp',
  '/logos/graph.webp',
  '/logos/innovpower.webp',
  '/logos/massage.webp',
  '/logos/synese.webp',

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
      <marquee behavior="scroll" direction="left" scrollamount={scrollSpeed} className="marquee">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-32 w-auto mx-4 inline-block"
          />
        ))}
      </marquee>
    </div>
  );
};

export default LogosCarousel;