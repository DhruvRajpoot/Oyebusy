import React from 'react'
import ServiceSection from './ServiceSection'
import ac from '../../assets/services/acservice.png'
import acinstall from '../../assets/services/acinstall.png'
import sofa from '../../assets/services/sofa.png'
import homedeep from '../../assets/services/homedeep.png'
import carpenter from '../../assets/services/carpenter.png'
import plumber from '../../assets/services/plumber.png'
import electrical from '../../assets/services/electrical.png'
import painting from '../../assets/services/painting.png'
import pest from '../../assets/services/pest.png'

const Service = () => {
    const services = [
        {
            title: 'Trending Services',
            desc: 'Premium Home Services',
            services: [
                {
                    name:'Air-Conditioner Services',
                    img: ac
                },
                {
                    name:'AC Installation',
                    img:acinstall
                },
                {
                    name:'Sofa Cleaning Service',
                    img:sofa
                },
                {
                    name:'Home Deep Cleaning Service',
                    img:homedeep,
                    large:'8rem'
                },
                {
                    name:'Air-Conditioner Services',
                    img:ac
                }
            ]
        },
        {
            title: 'Same Day Services',
            desc: 'Premium Home Services',
            services: [
                {
                    name:'Carpentery Services',
                    img: carpenter,
                    bg:'yellow',
                    large:'calc(10rem + 2vw)',
                    left:'.1rem'
                },
                {
                    name:'Plumbing Services',
                    img: plumber,
                    left:'calc(2rem + .5vw)'
                },
                {
                    name:'Electrical Services',
                    img:electrical
                },
                {
                    name:'Painting Services',
                    img:painting,
                    large:'calc(7rem + 1vw)',
                    left:'calc(.5rem + 1vw)'
                },
                {
                    name:'Pest Control Services',
                    img:pest,
                    large:'11rem',
                    left:'calc(-1rem + 1.5vw)'
                }
            ]
        }   
    ]
    return (
        <div style={{ fontFamily: "Montserrat"}}>
            <ServiceSection data={services[0]} />
            <ServiceSection data={services[1]} bold={1}/>
        </div>
    )
}

export default Service
