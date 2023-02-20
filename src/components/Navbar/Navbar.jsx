import logo from '../../assets/navbar/logo.svg'
import '../../App.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { TiLocationOutline } from 'react-icons/ti'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { MdShoppingCart } from 'react-icons/md'

function Navbar() {
    const [display, setDisplay] = useState('none');
    const handleclick = () => {
        if (display === 'none') {
            setDisplay('flex')
        }
        else { setDisplay('none') }
    }

    return (
        < nav className="navbar navbar-expand-md fixed-top py-0">
            <NavLink to='/'><img src={logo} alt="" style={{width:'80%'}} /></NavLink>
            <span style={{ color: 'rgba(65, 88, 89, 1)', marginLeft: "2rem",fontSize:'.8rem'}}><span style={{ fontSize: '1.3rem' }}><TiLocationOutline /></span>1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301 <FiChevronDown /></span>
            <button className="navbar-toggler shadow-none fs-1 text-light" type="button" style={{ zIndex: '200' }} onClick={handleclick}>
                {display === 'none' ? <AiOutlineMenuUnfold /> : <AiOutlineClose />}
            </button>
            <div className={`collapseNavbar ${window.screen.width < 768 ? `d-${display}` : ''} ms-auto`}>
                <ul className="navbar-nav d-flex align-items-center">
                    <li className="nav-item"><NavLink className="nav-link" to="/" onClick={handleclick}>Blog</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/about" onClick={handleclick}>Career</NavLink></li>
                    <li className="nav-item dropdown">
                        <NavLink className={`nav-link dropdown-toggle`} to="/service" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">My Account</NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        </ul>
                    </li>
                    <li className="nav-item fs-5"><NavLink className="nav-link" to="/" onClick={handleclick} style={{fontSize:"1.5rem",padding:".3rem",marginLeft:'2rem'}}><MdShoppingCart /></NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link d-flex align-items-center" to="/contact" onClick={handleclick} style={{ border: '1px solid #415859', borderRadius: '5px', padding: '.3rem .7rem',fontSize:'1.2rem'}}><IoLogoGooglePlaystore /><span style={{ fontSize: '.8rem', marginLeft: '1rem',letterSpacing:'1px',fontWeight:'600',fontFamily:"Mulish"}}>Download App</span></NavLink></li>
                </ul>
            </div>
        </nav >
    )
};

export default Navbar;