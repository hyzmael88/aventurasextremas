// components/CarouselSlide.js
import React from 'react';
import { SwiperSlide } from 'swiper/react';

const CarouselSlide = ({ title, description, link, bgImage }) => {
    return (
        <SwiperSlide className={`swiper-slide ${bgImage} text-white p-4`}>
          <div>
            <h2 className="text-2xl">{title}</h2>
            <p>{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 border border-white px-6 py-2 font-medium rounded-full hover:border-blue-500 hover:text-blue-500 transition duration-300"
            >
              explore
            </a>
          </div>
        </SwiperSlide>
      );
};

export default CarouselSlide;
