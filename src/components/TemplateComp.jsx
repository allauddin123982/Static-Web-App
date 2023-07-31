import React from 'react'
export default function TemplateComp(props) {
    return (
        <>

            <div className='max-w-[1240px] mx-auto text-justify md:m-4  md:p-4 md:grid grid-cols-2  gap-6 '>
                <div className="grid col-span-1">
                    <img src={props.images} alt="" />

                </div>

                <div className="md:grid cols-span-1 m-5 text-justify w-[600px] ">
                    <h1 className='md:ms-2 text-xl font-bold  '>
                        {props.Tempheading}
                    </h1>
                    <ul className='list-disc ps-9 font-light text-sm'>
                        <li className='p-1'>
                            React Personal Portfolio, ReactJs
                        </li>
                        <li className='p-1'>
                            React Creative Agency, React Project
                        </li>
                        <li className='p-1'>
                            React Multi Purpose, React Corporate Agency
                        </li>
                    </ul>
                </div>


            </div>
        </>
    )
}
