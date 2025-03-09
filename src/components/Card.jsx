import React from 'react'

function Card({children,title,text}) {
  return (
<div className="group h-auto min-h-[150px] w-full md:w-fit max-w-[280px] flex flex-col gap-4 shadow-md md:p-6 p-2 rounded-lg text-center transition-all duration-300 hover:translate-y-1.5 cursor-pointer  bg-gray-300 hover:shadow-[#06BBCC]">
  
  <div className="text-2xl md:text-6xl text-[#06BBCC] ">
    <i className={children}></i>
  </div>

  <div className="space-y-4  flex-1">
    <h4 className="font-bold md:text-xl">{title}</h4>
    <p className="break-words text-justify text-xs leading-5">{text}</p>
  </div>
</div>

  )
}

export default Card
