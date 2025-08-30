import React, { useRef } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import About from './About'
import Why_Choose_Us from './Why_Choose_Us'
import Venue from './Venue'
import ImageSlider from './ImageSlider'
import TimeLine from './TimeLine'
import StartupForm from './Form'
import Footer from './Footer'
import Who_Apply from './Who_Apply'

const Home = () => {
    const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <>
   <Navbar />
<Banner  onScrollToForm={scrollToForm}/>
<About onScrollToForm={scrollToForm}/>
<Who_Apply/>
<Why_Choose_Us/>
<Venue/>
<ImageSlider/>
<TimeLine/>
 <div ref={formRef}>
       <StartupForm/>
     </div>
<Footer/>
   </>
  )
}

export default Home