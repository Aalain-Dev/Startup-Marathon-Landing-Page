import React from 'react'

const Navbar = () => {
  return (
    <>
 <nav className="w-full px-6 py-4 flex items-center xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-6 justify-between bg-[#5B60CA] shadow-md">
      {/* Logo */}
      <div className='container flex items-center xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-6 justify-between'> 
      <div className="flex items-center">
        <img
          src="https://capitalconnect.bizdateup.com/assets/BizDateUp-logo-ConUm-0I.png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Button */}
      <div>
       <button className="bg-white text-black px-2 py-2 font-bold rounded-lg text-xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
  <a href="https://calendly.com/puneet-bizdateup/startup-marathon-x-bizdateup?utm_source=Facebook&utm_medium=Paid&utm_campaign=StartupMarathon" target="_blank" rel="noopener noreferrer">
    Book Your Slot Now
  </a>
</button>

      </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar
