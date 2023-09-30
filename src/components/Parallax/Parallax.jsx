import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Layer1 from '../../components/assets/Parallax/fondo.png';  // Importa los componentes de cada capa
import Layer2 from '../../components/assets/Parallax/montanas.png';  // Importa los componentes de cada capa
import Layer3 from '../../components/assets/Parallax/piso.png';  // Importa los componentes de cada capa
import Layer4 from '../../components/assets/Parallax/humano.png';  // Importa los componentes de cada capa
import Layer5 from '../../components/assets/Parallax/logonegro.png';  // Importa los componentes de cada capa
import Image from 'next/image';
import {fadeIn} from '../../../variants'
import SnowFlake from './SnowFlake';
import { AppContext } from '@/context/StateContext';
import SocialMedia from '../SocialMedia';

const Parallax = () => {
      const { scrollYProgress } = useViewportScroll();
      const numberOfSnowflakes = 200;  // Puedes ajustar este número según tu preferencia

      const {homeButton} = AppContext()
      
      const translateYLayer3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
      const translateYLayer4 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    


  return (
    <div className='h-screen w-full relative overflow-hidden' >
      <SocialMedia/>
      <div
        className='absolute w-full h-full'
      >
        <Image src={Layer1} alt='image' className='w-full h-full object-cover' />
      </div>
      <div className='opacity-100 xl:hidden'>
      {[...Array(numberOfSnowflakes/10)].map((_, index) => (
        <SnowFlake key={index} />
      ))}
      </div>
      <div className='hidden xl:flex'>
      {[...Array(numberOfSnowflakes)].map((_, index) => (
        <SnowFlake key={index}  />
      ))}
      </div>
      
      <motion.div
       initial={{ translateY: 100 }}
       animate={{ translateY: 0 }}
       transition={{duration:1}}
        className='w-full h-full absolute z-10'
      >
        <Image src={Layer2} className='w-full h-full object-cover ' />
      </motion.div>
     
      <motion.div
        initial={{ translateY: 1200 }}
        animate={{  translateY: homeButton ? 100 : 0,
          opacity:homeButton ? 0 : 100
         }}
        transition={{duration:3}}
        className='w-full h-full absolute z-10'
      >
        <Image src={Layer5} className='hidden xl:flex w-full h-full object-cover ' />
      </motion.div>
      <motion.div
        initial={{ translateY: 600 }}
        animate={{  translateY: homeButton ? 100 : 0,
          opacity:homeButton ? 0 : 100
         }}
        transition={{duration:3}}
        className='w-full h-full absolute z-10'
      >
        <Image src={Layer5} className='flex xl:hidden w-full h-full object-cover ' />
      </motion.div>
      <motion.div
        initial={{ translateY: 300 }}
        animate={{ translateY: homeButton ? 400 : 0 ,
          opacity:homeButton ? 0 : 100
        }}  // Cambiamos la animación en base a homeButton
        transition={{ duration: homeButton ? 2 : 5}}
        className='w-full h-full absolute z-10'
      >
        <Image src={Layer3} className='w-full h-full object-cover' />
      </motion.div>

      <motion.div
        initial={{ translateY: 300 }}
        animate={{ translateY: homeButton ? 400 : 0,
          opacity:homeButton ? 0 : 100
         }}  // Cambiamos la animación en base a homeButton
        transition={{duration: homeButton ? 2 : 5}}
        className='w-full h-full absolute z-10'
      >
        <Image src={Layer4} className='w-full h-full object-cover' />
      </motion.div>
    
     
    </div>
  );
};

export default Parallax;
