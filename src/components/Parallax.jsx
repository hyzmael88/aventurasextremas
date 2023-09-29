import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Layer1 from '../components/assets/Parallax/fondo.png';  // Importa los componentes de cada capa
import Layer2 from '../components/assets/Parallax/montanas.png';  // Importa los componentes de cada capa
import Layer3 from '../components/assets/Parallax/piso.png';  // Importa los componentes de cada capa
import Layer4 from '../components/assets/Parallax/humano.png';  // Importa los componentes de cada capa
import Image from 'next/image';
import {fadeIn} from '../../variants'

const Parallax = () => {
      const { scrollYProgress } = useViewportScroll();

  return (
    <div className='h-screen w-full relative overflow-hidden' >
      <div
        className='absolute w-full h-full'
      >
        <Image src={Layer1} className='w-full h-full object-cover' />
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
         initial={{ translateY: 300 }}
         animate={{ translateY: 0 }}
         transition={{duration:2}}
        className='w-full h-full absolute z-10'
      >
        <Image src={Layer3} className='w-full h-full object-cover ' />
      </motion.div>
      <motion.div
        initial={{ translateY: 300 }}
        animate={{ translateY: 0 }}
        transition={{duration:2}}
        className='w-full h-full absolute z-10'
      >
        <Image src={Layer4} className='w-full h-full object-cover ' />
      </motion.div>
     
    </div>
  );
};

export default Parallax;
