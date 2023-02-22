import playstore from '../../assets/refer/playstore.png'
import apple from '../../assets/refer/apple.png'
import bigscreen from '../../assets/refer/bigscreen.png'
import smallscreen from '../../assets/refer/smallscreen.png'
import {HiArrowLongRight} from 'react-icons/hi2'

const Refer = () => {
    return (
        <div className='row' style={{ background: "#F5F5F5", margin: "0 3.5vw", fontFamily: 'Montserrat', padding: '2rem 5vw 0 calc(10vw - 4rem)',color:'rgba(2, 91, 93, 1)'}}>
            <div className="col-9 col-lg-6 d-flex flex-column align-items-center justify-content-center">
                <div className='text-normal'>
                    <h4 style={{fontSize:"calc(1rem + .5vw)",fontWeight:"600",textShadow:'.5px 0',letterSpacing:"1px"}}>Refer and or get link</h4>
                    <p style={{fontWeight:"600",fontSize:".8rem",marginTop:'1rem'}}>Invite your friends</p>
                    <div style={{borderRadius:"10px",boxShadow:"0px 3.62292px 3.62292px 0.905729px rgba(0, 0, 0, 0.25)",position:"relative",marginBottom:"2rem"}}>
                        <input type="text" placeholder='Enter your 10 digit mobile number' pattern='[0-9]{10}' style={{fontFamily:'Roboto',color:"rgba(117, 117, 117, 1)",fontSize:'calc(.7rem + .1vw)',padding:"calc(.7rem + .2vw)",border:'none',outline:'none',borderRadius:'10px',width:"100%"}}/>
                        <button style={{position:'absolute',background:'rgba(242, 193, 157, 0.52)',color:'rgba(2, 91, 93, 1)',borderRadius:"8px",border:'none',padding:"0rem .5rem .2rem .5rem",right:".2rem",top:'.2rem'}}><span style={{fontSize:'calc(1.2rem + .3vw)'}}><HiArrowLongRight/></span></button>
                    </div>  
                    <div className="d-flex align-items-center">
                        <img src={playstore} alt="" style={{ width: '7rem', height: "3rem", margin: '0 .5rem 0 -.7rem' }} />
                        <img src={apple} alt="" style={{ width: '6rem', height: "2rem" }} />
                    </div>
                </div>
            </div>
            <div className="col-3 col-lg-6 d-flex align-items-end">
                <img src={bigscreen} alt="" style={{ width: 'calc(4rem + 7vw)' }} />
                <img className='d-none d-lg-block' src={smallscreen} alt="" style={{ width: '11rem', marginLeft: '3vw' }} />
            </div>
        </div>
    )
}

export default Refer
