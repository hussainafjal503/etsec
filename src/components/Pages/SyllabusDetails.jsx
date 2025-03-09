import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSyllabus } from "../../data/courseDetails";

function SyllabusDetails() {
  const params = useParams();

  const [syllabus, setSyllabus] = useState(null);

  useEffect(() => {
    const response = fetchSyllabus(`${params.id} Syllabus`);
    setSyllabus(response[0]);
  }, []);


  return (
    <div className="py-18 bg-gray-100 h-auto">
      <div className="md:px-24 px-2 flex flex-col gap-10 items-center justify-center h-auto">
        {/* heading */}
        <div className="font-bold text-2xl md:text-4xl text-[#09B1C3] uppercase text-center">
          {syllabus?.category}
        </div>

        <div className="flex flex-col gap-6 px-2 md:px-28 w-full h-auto">
          {syllabus?.details?.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-2 md:px-6 md:pt-2 md:py-20  rounded-md w-full h-auto"
            >
              <div className="flex flex-col gap-8 items-center py-8 text-center">
                <h4 className="font-bold text-xl md:text-2xl text-[#09B1C3]">
                  {item?.subheading}
                </h4>
                <p className="font-light w-full md:w-8/12 break-words h-auto">
                  {item?.description}
                </p>
              </div>

              <div className="bg-gray-100 shadow-md p-2 md:px-4 py-8 rounded-md  w-full">
                {/* Outcomes */}
                <div className="flex flex-col gap-1 font-semibold text-lg md:text-xl">
                  <p>{item?.outcomeTitle}</p>
                  <div className="w-full border-b-2 border-[#09B1C3]"></div>
                </div>

                {item.syllabus?.map((data, index) => (
                  <div key={index} className="mt-4 px-4">
                    {/* Subheading */}
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-2 ">
                        <i className={`${data?.icon} text-[#09B1C3]`}></i>
                        <p className="break-words">{data?.sheading}</p>
                      </div>
                      <ul
                        className={`list-disc ml-10 ${
                          data?.text ? "block" : "hidden"
                        }`}
                      >
                        <li className="font-light break-words" style={{
                          fontFamily:  `Neuton, sans-serif`
                        }}>
                          {data?.text}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SyllabusDetails;
