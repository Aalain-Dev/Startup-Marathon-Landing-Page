import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About'
import Who_Apply from './Components/Who_Apply'
import Banner from './Components/Banner'
import Why_Choose_Us from './Components/Why_Choose_Us'
import How_It_works from './Components/How_It_works'
import Venue from './Components/Venue'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import TimeLine from './Components/TimeLine'
import Loader from './Components/loader'
import StartupForm from './Components/Form'
import ImageSlider from './Components/ImageSlider'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Thanks from './Components/thanks'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
{/* <Loader/> */}
<Routes>
            <Route path="/" element={<Home />} />
<Route path= "/thanks" element = {<Thanks/>}/>
</Routes>
</>
  )
}

export default App
