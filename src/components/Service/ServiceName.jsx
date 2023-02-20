import React from 'react'

const ServiceName = (props) => {
    const bold=props.bold;
    return (
        <div className='d-flex flex-column align-items-center servicename' style={{ boxShadow: "0px 5.07432px 25.3716px 2.96002px rgba(57, 57, 57, 0.15)", borderRadius: '18px',height:`${bold?'11.5rem':'8rem'}`,width:`${props.bold?'100%':'115%'}`,position:'relative',background:`${props.data.bg?'linear-gradient(48.55deg, #FFA500 -6.74%, #FFECCA 120.59%)':''}`,color:`${props.data.bg?'white':''}`}}>
            <img src={props.data.img} alt="" style={{ width: `${props.data.large?props.data.large:'65%'}`, position:'absolute',top:`${bold?'-5.5rem':'-2rem'}`,left:`${props.data.large?'.7rem':''}` }} />
            <p style={{ fontSize: `${bold ? '1.1rem' : '1rem'}`,fontWeight:`${bold?'900':'600'}`, textShadow: `${bold ? '.5px 0' : ''}`,position:'absolute',top:`${bold?'7rem':'5rem'}`,width:'75%',letterSpacing:`${props.bold?'1px':''}`}}>{props.data.name}</p>
        </div>
    )
}

export default ServiceName;
