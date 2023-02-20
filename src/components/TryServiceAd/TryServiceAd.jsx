import man from '../../assets/tryservicead/man.png'

const TryServiceAd = () => {
    return (
        <div className='row' style={{ background: "linear-gradient(180deg, #FBD268 0%, #F1BA29 100%)",padding:'0 4rem 0 0'}}>
            <div className="col-1"></div>
            <div className="col-3">
                <img src={man} alt="" style={{ width: '28rem' }} />
            </div>
            <div className="col-8 d-flex flex-column align-items-center justify-content-center" style={{ fontFamily: 'Poppins' }}>
                <h1 style={{ fontWeight: '900', textShadow: '.9px 0', letterSpacing: "8px", textAlign: "center", lineHeight: "2.5rem" }}>TRY OUR TRENDING SERVICES <br /> WITH UPTO 50% OFF!</h1>
                <div className="d-flex align-items-center">
                    <hr style={{width:'7rem',height:'2px'}}/>
                    <p style={{ fontSize: "1.7rem",margin:'0 1rem'}}>On any service you book</p>
                    <hr style={{width:'7rem',height:'2px',color:"black"}}/>
                </div>
                <button className='tryservicebtn'>BOOK A SERVICE</button>
            </div>
        </div>
    )
}

export default TryServiceAd;