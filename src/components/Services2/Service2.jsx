import AssuredPeace from "./AssuredPeace/AssuredPeace"
import Service2Section from "./Service2Section"

const Service2 = () => {
    const services = [
        {
            title: 'Professional Cleaning Services',
            desc: 'Premium Home Services',
            services: [
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                },
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                },
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                },
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                }
            ]
        },
        {
            title: 'Most Used Services',
            desc: 'Premium Home Services',
            services: [
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                },
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                },
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                },
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                }
            ]
        },
        {
            title: 'Trending Services',
            desc: 'Premium Home Services',
            services: [
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                },
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                },
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                },
                {
                    name: 'Professional Deep Cleaning',
                    desc: 'For spring  clean for  end of  lease clean'
                }
            ]
        },
    ]
    return (
        <div style={{ fontFamily: "Montserrat" }}>
            <Service2Section data={services[0]} />
            <Service2Section data={services[1]} />
            <AssuredPeace />
            <Service2Section data={services[2]} />
        </div>
    )
}

export default Service2