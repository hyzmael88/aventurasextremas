import React from 'react'
import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { AppContext } from "../context/StateContext"

function BotonAbajo() {

    const {homeButton, setHomeButton} = AppContext();
    console.log(homeButton)

  return (
    <motion.div 
    initial={{ translateY: 300 }}
    animate={{ translateY: 0 }}
    transition={{duration:4}}
    className='w-full absolute bottom-10 flex flex-row justify-center items-center text-black hover:text-white z-50 cursor-pointer hover:bottom-12 transition-all duration-300
    '
    onClick={()=>setHomeButton(!homeButton)}
    >
      {
        homeButton==true?
        <BsChevronDoubleUp className='text-[40px] xl:text-[60px] transition-all duration-300 '/>
        :
        <BsChevronDoubleDown className='text-[40px] xl:text-[60px] transition-all duration-300 '/>
      }
    </motion.div>
  )
}

export default BotonAbajo