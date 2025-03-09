import React from "react";

function Heading({ children }) {
  return (
    <div className="flex flex-row gap-2 items-center ">
      <div className="flex flex-col justify-center gap-2">
        <div className="border-b-2 border-[#06BBCC]  w-8 md:max-w-20  ml-auto"></div>
        <div className="border-b-2 border-[#06BBCC]  w-12 md:max-w-30"></div>
      </div>
      <div className="uppercase text-[#06BBCC] text-lg md:text-2xl font-bold ">
        {children}
      </div>

      <div className="flex flex-col justify-center gap-2">
        <div className={`border-b-2 border-[#06BBCC]  w-8 md:max-w-20 `}></div>
        <div className="border-b-2 border-[#06BBCC]  w-12 md:max-w-30"></div>
      </div>
    </div>
  );
}

export default Heading;
