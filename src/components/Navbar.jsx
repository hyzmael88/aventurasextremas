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

  const { navButton, setNavButton, isMenuActive, setIsMenuActive } =
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
            opacity:0,
            translateY: -100 }}
          animate={{ 
            opacity:100,
            translateY: isMenuActive ? 0 : -100 }}
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
              <li key={item} className="cursor-pointer">
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
          <div
            className="w-full  flex flex-row justify-around
        items-center 
        "
          >
            <div className="flex flex-col justify-center items-center bg-gray-500 w-[70px] h-[70px] rounded-[25px] ">
              <BiLogoFacebookCircle className="text-4xl cursor-pointer " />
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-500 w-[70px] h-[70px] rounded-[25px]">
              <BiLogoInstagram className="text-4xl cursor-pointer " />
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-500 w-[70px] h-[70px] rounded-[25px]">
              <BiLogoTiktok className="text-4xl cursor-pointer " />
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-500 w-[70px] h-[70px] rounded-[25px]">
              <BiLogoTwitter className="text-4xl cursor-pointer " />
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-500 w-[70px] h-[70px] rounded-[25px]">
              <BiLogoTwitch className="text-4xl cursor-pointer " />
            </div>
          </div>
          <div
            className="flex flex-col items-center w-full uppercase
         text-white gap-y-4 font-MelbergRegular
         
         "
          >
            <div className="w-[90%]">
              <button className="uppercase py-4 bg-transparent border-white border w-full rounded-[25px]  ">
                Log In
              </button>
            </div>
            <div className="w-[90%]">
              <button className="uppercase py-4 bg-transparent border-white border w-full rounded-[25px]  ">
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
