import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div
      className=" bg-gradient-to-t from-cyan-800/95 to-white   
    text-white h-[150px] flex  flex-col justify-center px-11 py-2 items-center "
    >
      <div className=" flex gap-5 justify-center mt-10   ">
        <p className="cursor-pointer">Cookie Settings </p>
        <p>|</p>
        <p className="cursor-pointer">Privacy Policy </p>
        <p>|</p>
        <p className="cursor-pointer">Terms and Conditions </p>
        <p>|</p>
        <p className="cursor-pointer">Cookies</p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <p>Follow us on </p>
        <a href="">
          <BsInstagram className="text-xl cursor-pointer " />
        </a>
        <AiOutlineFacebook className="text-3xl cursor-pointer " />
        <FiYoutube className="h-9 text-3xl cursor-pointer " />
      </div>
    </div>
  );
}

export default Footer;
