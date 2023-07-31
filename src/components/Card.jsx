import React from 'react'
const Card = (props) => {
    return (
        <>
            <div className='bg-black md:max-w-[1240] mx-auto mt-20 '>
                <div className="w-[300px] h-[200px] md:w-[400px] md:h-[300px]  hover:scale-110 duration-500">
                    <p className=" font-bold text-center text-2xl text-blue ">
                        <img src={props.img} className='w-[300px] h-[250px] md:w-[400px] md:h-[300px]' alt="" />
                    </p>

                    <p className="md:font-bold text-center text-xl md:text-2xl text-blue p-2 md:p-3">
                        {props.title}
                    </p>

                </div>
            </div>
        </>
    )
}

export default Card