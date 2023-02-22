import first from '../../../assets/assuredpeace/first.png'
import second from '../../../assets/assuredpeace/second.png'
import third from '../../../assets/assuredpeace/third.png'

const AssuredPeace = () => {
    return (
        <div className='d-flex flex-column align-items-around' style={{ background: '#F7F7F7', fontFamily: 'Montserrat', padding: '3rem 0', marginBottom: "5rem" }}>
            <h1 style={{fontSize:'calc(1.2rem + 1.3vw)', color: 'rgba(58, 58, 58, 1)', marginBottom: "2rem", fontWeight: '900', letterSpacing: "3px", textShadow: "2px 0",textAlign:'center' }}>Assured Peace of Mind</h1>
            <div className='row' style={{ margin: '0 2vw 0 calc(15vw - 3rem)' }}>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-3 col-xl-2">
                            <img src={first} alt="" style={{ width: '4rem' }} />
                        </div>
                        <div className="col-9 col-xl-10">
                            <h5 style={{ fontWeight: '900', textShadow: '.5px 0', letterSpacing: '1px' }}>High Quality Work</h5>
                            <p style={{ color: 'rgba(112, 112, 112, 1)', fontSize: '.8rem', fontWeight: "600",lineHeight:'1rem',width:'90%'}}>Only authorized service experts and <br /> genuine spare parts and equipments</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-3 col-xl-3">
                            <img src={second} alt="" style={{ width: '4rem' }} />
                        </div>
                        <div className="col-9 col-xl-9 ps-1">
                            <h5 style={{ fontWeight: '900', textShadow: '.5px 0', letterSpacing: '1px' }}>Hassle Free</h5>
                            <p style={{color: 'rgba(112, 112, 112, 1)', fontSize: '.8rem', fontWeight: "600",lineHeight:'1rem' }}>Sit back and relax. <br /> We do all the work</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="row">
                        <div className="col-3 col-xl-2">
                            <img src={third} alt="" style={{ width: '4rem' }} />
                        </div>
                        <div className="col-9 col-xl-10 ps-0">
                            <h5 style={{ fontWeight: '900', textShadow: '.5px 0', letterSpacing: '1px' }}>Totally Cashless</h5>
                            <p style={{color: 'rgba(112, 112, 112, 1)', fontSize: '.8rem', fontWeight: "600",lineHeight:'1rem' }}>Pay online for Safe & Secure payment. <br /> Many benefits and offers available with online payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssuredPeace
