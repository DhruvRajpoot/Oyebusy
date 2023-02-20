import React from 'react'

const Service2Name = (props) => {
    return (
        <div className='d-flex flex-column align-items-center servicename'>
            <div style={{ width: '14rem', height: '8rem', background: 'rgba(83, 28, 28, 1)', borderRadius: '10px' }}></div>
            <p style={{ fontFamily: 'Roboto', fontSize: ".8rem", margin: '1rem 0 .2rem 0', fontWeight: "600" }}>{props.data.name}</p>
            <p style={{ fontFamily: 'Roboto', fontSize: ".7rem" }}>{props.data.desc}</p>
        </div>
    )
}

export default Service2Name;
