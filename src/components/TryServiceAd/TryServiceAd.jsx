import man from '../../assets/tryservicead/man.png'
import './TryServiceAd.css'

const TryServiceAd = () => {
    return (
        <div className='row w-100' style={{ background: "linear-gradient(180deg, #FBD268 0%, #F1BA29 100%)",padding:'calc(1.5rem - 1.5vw) 4vw calc(1.5rem - 1.5vw) 0'}}>
            <div className="col-0 col-lg-1"></div>
            <div className="col-1 col-lg-3 d-flex align-items-center">
                <img src={man} alt="" style={{ width: 'calc(10rem + 18vw)' }} />
            </div>
            <div className="col-11 col-lg-8 d-flex flex-column align-items-center justify-content-center textColumn" style={{ fontFamily: 'Poppins' }}>
                <h1 style={{fontSize:'calc(.7rem + 1.8vw)', fontWeight: '900', textShadow: '.9px 0', letterSpacing: ".5vw", textAlign: "center", lineHeight: "2.5rem" }}>TRY OUR TRENDING SERVICES <br /> WITH UPTO 50% OFF!</h1>
                <div className="d-flex align-items-center">
                    <hr className='d-none d-lg-inline-block' style={{width:'7rem',height:'2px'}}/>
                    <p style={{ fontSize: "calc(.7rem + 1.2vw)",margin:'0 1rem'}}>On any service you book</p>
                    <hr className='d-none d-lg-inline-block' style={{width:'7rem',height:'2px',color:"black"}}/>
                </div>
                <button className='tryservicebtn'>BOOK A SERVICE</button>
            </div>
        </div>
    )
}

export default TryServiceAd;