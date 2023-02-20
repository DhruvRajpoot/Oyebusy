import girl from '../../assets/whychooseus/girl.png'

const Whychooseus = () => {
  return (
    <div className='row' style={{background:"rgb(227 226 230 / 82%)",margin:"0 3.5rem",fontFamily:'Montserrat'}}>
      <div className="col-4 p-0">
        <img src={girl} alt="" style={{width:'95%'}}/>
      </div>
      <div className="col-8 d-flex justify-content-center align-items-center">
        <div style={{padding:"3rem"}}>
            <h2 style={{color:"rgba(1, 127, 130, 1)",fontWeight:"600",textShadow:'.5px 0',letterSpacing:'1px',marginBottom:'2rem'}}>Why People Choose Us</h2>
            <ul style={{fontSize:'1.3rem',fontWeight:'600'}}>
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
