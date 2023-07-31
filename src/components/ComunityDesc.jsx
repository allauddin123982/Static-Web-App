import React from 'react'

import img5 from '../assets/img/img5.png'
export default function ComunityDesc() {
  return (
    <>
    
    <div className=" max-w-[1240px] mx-auto md:grid grid-cols-2   gap-5 ">
        <div className="p-10   cols-span-1 bg-gray-light rounded">
            <div className=" ">
                <img src={img5} alt="" className=' ' />
                <p className='text-justify '>
                    <h1 className='mt-8 text-blue text-2xl font-bold'>Lorem ipsum</h1>
                    <br />
                    dolor sit amet consectetur adipisicing elit.<br />
                    Quidem voluptate incidunt dolorem
                    <br />
                    debitis atque incidunt  corrupti?
                </p>
            </div>

        </div>
    <div className='cols-span-1 text-justify'>
            <h1 className="text-3xl  font-bold">Our Values</h1>
            <dl className='p-4'>

                <dd className='p-5'>
                    <span className='text-blue font-bold text-2xl'>01</span> <span className='ps-5 font-bold text-2xl'>Integrity</span>
                    <p className='ps-16 pt-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ut impedit natus aliquid ab ipsum beatae repellat sit quia assumenda.
                    </p>
                </dd>
                <dd className='p-5'>
                    <span className='text-blue font-bold text-2xl'>02</span> <span className='ps-5 font-bold text-2xl'>Professionality</span>
                    <p className='ps-16 pt-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ut impedit natus aliquid ab ipsum beatae repellat sit quia assumenda.
                    </p>
                </dd>
                <dd className='p-5'>
                    <span className='text-blue font-bold text-2xl'>03</span> <span className='ps-5 font-bold text-2xl'>Creativity</span>
                    <p className='ps-16 pt-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ut impedit natus aliquid ab ipsum beatae repellat sit quia assumenda.

                    </p>
                </dd>
            </dl>



        </div>
        </div>
    </>
  )
}
