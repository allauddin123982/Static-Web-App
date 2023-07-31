import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
    return (
        <div className='container2 w-full py-[100px] bg-gray-dark'>
            <div className="subcont max-w-[1240px] mx-auto text-center font-bold md:my-[90px] ">

                <div className='text-xl md:text-3xl my-[20px] md:my-[90px] text-blue'>
                    Web Application
                </div>
                   
                    <h1 className='text-pink  text-3xl md:text-8xl font-bold my-[20px] md:my-[100px]  '>React JS.</h1>
                
                <div className='text-xl md:text-5xl my-[20px] md:my-[50px] text-blue '>
                    <span className='text-white'>Learning </span> <Typed
                    strings={['React JS','Tailwind CSS','Frontend web dev']}
                    typeSpeed={40}
                    loop={true}
                    backSpeed={50}
                />
                </div>
            </div>
        </div>
    )
}
