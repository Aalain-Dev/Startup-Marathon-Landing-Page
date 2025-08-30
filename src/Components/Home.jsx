import React from 'react'
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
  return (
   <>
   <Navbar/>
<Banner/>
<About/>
<Who_Apply/>
<Why_Choose_Us/>
<Venue/>
<ImageSlider/>
<TimeLine/>
<StartupForm/>
<Footer/>
   </>
  )
}

export default Home