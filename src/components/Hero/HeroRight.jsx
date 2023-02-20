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
import {AiFillCaretDown} from 'react-icons/ai'

const HeroRight = () => {
    const array = [
        {
            img: Salon,
            title:'Salon at Home'
        },
        {
            img:Electrician,
            title:'Electrician'
        },
        {
            img:Plumber,
            title:'Plumber'
        },
        {
            img:CCTV,
            title:'CCTV'
        },
        {
            img: AC,
            title: 'AC Service'
        },
        {
            img:PackerMover,
            title:'Packers & Movers'
        },
        {
            img:Cleaning,
            title:'Cleaning'
        },
        {
            img:Painter,
            title:'House Painting'
        },
        {
            img:Home_Appliance,
            title:'Home Appliances'
        },
        {
            img:Disinfection,
            title:'Disinfection'
        },
        {
            img:Pest_control,
            title:'Pest Control'
        },
        {
            img:Carpenter,
            title:'Carpenter'
        },
    ]
    return (
        <div style={{margin:'.5rem 0 0 0',paddingLeft:'0',position:'relative'}}>
            <span style={{position:'absolute',right:'0',top:"2rem",background:'#E8625D',color:"rgba(252, 252, 252, 1)",fontFamily:'Mulish',padding:'1px 1rem',fontWeight:'600',fontSize:".9rem"}}>FLAT $400 OFF &nbsp;&nbsp;&nbsp; <AiFillCaretDown/></span>
            <h2 style={{ fontStyle: 'Montserrat', textAlign: 'center', fontSize: '' }}>What are you looking for?</h2>
            <div className="row" style={{margin:'1rem 4rem 1rem 1.5rem'}}>
                {array.map((ele, index) => {
                    return <div key={index} className='col-3 d-flex flex-column align-items-center my-2 heroservice pt-2'>
                        <img src={ele.img} alt="" style={{width:'2.8rem'}}/>
                        <p style={{fontFamily:'Mulish',marginTop:'.5rem',textShadow:'.3px 0',fontSize:".9rem"}}>{ele.title}</p>
                    </div>
                })}
            </div>
            <div className='d-flex'>
                <img src={ad1} alt="" style={{width:"20rem",height:'10rem',marginRight:'.5rem'}}/>
                <img src={ad2} alt="" style={{width:"20rem",height:'10rem',marginRight:'.5rem'}}/>
                <img src={ad3} alt="" style={{width:"20rem",height:'10rem',marginRight:'.5rem'}}/>
            </div>
        </div>
    )
}

export default HeroRight