import React from "react";
import { Link } from "react-router-dom";
import Heading from "../ReusableCmp/Heading";

function ComprehensiveTraining() {
  const comprehensiveData = [
    {
      icon: "ri-shield-fill",
      title: "Cybersecurity Training",
      text: "Our SOC ensures 24/7 threat detection and response,....",
      href: "/comprehensive-training",
    },
    {
      icon: "ri-swap-box-line",
      title: "Blockchain Training",
      text: "Master the fundamentals of blockchain architecture, smart contracts.....",
      href: "/comprehensive-training",
    },
    {
      icon: "ri-graduation-cap-fill",
      title: "Coding Training",
      text: "Develop programming expertise in Python, Java, JavaScript, and.....",
      href: "/comprehensive-training",
    },
    {
      icon: "ri-dice-line",
      title: "Data Structures Training",
      text: "Understand fundamental and advanced data structures such as arrays.....",
      href: "/comprehensive-training",
    },

    {
      icon: "ri-graduation-cap-fill",
      title: "Full Stack Development Training",
      text: "Gain expertise in front-end and back-end technologies to build dynamic web applications......",
      href: "/comprehensive-training",
    },
  ];
  return (
    
      <div className="w-full bg-gray-100 pt-18 pb-20 ">
        <div className="w-full flex flex-col gap-4 items-center justify-center">
          <Heading>
            <div className="flex flex-col md:flex-row md:gap-2 justify-center items-center">
              <span>Comprehensive</span>
              <span> Training</span>
            </div>
          </Heading>

          <h3 className="font-bold text-xl md:text-4xl">
            {" "}
            Trainings We Offer{" "}
          </h3>
        </div>

        <div className="px-6 mt-18 flex flex-row gap-8 justify-center flex-wrap ">
          {comprehensiveData?.map((item, index) => (
            <div
              className="flex flex-col gap-4  py-4 rounded-lg shadow-md bg-gray-200 transition-all duration-200 hover:translate-y-1.5 cursor-pointer hover:shadow-[#06BBCC] "
              key={index}
            >
              <div className="text-center text-4xl md:text-6xl text-[#06BBCC]">
                <i className={item.icon}></i>
              </div>

              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-lg md:text-2xl text-center">
                  {item.title}
                </h4>
                <p className=" text-justify w-10/12 mx-auto">{item.text}</p>
              </div>

              <div className="ml-4 md:px-6 ">
                <Link
                  to={`/training-achievement/${item.title}`}
                  className="py-2 px-4 border font-bold bg-gray-100  border-[#06BBCC] rounded-md transition-all duration-200 hover:scale-95 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  );
}

export default ComprehensiveTraining;
