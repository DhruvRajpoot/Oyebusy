import stamp from '../../assets/stamp/stamp.png'
const Stamp = () => {
    return (
        <div className='d-flex justify-content-center' style={{ margin: '2rem 0' }}>
            <div className='d-flex align-items-center'>
                <img src={stamp} alt="" style={{ width: "12rem",marginRight:'5rem' }} />
                <h2 className='text-center' style={{fontWeight:'600',letterSpacing:"1px",textShadow:".5px 0"}}>Hassle free services with <br /> OyeBusy</h2>
            </div>
        </div>
    )
}

export default Stamp
