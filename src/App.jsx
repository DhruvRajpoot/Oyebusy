import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Safe from './components/100safe/Safe'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import HomeApplianceServices from './components/HomeApplianceServices/HomeApplianceServices'
import Navbar from './components/Navbar/Navbar'
import Refer from './components/Refer/Refer'
import ReviewDiv from './components/Reviews/ReviewDiv'
import Service from './components/Service/Service'
import Service2 from './components/Services2/Service2'
import Service3 from './components/Services3/Service3'
import Stamp from './components/Stamp/Stamp'
import TryServiceAd from './components/TryServiceAd/TryServiceAd'
import Whychooseus from './components/Whychooseus/Whychooseus'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Service />
      <Safe />
      <Service2 />
      <HomeApplianceServices />
      <TryServiceAd />
      <Service3 />
      <Whychooseus />
      <ReviewDiv />
      <Refer />
      <Stamp />
      <Footer />
    </BrowserRouter>
  )
}

export default App
