import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { AppContext } from "@/context/StateContext";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Faqs from "./Faqs";
import Contact from "./Contact";
import Us from "./Us";

function AboutComponent() {
  const { navButton } = AppContext();

  return (
    <motion.div
      initial={{ translateY: 1000, 
      opacity:100
      }}
      animate={{
        translateY: navButton ? 0 : 1000,
        opacity: navButton ? 100 : 0,
      }}
      transition={{ duration: 4 }}
      className="w-full h-screen 
      bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 

      absolute z-40 top-0  text-white flex flex-col  justify-center items-center"
    >
      <div className="w-full h-full flex flex-col-reverse xl:flex-row justify-center
      gap-y-6
      items-center gap-x-4 xl:gap-x-0 ">
       <Faqs/>
       <Contact/>
       <Us/>
      </div>
    </motion.div>
  );
}

export default AboutComponent;
