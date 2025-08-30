import React from 'react';
import image from "../Images/works.jpg"

const TimeLine = () => {
  

  return (
     <section className="py-16 px-4 md:px-20 bg-white">
      <h2 class="text-center text-4xl font-bold mb-10">How It Works</h2>
     {/* <div className="max-w-4xl mx-auto text-center">
       <h2 className="text-4xl font-bold text-gray-900 mb-10">How It Works</h2>
       <ol className="space-y-6 text-left text-lg text-gray-700">
         <li className="flex items-start gap-4">
           <span className="text-2xl text-indigo-600">⿡</span>
           <span>Apply Online</span>
         </li>
         <li className="flex items-start gap-4">
           <span className="text-2xl text-indigo-600">⿢</span>
           <span>Get Shortlisted</span>
         </li>
         <li className="flex items-start gap-4">
           <span className="text-2xl text-indigo-600">⿣</span>
           <span>Pitch Live at Sofitel BKC, Mumbai (20–30 July)</span>
         </li>
         <li className="flex items-start gap-4">
           <span className="text-2xl text-indigo-600">⿤</span>
           <span>Secure ₹4–8 Crore Funding in Return for Equity</span>
         </li>
         <li className="flex items-start gap-4">
           <span className="text-2xl text-indigo-600">⿥</span>
           <span>Receive Ongoing Mentorship and Support</span>
         </li>
       </ol>
     </div> */}
     <img src={image} alt="" className='w-full' />
   </section>
  );
};

export default TimeLine;
