import React from "react";
import aboutMain from "../../assets/aboutMain.png";
import AboutPart from "../ReusableCmp/AboutPart";

function AboutPage() {
  return (
    <div className="w-full bg-gray-100  ">
      <div className="bg-[#29BCAC] w-full flex flex-col md:flex-row gap-2 md:gap-6">
        <div className="text-black w-full md:w-7/12 px-6 mt-24 md:mt-35 md:pl-28 flex flex-col gap-4">
          <h3 className="text-white font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            Your Fabulous Learning Journey
          </h3>
          <p className="text-white font-semibold md:w-6/12">
            We convince you it'll be really engrossing, full of new knowledge
            and insights adventure
          </p>
        </div>
        <div className=" w-full md:w-5/12">
          <img src={aboutMain} alt="" />
        </div>
      </div>

      <div className="py-10 w-full px-4 md:px-22">
        <AboutPart />
      </div>
    </div>
  );
}

export default AboutPage;
