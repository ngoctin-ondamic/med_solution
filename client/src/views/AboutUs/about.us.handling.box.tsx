import React from 'react'
import { IHandlingBox } from '../../models/styles/handling.box.model'
import '../AboutUs/about.us.handling.box.style.scss'
const AboutUsHandlingBox = (box: IHandlingBox) => {
    var description = box.desc
    return (
        <div className='handling_box' >
            <img src={box.image} />
            <p>{box.title}</p>
            <small>{box.desc}</small>
        </div>
    )
}

export default AboutUsHandlingBox