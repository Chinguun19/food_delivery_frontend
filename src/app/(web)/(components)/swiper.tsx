import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/swiper-bundle.min.css"; // Import Swiper styles

const SampleSlider = () => {
  const images = [
    "./img/sample1.png",
    "./img/sample2.png",
    "./img/sample3.png",
    "./img/sample4.png",
  ];

  return (
    <div className="sample-slider" style={{ width: "70%" }}>
      <Swiper
        loop={true}
        speed={2000}
        slidesPerView={3}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SampleSlider;
