import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#a0c4f8]">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-gray-500">
            Add comment here lightly grayed out for flair
          </p>
          <p className="py-2 text-gray-300">
            Description of who I am introduction.
          </p>
          <p className="py-2 text-gray-300">
            Description of who I am second paragraph.
          </p>
          <p className="py-2 text-gray-300 underline cursor-pointer">
            Short catchy tagline.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-x flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
