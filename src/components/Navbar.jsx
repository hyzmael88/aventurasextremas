import Image from 'next/image'
import React from 'react'
import Logotrans from '../components/assets/Logos/logotrans.png'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa' 
import { FaUserLarge } from 'react-icons/fa6' 

export const navData = [
    { name: 'home', path: '/', },
    { name: 'About', path: '/About Us', },
    { name: 'Shop', path: '/Shop', },
    { name: 'Guides', path: '/Guides', },
    { name: 'Advices', path: '/Advices', },
]

function Navbar() {

    const router = useRouter()
    const pathname = router.pathname
// nav data


  return (
    <div className='absolute z-50 w-full h-[170px] flex flex-row justify-between px-10'>
        <div className='flex flex-row items-center'>
            {/* Logo */}
            <Image src={Logotrans} alt='logo' className='w-[150px] h-[150px] animate-pulse ' />
        </div>
        <div className='flex flex-row'>
            {/* Opciones menu */}
            <ul className='w-full flex flex-row items-center gap-x-10 uppercase
            text-4xl 
            '>
                {
                    navData.map((item, index) =>(
                        <Link key={index} href={item.path}>
                            
                        <li className={item.path == pathname?"w-full relative text-white":'w-[50%] text-black h-full flex flex-col relative cursor-pointer hover:text-white transition-all duration-300'}>
                            <span className='text-[35px] font-MelbergRegular tracking-[2px]'>{item.name}</span>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        <div className='flex flex-row items-center justify-center gap-x-8'>
            {/* Carrito */}
            <div>
                <FaShoppingCart className='text-3xl hover:text-white transition-all duration-300 cursor-pointer' />
            </div>
            {/* User */}
            <div>
                <FaUserLarge className='text-3xl hover:text-white transition-all duration-300 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar