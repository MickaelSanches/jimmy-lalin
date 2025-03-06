import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import '../styles/Carousel.css';

const slides = [
  "/img/IMG_0333.jpeg",
  "/img/IMG_0334.jpeg",
  "/img/IMG_0335.jpeg",
  "/img/IMG_0336.jpeg",
  "/img/IMG_0337.jpeg",
  "/img/IMG_0338.jpeg",
];

const Carousel = () => {
  return (
    <section className="page carousel">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView="auto"
        effect="coverflow"
        loop={true}
        loopedSlides={slides.length} // Assurez-vous de cloner assez de slides
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[EffectCoverflow]}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default Carousel;
