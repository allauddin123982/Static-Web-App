import React from 'react'

import img6 from '../assets/img/img6.png'
import img7 from '../assets/img/img7.jpg'
import img5 from '../assets/img/img5.png'
import { ResourceCardComp } from './ResourceCardComp'
const ResourceCard = () => {
    return (
        <div>
            <h1 className='ms-6 text-4xl  text-gray-dark '>What's new in React</h1>
            <h2 className='m-6 text-2xl bg-gray-light rounded p-3 '>Features</h2>
            <ResourceCardComp images={img7} descri={<p className='text-justify'>
                <i className='font-bold'>Intermediate React, v2</i><br />
                Compared to CSS abstractions
                Unless a component is a single HTML element, the information needed to define it can’t be captured in CSS alone. For ...
                Learn more about React with Tailwind Plus on our website or in this blogpost.


            </p>} />

            <ResourceCardComp images={img6} descri={<p className='text-justify'>
                <i className='font-bold'>React Native for Designers Part 2</i><br />
                Unless a component is a single HTML element, the information needed to define it can’t be captured in CSS alone. For ...
                Compared to CSS abstractions
                Learn more about React with Tailwind Plus on our website or in this blogpost.


            </p>} />

            <ResourceCardComp images={img5} descri={<p className='text-justify'>
                <i className='font-bold'>Animating React</i><br />
                Unless a component is a single HTML element, the information needed to define it can’t be captured in CSS alone. For ...
                Compared to CSS abstractions
                Learn more about React with Tailwind Plus on our website or in this blogpost.


            </p>} />

        </div>

    )
}

export default ResourceCard