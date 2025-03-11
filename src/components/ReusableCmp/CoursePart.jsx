import React from "react";
import b1 from "../../assets/b1.jpg";
import cs from "../../assets/cs.jpg";
import fs from "../../assets/fs.png";
import programming from "../../assets/pro.jpg";

import { Link } from "react-router-dom";

function CoursePart() {
  return (
    <div className="px-4 md:px-28 mt-10 gap-4">
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-24">
    <div className="md:col-span-2 overflow-hidden">
      <Link className="w-full h-full cursor-pointer relative group">
        <img
          src={fs}
          alt="FS"
          className="w-full h-[180px] group-hover:scale-105 transition-all duration-200"
        />
        <div
          className="absolute top-0 w-full h-full hover:scale-105"
          style={{
            background: `rgba(255,255,255,0.2)`,
          }}
        ></div>
        <div className="absolute bottom-0 text-right w-full font-bold">
          <p className="bg-white p-2 inline-block">Fullstack Development</p>
        </div>
      </Link>
    </div>

    <div className="md:row-span-2 overflow-hidden">
      <Link className="w-full h-full cursor-pointer relative group">
        <img
          src={b1}
          alt="B1"
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-200"
        />
        <div
          className="absolute top-0 w-full h-full"
          style={{
            background: `rgba(255,255,255,0.2)`,
          }}
        ></div>
        <div className="absolute bottom-0 text-right w-full font-bold">
          <p className="bg-white p-2 inline-block">Blockchain</p>
        </div>
      </Link>
    </div>

    <div className="overflow-hidden">
      <Link className="w-full h-full overflow-hidden cursor-pointer relative group">
        <img
          src={programming}
          alt="Programming"
          className="w-full h-[180px] group-hover:scale-105 transition-all duration-200"
        />
        <div
          className="absolute top-0 w-full h-full"
          style={{
            background: `rgba(255,255,255,0.2)`,
          }}
        ></div>
        <div className="absolute bottom-0 text-right w-full font-bold">
          <p className="bg-white p-2 inline-block">Programming</p>
        </div>
      </Link>
    </div>

    <div className="overflow-hidden">
      <Link className="w-full h-full overflow-hidden cursor-pointer relative group">
        <img
          src={cs}
          alt="IoT"
          className="w-full h-[180px] group-hover:scale-105 transition-all duration-200"
        />
        <div
          className="absolute top-0 w-full h-full"
          style={{
            background: `rgba(255,255,255,0.2)`,
          }}
        ></div>
        <div className="absolute bottom-0 text-right w-full font-bold">
          <p className="bg-white p-2 inline-block">Cyber Security</p>
        </div>
      </Link>
    </div>
  </div>
</div>

  );
}

export default CoursePart;
