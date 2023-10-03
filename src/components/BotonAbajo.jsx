import React from 'react'
import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { AppContext } from "../context/StateContext"
import {useRouter} from 'next/router'

function BotonAbajo() {

    const {homeButton, setHomeButton} = AppContext();
    console.log(homeButton)
    const router = useRouter()
    const pathname = router.pathname

    

  return (
    <motion.div 
    initial={{ translateY: 300 }}
    animate={{ translateY: 0 }}
    transition={{duration:4}}
    className={pathname != "/"? "hidden":'w-full absolute bottom-10 flex flex-row justify-center items-center text-black hover:text-white z-50 cursor-pointer hover:bottom-12 transition-all duration-300'}
    onClick={()=>setHomeButton(!homeButton)}
    >
      {
        <motion.div
        initial={{rotate:0}}
        animate={{rotate:homeButton?180:0}}
        transition={{duration:4}}
        >

       
        <BsChevronDoubleUp
        
        className='text-[40px] xl:text-[60px] transition-all duration-300 '/>
        </motion.div>
      }
    </motion.div>
  )
}

export default BotonAbajo