import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className='row' style={{marginTop:"2.9rem"}}>
      <div className="col-6">
            <HeroLeft/>
      </div>
      <div className="col-6">
          <HeroRight/>
      </div>
    </div>
  )
}

export default Hero
