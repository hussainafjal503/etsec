import React from "react";
import course1 from "../../assets/course-1.jpg";

function CourseCard({ children, image }) {
  return (
    <div className="max-w-[320px] w-fit bg-[#e2fdff] flex flex-col gap-4 rounded-md transition-all duration-200 hover:scale-95 max-h-[350px] h-auto">
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          className="hover:scale-105 transition-all duration-200 cursor-pointer rounded-tl-md rounded-tr-md"
        />
      </div>

      
        <div className="flex flex-col items-center">
          <div>
            <p className="font-semibold text-xs md:text-xl">{children}</p>
          </div>

          <div className="flex flex-row text-white gap-6 font-semibold md:text-sm text-xs p-4 md:p-6">
            <button className="bg-[#29BCAC] rounded-md md:py-2 py-1 px-2 md:px-4 hover:bg-[#06BBCC] transition-all duration-200 hover:scale-95 cursor-pointer">
              Know More
            </button>
            <button className="bg-[#29BCAC] rounded-md md:py-2 py-1 px-2 md:px-4 hover:bg-[#06BBCC] transition-all duration-200 hover:scale-95 cursor-pointer">
              Join Now
            </button>
          </div>




        </div>
     
    </div>
  );
}

export default CourseCard;
