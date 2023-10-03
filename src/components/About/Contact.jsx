import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoTwitch,
  BiLogoTwitter,
} from "react-icons/bi";
import { BsTiktok } from "react-icons/bs";

function Contact() {
  return (
    <div
      className="flex flex-col w-full  justify-center
     items-center gap-y-2"
    >
      <h3 className="font-MelbergHeavy text-xl">CONTACT</h3>
      <div className="w-[90%]  ">
        <div className="w-full bg-black/20 rounded-[25px] p-4">
          <form className="w-full h-full flex flex-col gap-y-2">
            <input
              type="email"
              name="email"
              className="bg-transparent text-center rounded-xl w-full
                     py-2  font-MelbergRegular
                     border-white border"
              placeholder="Mail"
            />
            <textarea
              placeholder="Message"
              className="bg-transparent text-center
                      rounded-xl w-full border-white border
                      font-MelbergRegular 
                      "
            />
            <button
              type="submit"
              className="bg-transparent text-center
                      font-MelbergRegular
                      rounded-xl w-full border-white border mt-2"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      <div className="w-[90%] h-[80px] bg-black/20 rounded-[25px]">
        <div className="w-full h-full flex flex-row justify-around items-center group text-[25px]">
          <BiLogoFacebookCircle className="cursor-pointer hover:text-[35px] transition-all duration-300"/>
          <BiLogoInstagram className="cursor-pointer hover:text-[35px] transition-all duration-300"/>
          <BiLogoTiktok className="cursor-pointer hover:text-[35px] transition-all duration-300"/>
          <BiLogoTwitter className="cursor-pointer hover:text-[35px] transition-all duration-300"/>
          <BiLogoTwitch className="cursor-pointer hover:text-[35px] transition-all duration-300"/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
