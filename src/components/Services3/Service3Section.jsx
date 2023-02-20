import React from 'react'
import Service3Name from './Service3Name'
import nextbtn from '../../assets/services3/nextbutton.png'

const Service3Section = (props) => {
    return (
        <div className='row' style={{ margin: '5rem 2vw 5rem 4vw' }}>
            <div className="col-2" style={{marginTop:"2vw"}}>
                <h3 style={{ fontWeight: "900", textShadow: '1px 0', letterSpacing: "1px", color: "rgba(2, 91, 93, 1)", marginBottom: '1.3rem' }}>{props.data.title}</h3>
                <p style={{ fontSize: ".9rem" ,fontWeight:"600"}}>{props.data.desc}</p>
            </div>
            <div className="text-center col-10 position-relative" style={{width:"79%"}}>
                <button className="position-absolute" style={{border:"none",background:"transparent",left:'-3rem',top:'5rem'}}><img src={nextbtn} alt="" style={{transform:'rotate(180deg)',width:"80%"}}/></button>
                <div className="row justify-content-between" style={{ margin: '2rem 0 4rem 0' }}>
                    {props.data.services.map((ele, index) => {
                        return <div key={index} className='col-2'>
                            <Service3Name data={ele} />
                        </div>
                    })}
                </div>
                <button className="position-absolute" style={{border:"none",background:"transparent",right:'-3rem',top:'5rem'}}><img src={nextbtn} alt="" style={{width:"80%"}}/></button>
            </div>
        </div>
    )
}

export default Service3Section;