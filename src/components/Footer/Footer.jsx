import React from 'react'
import { Link } from 'react-router-dom'
import { RiInstagramFill } from 'react-icons/ri'
import { BsTwitter, BsPinterest } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { ImFacebook2 } from 'react-icons/im'
import { GrYoutube } from 'react-icons/gr'
import playstore from '../../assets/footer/playstore.png'

const Footer = () => {
    const Links = ['About Us', 'Blog', 'Near Me', 'Careers', 'Terms & Conditions', 'Privacy Policy', 'Offers & Gift Cards', 'Contact Us']
    return (
        <div style={{ background: ' #343434', color: "white", fontSize: '.6rem', letterSpacing: '1px', fontFamily: 'Poppins', wordSpacing: '2px', padding: '2rem' }}>
            <div className='mx-auto' style={{ width: "80%" }}>
                <div className="row">
                    <div className="col-2"> RELATED SERVICES</div>
                    <div className="col-10 fw-bold"> Electrician  |  Plumber  |  Carpenter  |  Packers & Movers  |  Salon For Woman  |  Salon For Man  |  Electronic Appliances  |  CCTV Installation & Repair  |  Ro- repair & service  |  house Painter  |  Pest Control  |  Kitchen Cleaning  |  Bathroom Cleaning  |  Sofa Cleaning  |  Carpet Cleaning  |  Home Deep Cleaning </div>
                </div>
                <div className="row" style={{ margin: '2rem 0 4rem 0' }}>
                    <div className="col-2">TOP LOCATIONS</div>
                    <div className="col-10">Delhi  |  Gurgaon  |  Noida  |  Ghaziabad  |  Faridhabad  |  Greater Noida</div>
                </div>
                <div className="d-flex justify-content-around mb-2">
                    {Links.map((ele, index) => {
                        return <Link to='/' key={index} style={{ textDecoration: 'none', color: 'white', fontFamily: 'Mulish', fontSize: '.8rem' }}>{ele}</Link>
                    })}
                </div>
                <div>
                    <div className="row" style={{width:'80%',marginTop:"2rem"}}>
                        <div className="col-6 d-flex flex-column align-items-end">
                            <div>
                                <p style={{color:'rgba(86, 251, 255, 1)'}}>Contact Us</p>
                                <p>
                                    Phone : +91 9990001089 <br />
                                    Email : support@oyebusy.com
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <p style={{color:'rgba(86, 251, 255, 1)'}}>Download Oyebusy App</p>
                            <p><img src={playstore} alt="" style={{ width: '8rem' }} /></p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center" style={{ marginTop: "3rem" }}>
                    <div className='d-flex justify-content-between' style={{ fontSize: '1.5rem', width: '25%' }}>
                        <RiInstagramFill />
                        <BsTwitter />
                        <SiLinkedin />
                        <ImFacebook2 />
                        <GrYoutube />
                        <BsPinterest />
                    </div>
                    <p style={{ fontFamily: "Mulish", fontSize: '.6rem', margin: '1rem 0 0 0' }}>© 2021 OyeBusy Technologies Pvt. Ltd.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
