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
      className="flex flex-col w-full h-full justify-center
     items-center gap-y-2"
    >
      <h3 className="font-MelbergHeavy text-xl">CONTACT</h3>
      <div className="w-full  ">
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
      <div className="w-full h-[80px] bg-black/20 rounded-[25px]">
        <div className="w-full h-full flex flex-row justify-around items-center group text-[25px]">
          <BiLogoFacebookCircle />
          <BiLogoInstagram />
          <BiLogoTiktok />
          <BiLogoTwitter />
          <BiLogoTwitch />
        </div>
      </div>
    </div>
  );
}

export default Contact;
