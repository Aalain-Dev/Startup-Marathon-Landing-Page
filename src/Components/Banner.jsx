import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaArrowRightLong } from "react-icons/fa6";
import CountdownTimer from "./Timer";
import SplitText from "../Components/GSAP/SplitText";
import main from "../Images/main.png";
import strip from "../Images/strip.png"; // Assuming you have a strip image

const Banner = ({onScrollToForm }) => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="flex flex-col relative md:flex-row items-center justify-between px-6 py-5 gap-10 bg-[#5B60CA] relative overflow-hidden">
      {/* LEFT CONTENT SECTION */}
      <img
        src={strip}
        className="absolute right-0 w-[600px] bottom-[-30px] z-2"
        alt=""
      />
      <div className="container flex justify-center items-center xl:flex-row lg:flex-row md:flex-row flex-col">
        <div className="flex flex-col justify-center items-start gap-5 z-10 w-full xl:w-1/2">
          <h1 className="text-white xl:text-[30px] lg:text-5xl text-xl font-extrabold text-left">
            <SplitText
              text="Startup Marathon 2.0"
              className="text-white"
              delay={150}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>

          <p className="xl:text-[20px] lg:text-2xl text-[18px] text-white font-bold text-left xl:block lg:block hidden">
            <SplitText
              text={<>Secure Funding Up to 8cr </>}
              className="text-white"
              delay={150}
              duration={0.1}
              ease="power1.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
          <p className="xl:text-[20px] lg:text-2xl text-[18px] text-white font-bold text-left xl:hidden lg:hidden block">
            Secure Funding Up to 8cr
          </p>

          {/* Date & Location */}
          <div className="flex gap-5 flex-col sm:flex-row rounded-xl">
            <div className="flex xl:items-center lg:items-center items-start text-white rounded-lg  xl:flex-row lg:flex-row flex-col gap-2 ">
              <div className="flex ">
                <span className="text-2xl">
                  <FaLocationDot />
                </span>
                <h3 className="text-lg font-semibold mr-2">
                 To be announced
                </h3>
              </div>
              <div className="flex ">
                <span className="text-2xl mx-2">
                  <FaCalendarAlt />
                </span>
                <h3 className="text-lg font-semibold">
                  8th - 13th September 2025
                </h3>
              </div>
            </div>
          </div>

          {/* Countdown & CTA */}
          {/* <CountdownTimer /> */}

          <button className="bg-white text-black px-3 py-2 rounded-2xl text-lg font-bold cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
            <a
 onClick={onScrollToForm}
rel="noopener noreferrer"
            >
              <span className="flex flex-row gap-2 items-center">
                 Apply Now  <FaArrowRightLong />
              </span>
            </a>
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full xl:w-1/2 flex justify-center z-3">
          <img src={main} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
