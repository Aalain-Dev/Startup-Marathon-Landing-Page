import React from 'react';

const Venue = () => {
  return (
    <>
      <div
        className="h-[500px] w-full flex items-center justify-center relative"
        style={{
          backgroundImage: `url("https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/80/2016/12/02015735/Sofitel-Mumbai-BKC-Pondich%C3%A9ry-Caf%C3%A9-Dining-Area.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      <div className='overlay absolute top-0 bg-[#00000095] w-full h-full '></div>

<div className='flex flex-col  text-white z-100  gap-10'>
<p className='text-center xl:text-5xl text-2xl font-bold'>Date & Venue
</p>
<p className='text-center xl:text-2xl text-xl'>📅 8th to 13th September 2025
</p>
<p className='text-center xl:text-2xl text-xl'>📍 To be announced
</p>
<span className=' font-bold underline text-2xl w-[200px] mx-auto text-white text-center'>
{/* <a  target='_blank' className = "text-center text-2xl font-bold " className=''>View In Maps</a> */}

</span>
</div>
      </div>
    </>
  );
};

export default Venue;
