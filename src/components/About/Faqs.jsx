import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Faqs() {
  return (
    <div
      className="flex flex-col w-full  justify-center items-center
    gap-y-2
    "
    >
      <h3 className="font-MelbergHeavy text-xl">FAQS</h3>
      <div
        className="w-[90%] flex flex-col items-center gap-y-2
    bg-black/20 rounded-[25px] p-4
    "
      >
        <div
          className="w-full rounded-xl border-white border-[1px]
       flex flex-row justify-between items-center "
        >
          <span className="font-MelbergRegular uppercase py-2 ml-2">
            Pregunta
          </span>
          <BsFillArrowRightCircleFill className="text-[30px] mr-1" />
        </div>
        <div
          className="w-full rounded-xl border-white border-[1px]
       flex flex-row justify-between items-center "
        >
          <span className="font-MelbergRegular uppercase py-2 ml-2">
            Pregunta
          </span>
          <BsFillArrowRightCircleFill className="text-[30px] mr-1" />
        </div>
        <div
          className="w-full rounded-xl border-white border-[1px]
       flex flex-row justify-between items-center "
        >
          <span className="font-MelbergRegular uppercase py-2 ml-2">
            Pregunta
          </span>
          <BsFillArrowRightCircleFill className="text-[30px] mr-1" />
        </div>
        <div
          className="w-full rounded-xl border-white border-[1px]
       flex flex-row justify-between items-center "
        >
          <span className="font-MelbergRegular uppercase py-2 ml-2">
            Pregunta
          </span>
          <BsFillArrowRightCircleFill className="text-[30px] mr-1" />
        </div>
        <div
          className="w-full rounded-xl border-white border-[1px]
       flex flex-row justify-between items-center "
        >
          <span className="font-MelbergRegular uppercase py-2 ml-2">
            Pregunta
          </span>
          <BsFillArrowRightCircleFill className="text-[30px] mr-1" />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
