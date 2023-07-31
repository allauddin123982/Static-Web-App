import React from 'react'
import img from '../assets/img/img3.jpg'
import img2 from '../assets/img/img4.jpg'
import img5 from '../assets/img/img5.png'

export default function AboutBody() {
  return (
    <>
    <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 mt-10  p-20 ">
        <div className="cols-span-1">
            <img src={img} alt="" className=' w-[396px] h-[300px]' />
            <p className='text-justify'>
                <h1 className='text-blue text-2xl font-bold'>Lorem ipsum</h1>
                <br />
                dolor sit amet consectetur adipisicing elit.<br />
                Quidem voluptate incidunt dolorem perferendis

                <br />

                debitis atque incidunt  corrupti?
                
            </p>
        </div>
        <div className=' cols-span-1 '>
            <p className="text-justify p-5">
                <h1 className='text-2xl md:text-5xl font-bold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <br /><br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis aperiam saepe odit corporis porro recusandae
                animi, dolore modi sequi numquam velit omnis deserunt hic
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis aperiam saepe odit corporis porro recusandae
                animi, dolore modi sequi numquam velit omnis deserunt hic
                ut! Nam et quas eligendi ducimus.<br/>

                <button className='bg-blue p-[10px] rounded  w-40 mt-[20px] hover:bg-black text-white'> Start Trial</button>
            </p>
        </div>
    </div>

    <div className=" bg-gray-dark text-white max-w-[1240px] mx-auto md:grid grid-cols-2 mt-20 p-10">
        <div className="cols-span-1">
            <p className="text-justify ">
                <h1 className='text-2xl md:text-5xl font-bold '>
                    Lorem ipsum dolor  modi sequi num adipisicing elit.
                </h1>
                <br /><br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis aperiam saepe odit corporis porro recusandae
                animi, dolore modi sequi numquam velit omnis deserunt hic
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis aperiam saepe odit corporis porro recusandae
                animi, dolore modi sequi numquam velit omnis deserunt hic
                ut! Nam et quas eligendi ducimus.<br/>
                <button className='bg-blue p-[10px] rounded  w-40 mt-[20px] hover:bg-black text-white'> Start Trial</button>
            
            </p>
        </div>
        <div className='cols-span-1  ps-20 md:ps-40'>

            <img src={img2} alt="" className=' w-[396px] h-[300px]' />
            <p className='text-justify'>
                <h1 className='text-blue text-2xl font-bold'>Lorem ipsum</h1>
                <br />
                dolor sit amet consectetur adipisicing elit.<br />
                Quidem voluptate incidunt dolorem perferendis
                <br />

                debitis atque incidunt  corrupti?
            </p>
        </div>
    </div>


    <div className=" max-w-[1240px] mx-auto md:grid grid-cols-2 mt-32   gap-20 ">
        <div className="flex justify-center items-center cols-span-1 bg-gray-light rounded">
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
        <div className=' cols-span-1 text-justify'>
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
    </div></>
  )
}
