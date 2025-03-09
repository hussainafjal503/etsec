import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAchievement } from "../../data/courseDetails";
import Heading from "../ReusableCmp/Heading";

function TrainingAchievement() {
  const params = useParams();
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const response = fetchAchievement(params.id);
    setResponseData(response);
  }, []);

  const handleRedirect = (googleLink) => {
    window.open(googleLink, "_blank");
    // window.location.href = `${googleLink}`; 
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="md:px-22 px-6">
        {responseData?.map((item, index) => (
          <div className="flex flex-col gap-8" key={index}>
            <div className="w-full flex flex-col gap-8 items-center justify-center">
              <Heading>
                <div className="flex flex-col md:flex-row md:gap-2 justify-center items-center">
                  <span>
                    {item.category.substring(0, item.category.indexOf(" "))}
                  </span>
                  <span>
                    {item.category.substring(item.category.indexOf(" "))}
                  </span>
                </div>
              </Heading>

              <h3 className="font-light w-10/12  md:w-6/12 text-center text-sm">
                {item.subheading}
              </h3>
            </div>

            <div className="flex flex-col gap-4 ">
              {item?.achievement?.map((data, index) => (
                <div
                  className="border border-gray-400 shadow-md rounded-lg p-4 flex flex-col md:flex-row gap-8 items-center justify-center md:max-w-6/12 mx-auto h-auto bg-gray-300"
                  key={index}
                >
                  <div className="font-bold md:text-6xl text-6xl text-[#4ac6d6]">
                    <i className={data?.icon}></i>
                  </div>
                  <div className="text-justify md:p-2">
                    <p>{data?.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center items-center gap-6 font-semibold">
              <Link
                to={item.href}
                className="py-2 px-4 rounded-lg border border-[#4ac6d6] transition-all duration-200 hover:scale-90 hover:bg-[#4ac6d6]  hover:text-white"
              >
                Course Details
              </Link>

              <button
                onClick={() => handleRedirect(item.register)}
                className="py-2 px-4 rounded-lg border border-[#4ac6d6] transition-all duration-200 hover:scale-90 hover:bg-[#4ac6d6]  hover:text-white"
              >
                {`Register for ${item.category}`}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainingAchievement;
