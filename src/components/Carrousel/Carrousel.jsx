import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import { AppContext } from "@/context/StateContext";

import Foto1 from "../../components/assets/foto1.png";
import Foto2 from "../../components/assets/foto2.png";
import Foto3 from "../../components/assets/foto3.png";
import Foto4 from "../../components/assets/foto4.png";
import Foto5 from "../../components/assets/foto5.png";
import Foto6 from "../../components/assets/foto6.png";
import Foto7 from "../../components/assets/foto7.png";
import Foto8 from "../../components/assets/foto8.png";

const ResponsiveImage = dynamic(() => import("next/image"), { ssr: false });

function Carrousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const { homeButton } = AppContext();

  const slidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2;
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 3;
    }
    return 4;
  };

  const personasConConsejos = [
    {
      nombre: "Alex Johnson",
      foto: Foto1,
      consejo: "¡Aprovecha cada caída de nieve para explorar nuevas rutas!"
    },
    {
      nombre: "Emily Davis",
      foto: Foto2,
      consejo: "Descubre la magia de la nieve, ¡no dejes que el frío te detenga!"
    },
    {
      nombre: "Michael Thompson",
      foto: Foto3,
      consejo: "Siente la adrenalina en cada descenso, ¡la nieve te espera!"
    },
    {
      nombre: "Jessica Miller",
      foto: Foto4,
      consejo: "Explora senderos nevados y vive la aventura al máximo."
    },
    {
      nombre: "Daniel Clark",
      foto: Foto5,
      consejo: "Conquista las montañas cubiertas de nieve, ¡la diversión está en la altura!"
    },
    {
      nombre: "Sophia Adams",
      foto: Foto6,
      consejo: "Aventúrate en la nieve y crea recuerdos inolvidables."
    },
    {
      nombre: "Matthew Lewis",
      foto: Foto7,
      consejo: "Desafía los límites y disfruta la emoción que solo la nieve puede brindar."
    },
    {
      nombre: "Olivia Anderson",
      foto: Foto8,
      consejo: "Sigue tu instinto y descubre lo inexplorado en este paisaje nevado."
    }
  ];

  return (
    <motion.div
      initial={{ translateY: 1000 }}
      animate={{
        translateY: homeButton ? 0 : 1000,
        opacity: homeButton ? 100 : 0,
      }}
      transition={{ duration: 4 }}
      className="w-full h-screen 
      bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 

      absolute z-40 top-0  text-white flex flex-row justify-center items-center"
    >
      <div className="h-[70vh] w-full  flex flex-col justify-center items-center">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -30,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          className=" w-full"
          slidesPerView={slidesPerView()}
          spaceBetween={-50}
          initialSlide={4}
          onSlideChange={handleSlideChange}
        >
          {personasConConsejos.map((item, index) => (
            <SwiperSlide
              key={index}
              className={
                index === activeIndex ? "active-slide" : "non-active-slide"
              }
            >
              <Image
                src={item.foto}
                className="h-[450px] 2xl:h-[600px] md:w-full  w-[900px] rounded-[25px] object-cover transition-all duration-300"
                alt={`Foto ${index + 1}`}
              />
              <div
                className="w-full h-full absolute top-0 rounded-[25px]
              bg-gradient-to-t from-black via-black/80
              opacity-0 hover:opacity-100
              "
              >
              <div className="w-full h-full  flex flex-col absolute top-0 justify-end  ">
                <h3 className="uppercase font-MelbergHeavy text-4xl mx-4">
                  {item.nombre}
                </h3>
                <p className="uppercase font-MelbergRegular text-xl mb-8 mx-4">
                  {item.consejo}
                </p>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Carrousel;
