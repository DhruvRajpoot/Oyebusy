import stamp from '../../assets/stamp/stamp.png'
const Stamp = () => {
    return (
        <div className='d-flex justify-content-center' style={{ margin: 'calc(3rem - 1vw) 1rem' }}>
            <div className='d-flex align-items-center'>
                <img src={stamp} alt="" style={{ width: "calc(6rem + 6vw)",marginRight:'calc(6vw - 1rem)' }} />
                <h2 className='text-center fw-lg-bold' style={{letterSpacing:"1px",textShadow:".5px 0"}}>Hassle free services with <br className='d-none d-lg-block'/> OyeBusy</h2>
            </div>
        </div>
    )
}

export default Stamp
