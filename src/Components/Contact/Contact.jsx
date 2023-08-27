import React from "react";
import "./Contact.scss";
// import "animate.css";
const Contact = () => {
  return (
    <div>
      <section className="contact  bg-white w-full relative">
        <div className="contact_container container overflow-hidden flex h-full bottom-0 w-full">
          <div className="contact_left animate__animated animate__fadeInUp w-2/4 flex justify-end mb:hidden md:hidden sm:hidden mb:py-2 xl:block">
            <img
              src="https://res.cloudinary.com/dvzingci9/image/upload/v1691020346/videos/person_vj5bvt.png"
              alt=""
              className="person w-full object-contain"
            />
          </div>
          <div className="contact_right xl:w-2/4 mb:w-full md:w-full sm:w-full flex items-center justify-left">
            <div className="contact-input w-full py-5">
              <h2 className="text-contact text-[3rem] font-bold text-white">
                Contact Me
              </h2>
              <div className="my-10 animate__animated animate__fadeInRight">
                <input
                  type="text"
                  className="text text-white"
                  placeholder="Your nick name"
                />
                <div className="flex my-4">
                  <input
                    type="text "
                    className="text text-white mr-2"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="text text-white"
                    placeholder="Phone number"
                  />
                </div>
                <input type="text" className="text" placeholder="Messager" />
              </div>
              <button className="flex items-center p-[1.2rem] bg-[#FFC845] rounded-full animate__animated animate__fadeInRight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#241775"
                  className="w-6 h-6 color"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span className="ml-2 font-bold text-[0.95rem] text-[#241775] ">
                  Send email
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
