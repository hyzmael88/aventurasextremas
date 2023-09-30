import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { motion } from 'framer-motion';
import { AppContext } from '@/context/StateContext';

import Foto1 from '../../components/assets/foto1.png';
import Foto2 from '../../components/assets/foto2.png';
import Foto3 from '../../components/assets/foto3.png';
import Foto4 from '../../components/assets/foto4.png';
import Foto5 from '../../components/assets/foto5.png';
import Foto6 from '../../components/assets/foto6.png';
import Foto7 from '../../components/assets/foto7.png';
import Foto8 from '../../components/assets/foto8.png';

const ResponsiveImage = dynamic(() => import('next/image'), { ssr: false });

function Carrousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const { homeButton } = AppContext();

  const slidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2;
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 3;
    }
    return 4;
  };

  return (
    <motion.div
      initial={{ translateY: 1000 }}
      animate={{
        translateY: homeButton ? 0 : 1000,
        opacity: homeButton ? 100 : 0,
      }}
      transition={{ duration: 4 }}
      className='w-full h-screen  absolute z-40 top-0  text-white flex flex-row justify-center items-center'
    >
      <div className='h-[70vh] w-full  flex flex-col justify-center items-center'>
        <Swiper
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -30,
            depth: 300,
            modifier: 1,
            slideShadows: false
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          className=' w-full'
          slidesPerView={slidesPerView()}
          spaceBetween={-50}
          initialSlide={4}
          onSlideChange={handleSlideChange}
        >
          {[Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8].map((foto, index) => (
            <SwiperSlide key={index} className={index === activeIndex ? 'active-slide' : 'non-active-slide'}>
              <Image
                src={foto}
                className='h-[450px] md:w-full w-[900px] rounded-[25px] object-cover transition-all duration-300'
                alt={`Foto ${index + 1}`}
                
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Carrousel;
