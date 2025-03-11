import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/converted.png";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const menu = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Trainings",
      href: "/comprehensive-training",
    },
    {
      title: "Services",
      href: "/service",
    },
    {
      title: "Contact-Us",
      href: "/contact-us",
    },
  ];

  const [hemMenu, setHemMenu] = useState(false);
  const {pathname}=useLocation();


  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[pathname])

  const navClickHandler=()=>{
    setHemMenu(false);
  }

  return (
    <div className="w-full fixed top-0 z-50  bg-gray-100">
      <nav className="flex justify-between py-2 w-full shadow-lg items-center">
        <div className="relative " >
          <button
            className="hover:scale-90 font-bold text-2xl cursor-pointer transition-all duration-200  pl-2 md:pl-10"
            onMouseOver={() => setHemMenu(true)}
            onMouseLeave={() => setHemMenu(false)}
          >
            <i className="ri-menu-fill font-bold text-2xl"></i>

            <div
              className={`w-60 absolute  top-10 bg-white flex flex-col h-[950px] overflow-hidden transition-all duration-300 font-medium text-lg py-4 shadow-md`}
              style={{
                left: `${hemMenu ? -4 : -280}px`,
              }}
            >
              <div className="flex flex-col gap-3 items-center w-full shadow-md h-full">
                {menu?.map((item, index) => (
                  <div key={index}>
                    <NavLink onClick={navClickHandler}
                      to={item.href}
                      className={
                        "hover:text-[#29BCAC] transtion-all duration-200"
                      }
                    >
                      {item.title}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </button>
        </div>
        <div className="w-18 md:w-30 md:pr-10 ">
          <img src={logo} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
