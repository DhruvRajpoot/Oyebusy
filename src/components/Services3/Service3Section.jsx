import React from 'react'
import Service3Name from './Service3Name'
import nextbtn from '../../assets/services3/nextbutton.png'
import './Service3.css'

const Service3Section = (props) => {
    return (
        <div className='row' style={{ margin: '5vw 2vw calc(2rem + 3vw) 4vw' }}>
            <div className="col-lg-2 servicetypesection" style={{marginTop:"2vw"}}>
                <h3 style={{ fontWeight: "900", textShadow: '1px 0', letterSpacing: "1px", color: "rgba(2, 91, 93, 1)", marginBottom: '1.3vw' }}>{props.data.title}</h3>
                <p style={{ fontSize: ".9rem" ,fontWeight:"600"}}>{props.data.desc}</p>
            </div>
            <div className="text-center col-lg-10 position-relative serviceitemsection">
                <button className="position-absolute d-none d-lg-block" style={{border:"none",background:"transparent",left:'-3rem',top:'5rem'}}><img src={nextbtn} alt="" style={{transform:'rotate(180deg)',width:"80%"}}/></button>
                <div className="d-flex justify-content-between" style={{ margin: 'calc(4rem - 2vw) 0 4rem 0'}}>
                    {props.data.services.map((ele, index) => {
                        return <div key={index} className='col-lg-2 mx-2 mx-lg-0'>
                            <Service3Name data={ele} />
                        </div>
                    })}
                </div>
                <button className="position-absolute d-none d-lg-block" style={{border:"none",background:"transparent",right:'-3rem',top:'5rem'}}><img src={nextbtn} alt="" style={{width:"80%"}}/></button>
            </div>
        </div>
    )
}

export default Service3Section;