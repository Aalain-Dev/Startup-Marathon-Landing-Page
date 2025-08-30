import React from "react";
import image from "../Images/why.png";
const Why_Choose_Us = () => {
  return (
    <>
      <div className="bg-[#f7f7f7] pt-10 pb-10">
        <section className="container ">
          <div>
            <h2 className="text-center text-4xl font-bold mb-10">
              Why Join Us
            </h2>

            <div className="flex mb-10 flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <p>
                  At BizDateUp, we help startups raise funds, get mentorship,
                  and scale faster. We’ve already supported 32+ startups and
                  have built a strong investor network across India.
                </p>
                <p className="mt-4 mb-4">
                  Startup Marathon is our way of making startup fundraising
                  easier, faster, and more founder-friendly.
                </p>
                <ul
                  className="space-y-6 text-left text-lg list-disc
 "
                >
                  <li
                    className="flex items-start gap-3 list-disc
"
                  >
                    <span className="font-semibold">
                      Meet Mr. Jeet Chandan and the BizDateUp team in person
                    </span>
                  </li>
                  <li className="flex items-start gap-3  list-disc font-bold">
                      Access funding and mentorship opportunities
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold">
                      Immediate funding decisions, no long wait cycles
                    </span>
                  </li>
                </ul>
                <a href="https://www.bizdateup.com/" target="_blank">
                  <p className="mt-2 underline">
                    Tap on the link know more  about BizDateUp
                  </p>
                </a>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={image}
                  alt="Why Join Us"
                  className="w-full max-w-[400px] rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Why_Choose_Us;
