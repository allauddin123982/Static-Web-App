import React from 'react'
import { useState } from 'react';
import TemplateComp from './TemplateComp';
import DocsComp from './DocsComp';
import ComponentsComp from './ComponentsComp';
import CommunityComp from './CommunityComp';
import img6 from '../assets/img/img6.png'
import img7 from '../assets/img/img7.jpg'
import img8 from '../assets/img/img8.jpg'
import ResourceCard from './ResourceCard';
export default function DocsLeftBar() {

    const [name, setName] = useState('Documents');
    const handleDoc = () => {
        setName('Documents');
    }
    const handleTemp = () => {
        setName('Templates');

    }
    const handleComp = () => {
        setName('Components');
    }
    const handleRes = () => {
        setName('Resources');
    }
    const handleCom = () => {
        setName('Community');

    }


    return (

        <div className='container7 max-w-[1440px] mx-auto mt-[80px]  md:grid grid-cols-2 gap-20'>

            <div className="cols-span-1 ">
                <h1 className='font-cold text-2xl bg-gray-dark text-white p-5'>React_Tailwind</h1>
                <div className="menu p-7 ">
                    <ul>
                        <li className='p-4 text-xl hover:text-blue cursor-pointer' onClick={handleDoc}>Documents</li>
                        <li className='p-4 text-xl hover:text-blue cursor-pointer' onClick={handleTemp}>Templates</li>
                        <li className='p-4 text-xl hover:text-blue cursor-pointer' onClick={handleComp}>Components</li>
                        <li className='p-4 text-xl hover:text-blue cursor-pointer' onClick={handleRes}>Resources</li>
                        <li className='p-4 text-xl hover:text-blue cursor-pointer' onClick={handleCom}>Community</li>
                    </ul>
                </div>

            </div>
            <div className="cols-span-1 ">
                <h2 className='text-red text-2xl font-bold p-5'>{name}</h2>
                {name === 'Documents' && <DocsComp />}
                {name === 'Templates' && <TemplateComp images={img7} Tempheading={"Trydo-creative-agency-react-template"} />}
                {name === 'Templates' && <TemplateComp images={img6}  Tempheading={"Sorex-react-creative-agency-react-portfolio-template"} />}
                {name === 'Templates' && <TemplateComp images={img8}  Tempheading={"Builty-construction-industry-react-nextjs-template"} />}
                {name === 'Components' && <ComponentsComp />}
                {name === 'Resources' && <ResourceCard />} 
                {name === 'Community' && <CommunityComp />}
            </div>


        </div>
    )
}
