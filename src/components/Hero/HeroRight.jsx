import Salon from '../../assets/hero_category/Category_Salon.svg'
import Electrician from '../../assets/hero_category/Category_Electrician.svg'
import Plumber from '../../assets/hero_category/Category_Plumber.svg'
import CCTV from '../../assets/hero_category/Category_CCTV.svg'
import AC from '../../assets/hero_category/Category_AC.svg'
import PackerMover from '../../assets/hero_category/Category_Packer&Mover.svg'
import Cleaning from '../../assets/hero_category/Category_Cleaning.svg'
import Painter from '../../assets/hero_category/Category_Painter.svg'
import Home_Appliance from '../../assets/hero_category/Category_Home_Appliance.svg'
import Disinfection from '../../assets/hero_category/Disinfection.svg'
import Pest_control from '../../assets/hero_category/Category_Pest_control.svg'
import Carpenter from '../../assets/hero_category/Category_Carpenter.svg'
import ad1 from '../../assets/hero_category/1ad.svg'
import ad2 from '../../assets/hero_category/2ad.svg'
import ad3 from '../../assets/hero_category/3ad.svg'
import { AiFillCaretDown } from 'react-icons/ai'
import './Hero.css'

const HeroRight = () => {
    const array = [
        {
            img: Salon,
            title: 'Salon at Home'
        },
        {
            img: Electrician,
            title: 'Electrician'
        },
        {
            img: Plumber,
            title: 'Plumber'
        },
        {
            img: CCTV,
            title: 'CCTV'
        },
        {
            img: AC,
            title: 'AC Service'
        },
        {
            img: PackerMover,
            title: 'Packers & Movers'
        },
        {
            img: Cleaning,
            title: 'Cleaning'
        },
        {
            img: Painter,
            title: 'House Painting'
        },
        {
            img: Home_Appliance,
            title: 'Home Appliances'
        },
        {
            img: Disinfection,
            title: 'Disinfection'
        },
        {
            img: Pest_control,
            title: 'Pest Control'
        },
        {
            img: Carpenter,
            title: 'Carpenter'
        },
    ]
    return (
        <div className='d-flex flex-column-reverse flex-lg-column' style={{ margin: '.5rem 0 0 0', paddingLeft: '0', position: 'relative' }}>
            <div className="position-relative">
                <span className='d-none d-lg-block' style={{ position: 'absolute', right: '0', top: "2rem", background: '#E8625D', color: "rgba(252, 252, 252, 1)", fontFamily: 'Mulish', padding: '1px 1rem', fontWeight: '600', fontSize: ".9rem" }}>FLAT $400 OFF &nbsp;&nbsp;&nbsp; <AiFillCaretDown /></span>
                <h2 className='d-none d-lg-block py-1' style={{ fontStyle: 'Montserrat', textAlign: 'center' }}>What are you looking for?</h2>
                <div className="row" style={{ margin: '1rem 0vw 1.5vw 1.5vw' }}>
                    {array.map((ele, index) => {
                        return <div key={index} className='serviceitem col-3 d-flex text-center flex-column justify-content-center align-items-center py-2 px-0  my-lg-2'>
                            <img src={ele.img} alt="" style={{ width: '2.8rem' }} />
                            <p style={{ fontFamily: 'Mulish', margin: '.5rem 0 0 0', textShadow: '.3px 0', fontSize: "calc(.8rem + .1vw)" }}>{ele.title}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className='d-flex overflow-scroll' style={{margin:'0 calc(1.5rem - 1.5vw)'}}>
                <img src={ad1} alt="" style={{ width: "20rem", height: '10rem', marginRight: '.5rem' }} />
                <img src={ad2} alt="" style={{ width: "20rem", height: '10rem', marginRight: '.5rem' }} />
                <img src={ad3} alt="" style={{ width: "20rem", height: '10rem', marginRight: '.5rem' }} />
            </div>
            <h4 className='d-lg-none mx-3' style={{fontFamily:'Montserrat',fontWeight:'600',color:'rgba(2, 91, 93, 1)',letterSpacing:'1px'}}>Top Offers</h4>
        </div>
    )
}

export default HeroRight