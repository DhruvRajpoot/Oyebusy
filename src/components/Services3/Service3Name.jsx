import React from 'react'

const Service3Name = (props) => {
    return (
        <div className='d-flex flex-column align-items-center servicename' style={{ boxShadow: "0px 6px 30px 3.5px rgba(0, 0, 0, 0.15)", borderRadius: '18px', height: '8rem', position: 'relative', width: '95%' }}>
            <img src={props.data.img} alt="" style={{ width: `${props.data.width?props.data.width:'6.5rem'}`, position: 'absolute', top: `${props.data.top?props.data.top:'-3rem'}` }} />
            <div style={{position:'absolute',top:"4rem"}}>
                <p style={{ fontSize: ".9rem", fontWeight: "600",margin:'0'}}>{props.data.name}</p>
                <p style={{ fontSize: ".7rem", color: 'rgba(117, 117, 117, 1)',margin:'0'}}>{props.data.desc}</p>
            </div>
        </div>
    )
}

export default Service3Name;
