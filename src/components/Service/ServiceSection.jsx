import React from 'react'
import ServiceName from './ServiceName'

const ServiceSection = (props) => {
    return (
        <div className='text-center' style={{margin:`${props.bold?'1rem 10rem':'1rem 14rem'}`}}>
            <h3 style={{fontWeight:"900",textShadow:'1px 0',letterSpacing:"1px",color:"rgba(2, 91, 93, 1)",marginBottom:'.3rem'}}>{props.data.title}</h3>
            <p style={{fontSize:'.9rem'}}>{props.data.desc}</p>
            <div className="row justify-content-between" style={{margin:`${props.bold?'8rem 0':'5rem 0'}`}}>
                {props.data.services.map((ele, index) => {
                    return <div key={index} className='col-2'>
                        <ServiceName data={ele} bold={props.bold}/>
                    </div>
                })}     
            </div>
        </div>
    )
}

export default ServiceSection
