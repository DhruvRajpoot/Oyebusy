import React from 'react'

const ServiceName = (props) => {
    const bold=props.bold;
    return (
        <div className='d-flex flex-column align-items-center servicename' style={{ boxShadow: "0px 5.07432px 25.3716px 2.96002px rgba(57, 57, 57, 0.15)", borderRadius: '18px',height:`${bold?'calc(9.5rem + 2vw)':'8rem'}`,width:`${props.bold?'calc(8.5rem + 3vw)':'115%'}`,position:'relative',background:`${props.data.bg?'linear-gradient(48.55deg, #FFA500 -6.74%, #FFECCA 120.59%)':''}`,color:`${props.data.bg?'white':''}`}}>
            <img src={props.data.img} alt="" style={{ width: `${props.data.large?props.data.large:'calc(6rem + 1vw)'}`, position:'absolute',top:`${bold?'calc(-4.5rem - 1vw)':'-2rem'}`,left:`${props.data.left?props.data.left:''}` }} />
            <p style={{ fontSize: `${bold ? 'calc(.9rem + .2vw)' : 'calc(.8rem + .2vw)'}`,fontWeight:`${bold?'900':'600'}`, textShadow: `${bold ? '.5px 0' : ''}`,position:'absolute',top:`${bold?'calc(6rem + 1vw)':'5rem'}`,width:'90%',letterSpacing:`${props.bold?'1px':''}`}}>{props.data.name}</p>
        </div>
    )
}

export default ServiceName;
