import React from "react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bc1 from "../assets/b2.avif";
import pro from '../assets/pro.jpg';
import two from '../assets/2.jpg';
import cs from '../assets/cs.jpg';
import fs from '../assets/fs.png';

import branding from "../assets/branding.png";
import Card from "./Card";
import Heading from "./ReusableCmp/Heading";
import AboutPart from "./ReusableCmp/AboutPart";
import CoursePart from "./ReusableCmp/CoursePart";
import CourseCard from "./ReusableCmp/CourseCard";
import course1 from "../assets/course-1.jpg";
import course2 from "../assets/course-2.jpg";
import course3 from "../assets/course-3.jpg";

function Home() {
  const sliderData = [
    {
      image: bc1,
      title: "Blockchain Fundamental",
      description:
        "Learn the core concepts of blockchain technology, including cryptography, consensus mechanisms, and distributed ledgers.",
    },
    {
      image: cs,
      title: "Cyber Security",
      description:
        "Explore the principles and practices of protecting computer systems and networks from unauthorized access, use, disclosure, disruption, modification, or destruction.",
    },
    {
      image: fs,
      title: "Full Stack Development",
      description:
        "Master both front-end and back-end web development technologies to build complete and dynamic web applications.",
    },
    {
      image: pro,
      title: "Programming",
      description:
        "Develop essential programming skills in various languages and paradigms, enabling you to create software solutions and automate tasks.",
    },
    {
      image: two,
      title: "Data Structure",
      description:
        "Understand how to organize and store data efficiently using different data structures like arrays, linked lists, trees, and graphs.",
    },
  ];

  const cardData = [
    {
      icon: "ri-graduation-cap-fill",
      title: "Skilled Instructors",
      text: "Effective instructors continuously update their knowledge, integrating current industry trends into their curriculum.",
    },

    {
      icon: "ri-global-fill",
      title: "Online Classes",
      text: "Online classes provide access to diverse resources, enabling students to explore various subjects beyond classroom limitations.",
    },

    {
      icon: "ri-home-9-fill",
      title: "Home Projects",
      text: "Collaborative home projects strengthen family bonds, providing opportunities for teamwork in creating a comfortable environment.",
    },

    {
      icon: "ri-book-open-fill",
      title: "Book Library",
      text: "A well-organized book library enhances research efficiency, enabling users to locate information quickly and effectively.",
    },
  ];

  const courseData = [
    {
      image: course1,
      title: "Blockchain Fundamental",
      formLink: "https://forms.gle/9zwadYFN2kMHqKwB9",
      detailsLink: "/training-achievement/Blockchain Training/syllabus",
    },
    {
      image: course2,
      title: "Cybersecurity",
      formLink: "https://forms.gle/JL5LPcvj9yjUiAzx7",
      detailsLink: "/training-achievement/Cybersecurity Training/syllabus",
    },
    {
      image: course3,
      title: "Fullstack Development",
      formLink: "https://forms.gle/cSsPrQxTXS7vDmSD7",
      detailsLink: "/training-achievement/Full Stack Development Training/syllabus",
    },
  ];

  return (
    <div className="max-w-screen z-0 mt-11 h-auto bg-gray-100 pb-20">
      {/* header section */}
      <div className=" md:pt-2  md:px-4 flex flex-col md:flex-row w-full md:gap-2 md:h-[90vh] justify-center items-center ">
        {/* left section */}
        <div className="w-full md:w-5/12 flex justify-center mt-2 md:mt-18">
          <img src={branding} alt="" className="w-[80%] md:w-full  mt-0 " />
        </div>

        {/* right */}

        <div className="w-full md:w-7/12 h-auto md:h-[100%] relative mx-auto   ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-auto md:h-[90vh] w-full"
          >
            {sliderData?.map((item, index) => (
              <SwiperSlide className=" h-auto md:h-[90vh] w-full" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-fit h-auto md:h-[90vh] w-full"
                />

                <div
                  className="absolute bottom-0 right-0 w-full  text-white px-6 text-center pb-10 pt-4"
                  style={{
                    background:`  linear-gradient(transparent 0%, #000000 31%, rgba(0,0,0,0.87) 100%)`
                  }}
                >
                  <h4 className="font-bold text-2xl md:text-4xl text-center">
                    {item.title}
                  </h4>
                  <p className="hidden sm:block font-semibold text-sm md:text-lg w-full md:w-10/12 text-center mx-auto">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}

            <div className="autoplay-progress" slot="container-end"></div>
          </Swiper>
        </div>
      </div>

      {/* card section */}
      {/* <div className="px-6 md:px-16 w-full flex gap-6 justify-center items-center mt-10 md:mt-28 flex-wrap ">
        {cardData?.map((item, index) => (
          <Card key={index} title={item.title} text={item.text}>
            {item.icon}
          </Card>
        ))}
      </div> */}

      {/* about section */}

      <div className="mt-22 w-full px-4 md:px-22 mb-10 ">
        <AboutPart />
      </div>

      {/* course section */}

      <div className=" mt-22 flex flex-col ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-bold  md:text-5xl ">Training</h2>
          <h3 className="font-bold  md:text-4xl ">Categories</h3>
        </div>
        <div className="">
          <CoursePart />
        </div>
      </div>

      {/* another course section */}

      <div className="md:px-16 px-6 flex flex-col md:gap-6 justify-center mt-28 w-full ">
        <div className="flex flex-col gap-4 justify-center items-center">
          
          <h3 className="font-bold text-lg md:text-4xl ">Popular Training Courses</h3>
        </div>

        <div className="flex flex-row gap-8 justify-center mt-10 flex-wrap px-2">
          {courseData?.map((item, index) => (
            <CourseCard key={index} image={item.image} formLink={item.formLink} detailsLink={item.detailsLink}> 
              {item.title}
            </CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
