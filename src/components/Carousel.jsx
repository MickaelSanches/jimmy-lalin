import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import '../styles/Carousel.css';

const slides = [
  "/logos/logo1.webp",
  "/img/19.webp",
  "/img/15.webp",
  "/img/16.webp",
  "/img/17.webp",
  "/img/18.webp",
  "/img/1.webp",
  "/img/14.webp",
  "/img/13.webp",
  "/img/12.webp",
  "/img/11.webp",
  "/img/10.webp",
  "/img/9.webp",
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
