import React from 'react'
import man from '../../assets/safe/deliveryman.png'

const Safe = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='w-50 row' style={{background:'#ECECEE',borderRadius:"20px",boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',marginBottom:'5rem'}}>
        <div className="col-7 d-flex flex-column justify-content-center align-items-between">
          <h3 style={{fontFamily:'Montserrat',color:'rgba(2, 91, 93, 1)',margin:'.5rem 0 .5rem 1rem',fontWeight:'600',textShadow:'.5px 0',letterSpacing:'1px'}}>100% Safe Services</h3>
          <div className="row" style={{fontFamily:'Mulish',fontSize:'1.2rem',fontWeight:'600'}}>
            <div className="col-5">
              <ul>
                <li className='my-2'>Masks</li>
                <li>Gloves</li>
              </ul>
            </div>
            <div className="col-7">
              <ul>
                <li className='my-2'>Temperature Checks</li>
                <li>Sanitized Tools</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-5 pe-0">
          <img src={man} alt="" style={{width:'100%',borderRadius:'20px'}} />
        </div>
      </div>
    </div>
  )
}

export default Safe
