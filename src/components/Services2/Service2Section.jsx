import React from 'react'
import Service2Name from './Service2Name'

const Service2Section = (props) => {
    return (
        <div className='text-center' style={{margin:'1rem calc(-3rem + 16vw)'}}>
            <h3 style={{fontWeight:"900",textShadow:'1px 0',letterSpacing:"1px",color:"rgba(2, 91, 93, 1)",marginBottom:'.3rem'}}>{props.data.title}</h3>
            <p style={{fontSize:".9rem"}}>{props.data.desc}</p>
            <div className="d-flex justify-content-lg-between overflow-scroll" style={{margin:'2rem 0 4rem 0'}}>
                {props.data.services.map((ele, index) => {
                    return <div key={index} className='col-lg-3 mx-2 mx-xl-0'>
                        <Service2Name data={ele}/>
                    </div>
                })}     
            </div>
        </div>
    )
}

export default Service2Section;