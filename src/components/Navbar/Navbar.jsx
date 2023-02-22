import logo from '../../assets/navbar/logo.svg'
import home from '../../assets/navbar/home.svg'
import booking from '../../assets/navbar/booking.svg'
import favourtite from '../../assets/navbar/favourite.svg'
import account from '../../assets/navbar/account.svg'
import '../../App.css'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { TiLocationOutline } from 'react-icons/ti'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { MdShoppingCart } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top py-0 d-none d-lg-flex">
                <NavLink to='/'><img src={logo} alt="" style={{ width: '80%' }} /></NavLink>
                <span style={{ color: 'rgba(65, 88, 89, 1)', marginLeft: "2rem", fontSize: '.8rem' }}><span style={{ fontSize: '1.3rem' }}><TiLocationOutline /></span>1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301 <FiChevronDown /></span>
                <div className={`ms-auto`}>
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Blog</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">Career</NavLink></li>
                        <li className="nav-item dropdown">
                            <NavLink className={`nav-link dropdown-toggle`} to="/service" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">My Account</NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            </ul>
                        </li>
                        <li className="nav-item fs-5"><NavLink className="nav-link" to="/" style={{ fontSize: "1.5rem", padding: ".3rem", marginLeft: '2rem' }}><MdShoppingCart /></NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link d-flex align-items-center" to="/contact" style={{ border: '1px solid #415859', borderRadius: '5px', padding: '.3rem .7rem', fontSize: '1.2rem' }}><IoLogoGooglePlaystore /><span style={{ fontSize: '.8rem', marginLeft: '1rem', letterSpacing: '1px', fontWeight: '600', fontFamily: "Mulish" }}>Download App</span></NavLink></li>
                    </ul>
                </div>
            </nav >
            <div className="d-block d-lg-none text-center pb-2 w-100" style={{ position: 'fixed', top: '0px', zIndex: '100', background: 'white', fontFamily: "Mulish", boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)' }}>
                <p className='smalldevicepara' style={{ color: 'rgba(65, 88, 89, 1)', fontWeight: "700"}}><span style={{ fontSize: '1.3rem' }}><TiLocationOutline /></span> Sector-44, Real Estate, Sector- 62, Gurugram <AiOutlineDown /></p>
                <div className="position-relative" style={{ color: 'rgba(117, 117, 117, 1)' }}>
                    <input type="text" style={{ padding: ".5rem 2.5rem", width: '90%', border: '1px solid #415859', borderRadius: '5px' }} placeholder='Search for a service' />
                    <span style={{ position: 'absolute', top: '3px', left: '2rem', fontSize: "1.3rem" }}><GoSearch /></span>
                </div>
            </div>

            <div className="d-block d-lg-none w-100" style={{ position: 'fixed', bottom: '0', background: 'white', zIndex: '100', fontFamily: 'Montserrat', color: 'rgba(65, 88, 89, 1)' }}>
                <div className="row pt-3 pb-2">
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center" style={{ color: 'rgba(232, 98, 93, 1)' }}>
                        <img src={home} alt="" style={{width:'1.5rem'}}/>
                        <p className='mb-1' style={{fontSize:'.8rem'}}>Home</p>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                        <img src={booking} alt="" style={{width:'1.5rem'}}/>
                        <p className='mb-1' style={{fontSize:'.8rem',color:'rgba(117, 117, 117, 1)'}}>Booking</p>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                        <img src={favourtite} alt="" style={{width:'1.5rem'}}/>
                        <p className='mb-1' style={{fontSize:'.8rem',color:'rgba(117, 117, 117, 1)'}}>Favourite</p>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                        <img src={account} alt="" style={{width:'1.5rem'}}/>
                        <p className='mb-1' style={{fontSize:'.8rem',color:'rgba(117, 117, 117, 1)'}}>Accounts</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;