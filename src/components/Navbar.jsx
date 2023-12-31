import Image from "next/image";
import React from "react";
import Logotrans from "../components/assets/Logos/logotrans.png";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoTwitch,
  BiLogoTwitter,
  BiMenuAltRight,
} from "react-icons/bi";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { AppContext } from "@/context/StateContext";

import { RxCross1 } from "react-icons/rx";

export const navData = [
  { name: "home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Shop", path: "/Shop" },
  { name: "Guides", path: "/Guides" },
  { name: "Advices", path: "/Advices" },
];

function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  // nav data

  const { navButton, setNavButton, isMenuActive, setIsMenuActive ,carrito } =
    AppContext();

  const cambioPagina = (item) => {
    setNavButton(item.path);
    setTimeout(() => {
      router.push(item.path);
    }, 4000);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 4 }}
        className="hidden absolute z-50 w-full h-[170px] xl:flex flex-row justify-between px-10"
      >
        <div className="flex flex-row items-center">
          {/* Logo */}
          <Image
            src={Logotrans}
            alt="logo"
            className="w-[150px] h-[150px] animate-pulse "
          />
        </div>
        <div className="flex flex-row">
          {/* Opciones menu */}
          <ul
            className="w-full flex flex-row items-center gap-x-10 uppercase
            text-4xl 
            "
          >
            {navData.map((item, index) => (
              <div
                key={index}
                href={item.path}
                onClick={() => cambioPagina(item)}
              >
                <li
                  className={
                    item.path == pathname
                      ? "w-full relative text-white"
                      : "w-[50%] text-black h-full flex flex-col relative cursor-pointer hover:text-white transition-all duration-300"
                  }
                >
                  <span className="text-[35px] font-MelbergRegular tracking-[2px]">
                    {item.name}
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-8">
          {/* Carrito */}
          <div>
            <FaShoppingCart className="text-3xl hover:text-white transition-all duration-300 cursor-pointer" />
          </div>
          {/* User */}
          <div>
            <FaUserLarge className="text-3xl hover:text-white transition-all duration-300 cursor-pointer" />
          </div>
        </div>
      </motion.div>
      {/* Movil */}
      {!isMenuActive ? (
        <motion.div
          initial={{ translateY: -100 }}
          animate={{ translateY: !isMenuActive ? 0 : -100 }}
          transition={{ duration: 4 }}
          className="w-full h-[100px] absolute top-0 z-50 flex flex-row justify-between items-center xl:hidden"
        >
          {/* Logo */}
          <Image
            src={Logotrans}
            alt="logo"
            className="w-[100px] h-[100px] animate-pulse "
          />
          

            <div className="relative">
            <FaShoppingCart className="mr-4 text-[50px] text-[#fed0b1] animate-pulse cursor-pointer" />
            {
            carrito.length> 0 &&
            <div className="absolute bg-[#fed0b1]  rounded-full animate-pulse cursor-pointer -z-20 p-3 right-0 -top-2">
              <span className="text-[10px] absolute left-[40%] top-[25%] text-white
              font-bold
              ">1</span>

            </div>
            }
          </div>
          {/* Hamburguer */}
          <div onClick={() => setIsMenuActive(true)}>
            <BiMenuAltRight
              className={
                isMenuActive
                  ? "hidden"
                  : "mr-4 text-[60px] text-[#fed0b1] animate-pulse cursor-pointer"
              }
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
            translateY: -100,
          }}
          animate={{
            opacity: 100,
            translateY: isMenuActive ? 0 : -100,
          }}
          transition={{ duration: 4 }}
          className="w-full h-screen flex flex-col 
      items-center  gap-y-4  absolute top-0 z-50
      bg-gray-900  bg-clip-padding backdrop-filter
      backdrop-blur-xl bg-opacity-10 
      "
        >
          <div className="w-full flex flex-row justify-between items-center">
            {/* Logo */}
            <Image
              src={Logotrans}
              alt="logo"
              className="w-[100px] h-[100px] animate-pulse "
            />
             <div>
            <FaShoppingCart className="text-3xl hover:text-white transition-all duration-300 cursor-pointer" />
          </div>
            {/* Cross*/}
            <div onClick={() => setIsMenuActive(false)}>
              <RxCross1
                className={
                  !isMenuActive
                    ? "hidden"
                    : "mr-4 text-[50px] text-[#fed0b1] animate-pulse cursor-pointer"
                }
              />
            </div>
          </div>

          <ul
            className="text-white text-center uppercase
        flex flex-col w-full 
        gap-y-6
        text-2xl font-MelbergRegular
        "
          >
            {navData.map((item, index) => (
              <Link
                key={item}
                href={item.path}
                onClick={() => setIsMenuActive(false)}
                className="cursor-pointer
                hover:text-3xl
                transition-all duration-300
                "
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </ul>
          <div
            className="w-full  flex flex-row justify-around
        items-center 
        "
          >
            <div className="flex flex-col justify-center items-center  bg-gray-900  bg-clip-padding backdrop-filter
      backdrop-blur-xl bg-opacity-10  w-[70px] h-[70px] rounded-[25px] ">
              <BiLogoFacebookCircle className="cursor-pointer text-[35px] hover:text-[45px] text-white transition-all duration-300 " />
            </div>
            <div className="flex flex-col justify-center items-center  bg-gray-900  bg-clip-padding backdrop-filter
      backdrop-blur-xl bg-opacity-10  w-[70px] h-[70px] rounded-[25px]">
              <BiLogoInstagram className="cursor-pointer text-[35px] hover:text-[45px] text-white transition-all duration-300 " />
            </div>
            <div className="flex flex-col justify-center items-center  bg-gray-900  bg-clip-padding backdrop-filter
      backdrop-blur-xl bg-opacity-10  w-[70px] h-[70px] rounded-[25px]">
              <BiLogoTiktok className="cursor-pointer text-[35px] hover:text-[45px] text-white transition-all duration-300 " />
            </div>
            <div className="flex flex-col justify-center items-center  bg-gray-900  bg-clip-padding backdrop-filter
      backdrop-blur-xl bg-opacity-10  w-[70px] h-[70px] rounded-[25px]">
              <BiLogoTwitter className="cursor-pointer text-[35px] hover:text-[45px] text-white transition-all duration-300 " />
            </div>
            <div className="flex flex-col justify-center items-center  bg-gray-900  bg-clip-padding backdrop-filter
      backdrop-blur-xl bg-opacity-10  w-[70px] h-[70px] rounded-[25px]">
              <BiLogoTwitch className="cursor-pointer text-[35px] hover:text-[45px] text-white transition-all duration-300 " />
            </div>
          </div>
          <div
            className="flex flex-col items-center w-full uppercase
         text-white gap-y-4 font-MelbergRegular
         
         "
          >
            <div className="w-[90%]">
              <button className="uppercase py-4 bg-transparent
               hover:bg-gray-900 hover:bg-clip-padding hover:backdrop-filter
               hover:backdrop-blur-xl hover:bg-opacity-10 
               transition-all duration-300
               hover:text-[20px]
              border-white border w-full rounded-[25px]  ">
                Log In
              </button>
            </div>
            <div className="w-[90%]">
              <button className="uppercase py-4 bg-transparent
               hover:bg-gray-900 hover:bg-clip-padding hover:backdrop-filter
               hover:backdrop-blur-xl hover:bg-opacity-10 
               hover:text-[20px]
               transition-all duration-300
              border-white border w-full rounded-[25px]  ">
                Sign In
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
