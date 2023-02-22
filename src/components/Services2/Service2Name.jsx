import React from 'react'
import './Service2.css'

const Service2Name = (props) => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='servicename2' style={{height: '8rem', background: 'rgba(83, 28, 28, 1)', borderRadius: '10px' }}></div>
            <p style={{ fontFamily: 'Roboto', fontSize: ".8rem", margin: '1rem 0 .2rem 0', fontWeight: "600" }}>{props.data.name}</p>
            <p style={{ fontFamily: 'Roboto', fontSize: ".7rem" }}>{props.data.desc}</p>
        </div>
    )
}

export default Service2Name;
