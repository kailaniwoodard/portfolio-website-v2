import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#a0c4f8]">About</p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2">// Add comment here lightly grayed out for flair</p>
          <p>Description of who I am introduction.</p>
          <p>Description of who I am second paragraph.</p>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default About;
