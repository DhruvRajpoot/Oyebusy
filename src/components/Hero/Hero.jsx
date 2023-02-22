import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className='row' style={{marginTop:"calc(8rem - 5.3vw)"}}>
      <div className="col-6 d-none d-lg-block">
            <HeroLeft/>
      </div>
      <div className="col-lg-6">
          <HeroRight/>
      </div>
    </div>
  )
}

export default Hero
