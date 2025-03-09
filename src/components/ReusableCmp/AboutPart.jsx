import React from "react";
import about from "../../assets/about.jpg";
import Heading from "./Heading";
import {Link} from 'react-router-dom'

function AboutPart() {
  return (
    <div className="flex flex-col md:flex-row md:gap-14">
      <div className="w-full md:w-5/12">
        <img src={about} alt="about image" className="rounded-lg " />
      </div>

      <div className=" w-full md:w-7/12 mt-4 flex flex-col gap-6 ">
        <div className="flex justify-center md:justify-start ">
          <Heading>About</Heading>
        </div>
        <h3 className="text-lg md:text-3xl font-bold">
          Welcome to ETSEC Incorporate
        </h3>
        <div className="text-justify space-y-4">
          <p>
            ETSEC Inc. is a premier cybersecurity firm dedicated to providing
            robust and innovative solutions to protect your digital assets and
            ensure the integrity of your IT infrastructure. We specialize in
            delivering comprehensive security services that address the
            multifaceted challenges of today’s digital environment.
          </p>
          <p>
            Our core offerings include a state-of-the-art Security Operations
            Center (SOC) that operates 24/7 to monitor, detect, and respond to
            potential threats in real-time. Our advanced SOC combines
            cutting-edge technology with expert analysis to ensure your network
            remains secure against evolving cyber threats.
          </p>
        </div>

        <div className="flex flex-row gap-4 md:justify-around mt-8">
          <div className="flex flex-row gap-1 md:gap-2 md:text-lg text-xs">
            <i className="ri-arrow-right-line text-[#06BBCC]"></i>
            <p>Skilled Instructors</p>
          </div>

          <div className="flex flex-row gap-1 md:gap-2 md:text-lg text-xs">
            <i className="ri-arrow-right-line text-[#06BBCC]"></i>
            <p>Blanded Mode Classes</p>
          </div>
        </div>

        <div className="mt-6">
          <Link to={"/about"}
           className="inline-block font-bold md:text-lg py-2 px-6 bg-[#06BBCC] rounded-md text-white transition-all duration-200 cursor-pointer hover:scale-95">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPart;
