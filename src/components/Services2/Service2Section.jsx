import React from 'react'
import Service2Name from './Service2Name'

const Service2Section = (props) => {
    return (
        <div className='text-center' style={{margin:'1rem 16rem'}}>
            <h3 style={{fontWeight:"900",textShadow:'1px 0',letterSpacing:"1px",color:"rgba(2, 91, 93, 1)",marginBottom:'.3rem'}}>{props.data.title}</h3>
            <p style={{fontSize:".9rem"}}>{props.data.desc}</p>
            <div className="row justify-content-between" style={{margin:'2rem 0 4rem 0'}}>
                {props.data.services.map((ele, index) => {
                    return <div key={index} className='col-3'>
                        <Service2Name data={ele}/>
                    </div>
                })}     
            </div>
        </div>
    )
}

export default Service2Section;