import Service3Section from "./Service3Section"
import mcb from '../../assets/services3/mcb.png'
import switchs from '../../assets/services3/switchs.png'
import wiring from '../../assets/services3/wiring.png'
import appliance from '../../assets/services3/appliance.png'
import chandelier from '../../assets/services3/chandelier.png'
import doorbell from '../../assets/services3/doorbell.png'
import basin from '../../assets/services3/basin.png'
import bath from '../../assets/services3/bath.png'
import blockage from '../../assets/services3/blockage.png'
import drill from '../../assets/services3/drill.png'
import minor from '../../assets/services3/minor.png'
import tap from '../../assets/services3/tap.png'
import bed from '../../assets/services3/bed.png'
import curtain from '../../assets/services3/curtain.png'
import door from '../../assets/services3/door.png'
import drawer from '../../assets/services3/drawer.png'
import fittings from '../../assets/services3/fittings.png'
import furniture from '../../assets/services3/furniture.png'

const Service3 = () => {
    const services = [
        {
            title: 'Electrician Services',
            desc: 'Premium Services',
            services: [
                {
                    name: 'MCB & Fuse',
                    desc: 'Repairing & Installation',
                    img: mcb
                },
                {
                    name: 'Switch & Socket',
                    desc: 'Shower, Faucets & Holder Installation & Repair',
                    img: switchs
                },
                {
                    name: 'Wiring',
                    desc: 'Toilet pot, Sink, Bathroom, Balcony pipe',
                    img: wiring
                },
                {
                    name: 'Appliances',
                    desc: 'Painting, Clock & Photoframe',
                    img: appliance
                },
                {
                    name: 'Chandelier',
                    desc: 'Holder, Hanger, Rod Installation',
                    img: chandelier
                },
                {
                    name: 'Door Bell',
                    desc: 'Bed, Table, Rack & Cabinet',
                    img: doorbell
                }
            ]
        },
        {
            title: 'Plumber Services',
            desc: 'Premium Services',
            services: [
                {
                    name: 'Wash Basin & Sink',
                    desc: 'Repairing & Installation',
                    img: basin
                },
                {
                    name: 'Bath Fittings',
                    desc: 'Shower, Faucets & Holder Installation & Repair',
                    img: bath
                },
                {
                    name: 'Blockage',
                    desc: 'Toilet pot, Sink, Bathroom, Balcony pipe',
                    img: blockage
                },
                {
                    name: 'Drill & Hole',
                    desc: 'Painting, Clock & Photoframe',
                    img: drill
                },
                {
                    name: 'Minor Installations',
                    desc: 'Holder, Hanger, Rod Installation',
                    img: minor
                },
                {
                    name: 'Mixer, Tap & Nozzle',
                    desc: 'Bed, Table, Rack & Cabinet',
                    img: tap
                }
            ]
        },
        {
            title: 'Carpenter Services',
            desc: 'Premium Services',
            services: [
                {
                    name: 'Bed',
                    desc: 'Repairing Support, Legs',
                    img: bed
                },
                {
                    name: 'Curtain & Blinds',
                    desc: 'Motorized, Non-Motorized Blinds & Curtain Rod',
                    img: curtain
                },
                {
                    name: 'Door',
                    desc: 'Repairing, Accessories Installation',
                    img: door,
                    width:'3.5rem'
                },
                {
                    name: 'Drawer & Cupboard',
                    desc: 'Channel, Hinge Repair',
                    img: drawer,
                    top:'-3rem'
                },
                {
                    name: 'Fitting & Installation',
                    desc: 'Holder, Hanger, Rod Installation',
                    img: fittings
                },
                {
                    name: 'Furniture Assembly',
                    desc: 'Bed, Table, Rack & Cabinet',
                    img: furniture
                }
            ]
        },
    ]
    return (
        <div style={{ fontFamily: "Montserrat" }}>
            <Service3Section data={services[0]} />
            <Service3Section data={services[1]} />
            <Service3Section data={services[2]} />
        </div>
    )
}

export default Service3