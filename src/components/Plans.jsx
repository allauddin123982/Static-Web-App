import React from 'react'

export default function Plans() {
    return (
        <div className="container5 py-[100px] px-10">
            <div className=" md:grid grid-cols-3 p-2 gap-6 max-w-[1240px] mx-auto">
                <div className="h-[500px] shadow-xl  my-10 hover:scale-110 duration-500">
                    <p className="headings font-bold text-center text-2xl text-blue p-3">
                        Web developement
                    </p>
                    <p className="price font-bold text-center text-8xl pt-8">42$</p>
                    <p className="descri text-justify p-10">Lorem ipsum dolor, sit amet consectetur adipisicing <br />elit. In, minusipsum dolor, sit amet <br /><br />consectetur adipisicing elit. In, minus
                        ipsum dolor, sit
                        .</p>
                    <button className='bg-blue p-[10px] rounded ms-[120px] w-40 hover:bg-black text-white'> Start Trial</button>
                </div>

                <div className="h-[500px] shadow-xl my-10  bg-gray-200 hover:scale-110 duration-500">
                    <p className="headings font-bold text-center text-2xl text-blue p-3">
                        Andriod developement
                    </p>
                    <p className="price font-bold text-center text-8xl pt-8">36$</p>
                    <p className="descri text-justify p-10">Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. In, minusamet<br /><br />consectetur adipisicing elit
                        sit amet consectetur <br />
                        .</p>
                    <button className='bg-blue p-[10px] rounded ms-[120px] w-40 hover:bg-black text-white'> Start Trial</button>
                </div>

                <div className="h-[500px] shadow-xl  my-10 hover:scale-110 duration-500">
                    <p className="headings font-bold text-center text-2xl text-blue p-3">
                        Blockchain
                    </p>
                    <p className="price font-bold text-center text-8xl pt-8">61$</p>
                    <p className="descri text-justify p-10">Lorem ipsum consectetulit dolor, sit<br /> amet consectetur adipisicing <br /><br />ipsum consectetulit dolor, sit amet consectetulit  consectetulit. In, minus.</p>

                    <button className='bg-blue p-[10px] rounded ms-[120px] w-40 mt-[20px] hover:bg-black text-white'> Start Trial</button>
                </div>

            </div>
        </div>
    )
}
