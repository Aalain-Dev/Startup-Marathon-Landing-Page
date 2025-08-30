import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className='bg-[#5B60CA] mt-10 p-5 pb-10 '>
                <div className='container'>

                    <div className='flex justify-between xl:flex-row lg:flex-row flex-col'>
                        <div className='flex flex-col'>
                            <div  >
                            <img src="https://capitalconnect.bizdateup.com/assets/BizDateUp-logo-ConUm-0I.png" class="h-10 w-auto" />
                        </div>
                        <div className='flex flex-col text-white gap-5 mt-5' >
                            <a href= "https://www.bizdateup.com/importantDisclosures" target='_blank' className='underline'>Important Disclosures</a>
                            <a href= "https://www.bizdateup.com/termsOfService" target='_blank' className='underline'>Terms of Service</a>
                            <a href= "https://www.bizdateup.com/privacypolicy" target='_blank' className='underline'>
Privacy Policy</a>
                        </div>
<div className='mt-5 flex gap-5'>
    <span className='text-white text-xl'>
     <a href = "https://www.facebook.com/bizdateupindia/" target='_blank'>
           <FaFacebookF />
     </a>
    </span>
    <span className='text-white text-xl'>
     <a href = "https://www.instagram.com/bizdateup/?hl=en" target='_blank'>
          <IoLogoInstagram />
     </a>
    </span>
     <span className='text-white text-xl'>
     <a href = "https://in.linkedin.com/company/bizdateup" target='_blank'>
          <FaLinkedinIn />

     </a>
    </span>
    <span className='text-white text-xl'>
     <a href = "https://www.youtube.com/channel/UCAwc4LgejYjGbeZu04wyZFA" target='_blank'>
       <FaYoutube />

     </a>
    </span>
</div>
                        </div>
                        <div>
                            <p className='text-white'>Startup Managers</p>
                            <ul className='text-white'>
                                <li className='mt-4'>Puneet:</li>
                                <li ><a href = "https://www.linkedin.com/in/shahpuneetn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank' className='text-white underline flex items-center gap-1' >LinkedIn: <span className='mx-1'> <FaLinkedinIn /></span> </a>
                               </li>
                                <li ><a href = "mailto:puneet@bizdateup.com" className='text-white underline flex items-center gap-1' >Email: <span className='mx-5'> puneet@bizdateup.com</span> </a>
                               </li>
                                <li className='mt-4'>Prasad:</li>
                                <li ><a href = "https://www.linkedin.com/in/prasad-borkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='text-white underline flex items-center gap-1' >LinkedIn: <span className='mx-1'> <FaLinkedinIn /></span> </a>
                                
                               </li>
                               <li ><a href = "mailto:prasad@bizdateup.com" className='text-white underline flex items-center gap-1' >Email: <span className='mx-5'> prasad@bizdateup.com</span> </a>
                               </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
