import React from "react";
import {Link} from 'react-router-dom'

function Services() {
  const serviceData = [
    {
      icon: "ri-shield-fill",
      title: "Cybersecurity Services",
      text: "Our SOC ensures 24/7 threat detection and response, while our NOC optimizes network performance and reliability. We also provide VAPT to identify vulnerabilities and strengthen security. With advanced technology and expert analysis, we safeguard your IT infrastructure.",
	  href:"/cyber-security"
    },
	{
		icon: "ri-graduation-cap-fill",
		title: "Comprehensive Training - Empowering Your Workforce",
		text: "A skilled workforce is essential for success in the digital age. Our tailored training programs cover Cybersecurity, Blockchain, Coding, Data Structures, and Full Stack Development, equipping employees with in-demand technical skills. By fostering a culture of continuous learning, we empower professionals to innovate, secure digital assets, and excel in modern technology landscapes.",
		href:"/comprehensive-training"
	}
  ];

  return (
    <div className="w-full bg-gray-100 pt-18 pb-20">

		<div className="flex justify-center items-center">
				<h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Our Core Services</h2>

		</div>
		<div className="md:px-28 mt-18 flex flex-col gap-8  px-6">

		{serviceData?.map((item, index) => (
        <div className="flex flex-col gap-4  p-4 rounded-lg shadow-md bg-gray-200 transition-all duration-200 hover:translate-y-1.5 cursor-pointer hover:shadow-[#06BBCC] " key={index} >
          <div className="text-center text-4xl md:text-6xl text-[#06BBCC]">
            <i className={item.icon}></i>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-xl md:text-3xl text-center">{item.title}</h4>
            <p className="px-2 md:px-6 text-justify" style={{
				fontFamily: `IBM Plex Mono, monospace`
			}}>{item.text}</p>
          </div>

		  <div className="px-2 md:px-6">
			<Link to={item.href} className="py-2 px-4 border font-bold bg-gray-100  border-[#06BBCC] rounded-md transition-all duration-200 hover:scale-95 inline-block">Learn More</Link>
		  </div>
        </div>
      ))}

		</div>
 
    </div>
  );
}

export default Services;
