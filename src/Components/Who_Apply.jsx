import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Who_Apply = () => {
  //    const eligibilityCriteria = [
  //   "Early-stage & Growth-stage startups",
  //   "Revenue & Pre-Revenue companies",
  //   "Tier 2 & Tier 3 founders especially encouraged",
  //   "Sector-agnostic (except FMCG & Alcohol brands)",
  //   "Global applicants welcome"
  // ];
  const eligibilityCriteria = [
    "Seed to Pre IPO companies",
    "Tier 2 & Tier 3 founders especially encouraged",
    "Sector-agnostic (except Food, FMCG & Alcohol brands)",
    "Global applicants welcome",
  ];

  AOS.init();
  return (
    <div className="bg-[#5B60CA] ">
      <div className="container mx-auto p-6 ">
        <h2 className="text-center text-white text-3xl mb-5 font-bold">
          Who Should Apply
        </h2>
        <p className="text-center xl:text-xl mb-5 text-white capitalize"></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {eligibilityCriteria.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg flex items-center shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-4">
                  <h3 className="xl:text-xl text-lg font-bold text-gray-800 mb-2 text-center">
                    {item}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Who_Apply;
