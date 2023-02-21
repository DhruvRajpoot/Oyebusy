import React from 'react'
import ServiceName from './ServiceName'

const ServiceSection = (props) => {
    return (
        <div className='text-center' style={{margin:`${props.bold?'1rem 10vw':'1rem calc(-2rem + 16vw)'}`}}>
            <h3 style={{fontWeight:"900",textShadow:'1px 0',letterSpacing:"1px",color:"rgba(2, 91, 93, 1)",marginBottom:'.3rem'}}>{props.data.title}</h3>
            <p style={{fontSize:'.9rem'}}>{props.data.desc}</p>
            <div className="row justify-content-around justify-content-lg-between">
                {props.data.services.map((ele, index) => {
                    return <div key={index} className='col-5 col-lg-2' style={{margin:`${props.bold?'calc(3rem + 3vw) 0':'calc(2rem + 3vw) 0'}`}}>
                        <ServiceName data={ele} bold={props.bold}/>
                    </div>
                })}     
            </div>
        </div>
    )
}

export default ServiceSection
