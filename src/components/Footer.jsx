import React from 'react'

export default function Footer() {
  return (
    <div className='container6 w-full h-[400px] bg-gray-dark grid grid-cols-4 gap-10'>
        <div className="grid-cols-3">
            <div className="list font-bold text-xl text-center ">
            <p className=" text-white text-center p-5 underline underline-offset-8 font-bold text-xl md:text-2xl">Company</p>
                <ul>
                    <li className="p-[5px] md:p-[10px] text-hello">About us</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Our services</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Privacy Policy</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Affliate marketing</li>
                </ul>
            </div>
        </div>
        <div className="grid-cols-3">
            <p className=" text-white text-center p-5 underline underline-offset-8 font-bold text-xl md:text-2xl">Get Help</p>
            <div className="list font-bold text-xl text-center ">
                <ul>
                    <li className="p-[5px] md:p-[10px] text-hello">FAQ</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Shipping</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Returns</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Payment Options</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Order Status</li>
                </ul>
            </div>
        </div>
        <div className="grid-cols-3 ">
            <p className=" text-white text-center p-5 underline underline-offset-8 font-bold text-xl md:text-2xl">Online shop</p>
            <div className="list font-bold text-xl text-center ">
                <ul>
                    <li className="p-[5px] md:p-[10px] text-hello">Watch</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Bag</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Shoes</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Dress</li>
                </ul>
            </div>
        </div>
        <div className="grid-cols-3 ">
            <p className=" text-white text-center p-5 underline underline-offset-8 font-bold text-xl md:text-2xl">Follow us</p>
            <div className="list font-bold text-xl text-center ">
                <ul>
                    <li className="p-[5px] md:p-[10px] text-hello">FB</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Insta</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Linkedin</li>
                    <li className="p-[5px] md:p-[10px] text-hello">Twitter</li>
                </ul>
            </div>
        </div>
        

    </div>
  )
}
