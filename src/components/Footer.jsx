import React from "react";
import { Link } from "react-router-dom";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";

function Footer() {
  const footerData = [
    {
      title: "Services",
      href: "/service",
    },

    {
      title: "Trainings",
      href: "/comprehensive-training",
    },

    {
      title: "About Us",
      href: "/about",
    },

    {
      title: "Contact Us",
      href: "/contact-us",
    },

    
    
  ];

  const footerIcon = [
    "ri-instagram-fill",
    "ri-facebook-circle-fill",
    "ri-youtube-fill",
    "ri-linkedin-box-fill",
  ];

  const footerImage = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    
  ];

  return (
    <footer className="bg-[#1b2041]  pt-15 rounded-tl-2xl rounded-tr-2xl w-full">
      <div className="md:px-28 px-4 flex flex-col md:flex-row md:justify-between gap-6 ">
        {/* quick link section */}
        <div className="text-white">
          <div>
            <h2 className="font-bold text-2xl md:text-5xl ">𝔼tsec Inc.</h2>
            <div className="border-b-2 w-20 md:w-35"></div>
          </div>
          <div className="flex flex-col gap-2 font-light ml-1 mt-4">
            {footerData?.map((item, index) => (
              <div key={index}>
                <i className="mr-2 ri-arrow-right-s-line"></i>

                <Link
                  to={item.href}
                  className="transition-all duration-200 hover:text-[#29BCAC] inline-block hover:scale-95 text-sm"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* contact section */}

        <div className="text-white mt-4">
          <div>
            <div className="border-b-2 w-22 md:w-27"></div>
            <h2 className="font-bold text-xl md:text-2xl ">Contacts</h2>
          </div>
          <div className="flex flex-col gap-2 font-light ml-2 mt-4 md:w-[450px]  break-words">
            <div className="flex flex-row items-start h-auto w-full">
              <div>
                <span>
                  <i className="ri-map-pin-fill mr-2"></i>
                </span>
              </div>
              <div className="break-words  ">
                <span className=" break-words "  style={{ whiteSpace: "normal", overflowWrap: "break-word" }}>
                  Srinivasa homes apt flat no 401, Bandari Layout Road no 4a,
                  Nizampet, Hyderabad, 500090
                </span>
              </div>
            </div>

            <div className="flex flex-row ">
            <span>
                  <i className="ri-phone-fill mr-2"></i>
                </span>

                <span>+91 7093107748</span>

            </div>

            <div className="flex flex-row break-words break-all">
            <span>
                  <i className="ri-mail-fill mr-2"></i>
                </span>
               
                <span className="break-words break-all" style={{ whiteSpace: "normal", overflowWrap: "break-word" }}>contact@etsecinc.com</span>
                
              </div>

           </div>   
            

          <div className="mt-6 flex gap-2 ml-4">
            {footerIcon?.map((item, index) => (
              <button
                key={index}
                className="rounded-full border border-white w-8 h-8 flex justify-center items-center group hover:bg-gray-100 transition-all duration-200 cursor-pointer hover:scale-95"
              >
                <i className={`${item} p-1 group-hover:text-[#0599A5]`}></i>
              </button>
            ))}
          </div>
        </div>

        {/* gallery section */}

        <div className="text-white mt-4">
          <div>
            <div className="border-b-2 w-22"></div>
            <h2 className="font-bold text-2xl ">Gallery</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-1 mt-4">
            {footerImage?.map((item, index) => (
              <div key={index} className="md:w-30 w-auto">
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-white mt-10 ">
        <div className="border-b border-gray-300 w-full"></div>
        <p className="p-4">
          © ETSEC Incorporate , All Right Reserved. Designed By Team ETSEC
        </p>
      </div>
    </footer>
  );
}

export default Footer;
