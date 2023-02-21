import React from 'react'
import man from '../../assets/safe/deliveryman.png'
import './Safe.css'

const Safe = () => {
  return (
    <div className='d-flex justify-content-center mx-4 mx-lg-0'>
      <div className='w-lg-50 row' style={{ background: '#ECECEE', borderRadius: "20px", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', marginBottom: '5rem' }}>
        <div className="col-7 d-flex flex-column justify-content-center align-items-between">
          <h3 style={{ fontFamily: 'Montserrat', color: 'rgba(2, 91, 93, 1)', margin: '.5rem 0 .5rem 1vw', fontWeight: '600', textShadow: '.5px 0', letterSpacing: '1px', fontSize: 'calc(.8rem + .95vw)' }}>100% Safe Services</h3>
          <div className="row" style={{ fontFamily: 'Mulish', fontSize: 'calc(.7rem + .5vw)', fontWeight: '600' }}>
            <div className="col-4 col-lg-5">
              <ul>
                <li className='my-2'>Masks</li>
                <li>Gloves</li>
              </ul>
            </div>
            <div className="col-8 col-lg-7">
              <ul>
                <li className='my-2'>Temperature <span className="d-none d-md-inline-block">Checks</span></li>
                <li>Sanitized <span className="d-none d-md-inline-block">Tools</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-5 pe-0 d-flex align-items-center align-items-md-end">
          <img src={man} className='img' alt="" style={{ width: '100%', borderRadius: '20px' }} />
        </div>
      </div>
    </div>
  )
}

export default Safe
