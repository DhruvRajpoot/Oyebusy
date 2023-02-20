import React from 'react'
import herobg from '../../assets/hero_category/herobg.png'
import {IoSearch} from 'react-icons/io5'

const HeroLeft = () => {
    return (
        <div className='d-flex flex-column align-items-center text-light' style={{ fontFamily: "Roboto", background: `url(${herobg}) no-repeat`, backgroundSize: "contain", minHeight: '38rem' }}>
            <div className='d-flex flex-column align-items-center' style={{ transform: 'translateY(50%)' }}>
                <h1 className='' style={{ fontFamily: "Montserrat", fontWeight: "700", textShadow: '1px 0', letterSpacing: '.5px', width: '60%', textAlign: 'center' }}>Home services, on demand</h1>
                <div style={{ position: 'relative',width:'85%',margin:"2rem 0 .3rem 0"}}>
                    <input type="text" name="" id="" placeholder='Search for a service' style={{color:'rgba(154, 154, 154, 1)', borderRadius: '5px', padding: '.7rem 1rem .7rem 3rem',border:'none',outline:'none',fontFamily:'Roboto',width:"100%"}} />
                    <span style={{ position: "absolute", left: '.5rem', top: '.3rem',color:"rgba(99, 99, 99, 1)",fontSize:"1.4rem" }}><IoSearch /></span>
                </div>
                <div style={{width:'85%'}}>
                <p style={{ fontFamily: "900",fontSize:".9rem",textAlign:'left'}}>Examples: Salon, Women’s hair, Men’s grooming & Many more..</p>
                </div>
            </div>
        </div>
    )
}

export default HeroLeft
