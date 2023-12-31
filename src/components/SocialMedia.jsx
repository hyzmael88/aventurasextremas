import React from 'react'

import  { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { AppContext } from '@/context/StateContext'

function SocialMedia() {
    const {homeButton} = AppContext()
  return (
    <motion.div
    initial={{ translateX: 500 }}
       animate={{ translateX: 0 }}
       transition={{duration:2}}
    className={homeButton?"hidden":'flex flex-col absolute bottom-28 right-8 text-[30px] xl:text-[40px] gap-y-4 z-30 '}>
        <FaFacebook className='text-white cursor-pointer animate-pulse hover:text-[#fed0b1] hover:animate-none hover:transition-all hover:duration-300'/>
        <FaInstagram className='text-white cursor-pointer animate-pulse hover:text-[#fed0b1] hover:animate-none hover:transition-all hover:duration-300'/>
        <FaTwitter className='text-white cursor-pointer animate-pulse hover:text-[#fed0b1] hover:animate-none hover:transition-all hover:duration-300'/>
    </motion.div>
  )
}



export default SocialMedia