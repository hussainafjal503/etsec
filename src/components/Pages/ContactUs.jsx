import React from "react";
import contactImage from "../../assets/contact_us.png";

function ContactUs() {
  const contactDetails = [
    {
      title: "Office",
      icon: "ri-map-pin-fill",
      text: "Srinivasa homes apt flat no 401, Bandari Layout Road no 4a, Nizampet, Hyderabad, 500090",
    },
    {
      title: "Mobile",
      icon: "ri-phone-fill",
      text: "+91 7093107748",
    },
    {
      title: "Email",
      icon: "ri-mail-ai-fill",
      text: "contact@etsecinc.com",
    },
  ];

  const mapSrc = `https://www.google.com/maps?q=17.519576383390312,78.37938227349714&hl=es;z=14&output=embed`;

  // const mapSrc = `https://www.google.com/maps/embed?pb=${encodeURIComponent(
  //     "!1m18!1m12!1m3!1d3804.747215089243!2d78.37938227349714!3d17.519576383390312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8dfe771d1963%3A0x399254100bf8de7b!2sRoad%20No.%204-a%2C%20Vasanth%20Nagar%20Colony%2C%20Nizampet%2C%20Hyderabad%2C%20Telangana%20500090!5e0!3m2!1sen!2sin!4v1735114804880!5m2!1sen!2sin"
  //   )}`;

  return (
    <div className=" bg-gray-100 w-full pb-18">
      <div className="w-full px-4 md:px-24 flex flex-col md:flex-row gap-2 bg-gray-300 m-0 pt-10 md:pt-20 pb-10">
        {/* Left Section */}
        <div className="w-full md:w-8/12 mt-10 md:mt-20 flex flex-col gap-4 md:gap-8">
          <h2 className="text-2xl md:text-6xl font-bold">𝕮𝖔𝖓𝖙𝖆𝖈𝖙 𝖀𝖘</h2>
          <p
            className="w-full md:w-10/12 font-semibold md:text-lg text-sm break-words"
            style={{
              fontFamily: `Neuton`,
            }}
          >
            Let's connect: We're here to help, and we would love to hear from
            you! Whether you have a question, a comment, or just want to chat,
            you can reach out to us through the contact form on this page, or by
            phone and email.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-4/12 px-8 flex justify-center">
          <img
            src={contactImage}
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="px-10 md:px-28 mt-12 flex flex-col md:flex-row justify-between gap-10">
        {/* Contact Details */}
        <div className="w-full md:w-6/12">
          <h4 className="font-semibold text-2xl mb-6">Get In Touch</h4>
          <div>
            {contactDetails?.map((item, index) => (
              <div
                className="flex flex-row items-center gap-3 mb-4"
                key={index}
              >
                <span className="bg-[#06BBCC] text-white w-12 h-12 flex justify-center items-center">
                  <i className={`${item?.icon} text-xl p-4`}></i>
                </span>
                <div className="flex flex-col">
                  <p className="font-semibold text-[#06BBCC]">{item.title}</p>
                  <p className="text-sm break-words w-full md:w-96">
                    {item?.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-4/12 flex justify-center">
          <div data-wow-delay="0.3s">
            <iframe
              className="position-relative rounded w-full h-auto"
              src={mapSrc}
              style={{ minHeight: "250px", maxHeight: "400px", border: "0" }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-5/12">
          <form
            action=""
            className="flex flex-col justify-center items-center gap-3"
          >
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-md py-2 px-4 border border-gray-300 outline-none w-full"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="rounded-md py-2 px-4 border border-gray-300 outline-none w-full"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Your Subject"
                className="rounded-md py-2 px-4 border border-gray-300 outline-none w-full"
              />
            </div>
            <div className="w-full">
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="rounded-md py-2 px-4 border border-gray-300 outline-none w-full resize-none"
              ></textarea>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="font-semibold border border-[#06BBCC] text-[#06BBCC] rounded-md py-2 px-4 w-full cursor-pointer hover:scale-95 hover:text-white hover:bg-[#06BBCC] transition-all duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
