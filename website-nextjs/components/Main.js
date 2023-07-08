import React from "react";
import { AiOutlineMail } from "react-icons/ai";

import { BsFillPersonLinesFill, BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Mission statement goes here
          </p>
          <h1 className="py-4 text-gray-100">
            I'm <span className="text-[#a0c4f8]">Kai'lani</span>
          </h1>
          <h1 className="py-2 text-gray-100">
            Recently, a Computer Science Graduate
          </h1>
          <p className="py-4 text-gray-200 max-w-[70%] m-auto">
            This is a description of who I am that I will finetune later.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
