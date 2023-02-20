import wm from '../../assets/homeapplianceservices/wm.png'
import refrigerator from '../../assets/homeapplianceservices/refrigerator.png'
import microwave from '../../assets/homeapplianceservices/microwave.png'
import ro from '../../assets/homeapplianceservices/ro.png'
import led from '../../assets/homeapplianceservices/led.png'
import ac from '../../assets/homeapplianceservices/ac.png'

const HomeApplianceServices = () => {
    const services = [
        {
            img: wm,
            name: 'Washing Machine Repair'
        },
        {
            img: refrigerator,
            name: 'Refrigerator Repair/Service'
        },
        {
            img: microwave,
            name: 'Microwave Repair'
        },
        {
            img: ro,
            name: 'RO Service'
        },
        {
            img: led,
            name: 'LED TV Repair'
        },
        {
            img: ac,
            name: 'AC Services'
        }
    ]
    return (
        <div className='row text-center' style={{ margin: '0 9rem', fontFamily: 'Montserrat' }}>
            <h3 style={{ fontWeight: '900', textShadow: '1px 0', letterSpacing: "1px", color: "rgba(2, 91, 93, 1)", marginBottom: '.3rem' }}>Home Appliances Services</h3>
            <p style={{ fontSize: ".9rem" }}>Premium Home Services</p>
            <div className="row" style={{margin:"4rem 0"}}>
                {services.map((ele, index) => {
                    return <div key={index} className='col-2 p-1 d-flex justify-content-center'>
                        <div className='d-flex flex-column align-items-center servicename' style={{ boxShadow: "0px 5.07432px 25.3716px 2.96002px rgba(57, 57, 57, 0.15)", borderRadius: '18px', height: '8rem', position: 'relative', width: "75%" }}>
                            <img src={ele.img} alt="" style={{ width: '6.5rem', position: 'absolute', top: '-2rem' }} />
                            <p style={{ fontSize: '.9rem', fontWeight: '600', position: 'absolute', top: '5rem' }}>{ele.name}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default HomeApplianceServices
