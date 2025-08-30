import React, { useRef } from "react";
import VariableProximity from "./GSAP/VariableProximity";
import image from "../Images/about.png";
const About = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row container items-center mx-auto px-4 py-10 gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2 ">
            <h2 className="text-left text-black text-3xl mb-5 font-bold">
              About The Marathon
            </h2>
            <p className="text-left xl:text-xl text-lg">
              <b>              Startup Marathon 2.0: 
</b>
              <br/>
              BizDateUp invites ambitious founders from
              across the globe to Mumbai for an intensive, 4-day event designed
              to connect India's most promising pre-vetted startups with
              on-the-spot capital funding.
            </p>
            <p className="text-left xl:text-xl text-lg mt-4">
              This is a dynamic, high-stakes platform built on the success of the first Startup Marathon, promising a bigger and better race to capital.
              <br />
              <br />
Each day, selected startups will secure funding and mentorship directly from Mr.Jeet Chandan himself. We are backing real founders with potential funding.            </p>
            <ul className="text-left mt-2 space-y-2">
              <li className="text-left xl:text-xl text-lg font-bold">
               Total Funding Pool: ₹100 Crore

              </li>
              <li className="text-left xl:text-xl text-lg font-bold">
Per Startup Funding Potential: Up to ₹8 Cr (USD $500K–$1M)
              </li>
              <li className="text-left xl:text-xl text-lg font-bold">
                Equity-Based Investment
              </li>
            </ul>
            <button className="bg-[#5B60CA] text-white px-5 rounded-lg py-2 mt-5 text-xl font-bold">
              <a
                target="_blank"
                href="https://calendly.com/puneet-bizdateup/startup-marathon-x-bizdateup?utm_source=Facebook&utm_medium=Paid&utm_campaign=StartupMarathon"
              >
               Apply Now
              </a>
            </button>
          </div>

          {/* Right Section (could be text or image) */}
          <div className="w-full md:w-1/2">
            <img src={image} className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
