import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { SlideshowProps } from "../../types/types";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  speed: 1000,
  loop: true,
};

export const Slideshow: React.FC<SlideshowProps> = ({
  slideImages,
  className = "",
}) => {
  return (
    <div className={`overflow-hidden ${" " + className}`}>
      <Swiper {...sliderSettings}>
        {slideImages.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center h-full">
              <img
                src={card.url}
                alt={card.altText + " railings"}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
