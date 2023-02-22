import girl from '../../assets/whychooseus/girl.png'

const Whychooseus = () => {
  return (
    <div className='row' style={{background:"rgb(227 226 230 / 82%)",margin:"0 3.5vw",fontFamily:'Montserrat'}}>
      <div className="col-lg-4 p-0 d-none d-lg-flex">
        <img src={girl} alt="" style={{width:'99%'}}/>
      </div>
      <div className="col-lg-8 d-flex justify-content-center align-items-center">
        <div style={{padding:"calc(1rem + 2vw) calc(4vw - 1rem)"}}>
            <h2 style={{fontSize:'calc(1.1rem + 1vw)',color:"rgba(1, 127, 130, 1)",fontWeight:"600",textShadow:'.5px 0',letterSpacing:'1px',marginBottom:'2rem'}}>Why People Choose Us</h2>
            <ul style={{fontSize:'calc(.9rem + .4vw)',fontWeight:'600'}}>
                <li style={{margin:'.8rem 0'}}>Affordable Rates</li>
                <li style={{margin:'.8rem 0'}}>On Time Service</li>
                <li style={{margin:'.8rem 0'}}>Verified Professionals</li>
                <li style={{margin:'.8rem 0'}}>Excellent Service</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Whychooseus
