import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    return (
    <div className='bg-blue p-4 '>
        
        <div className="max-w-[1240px] items-center py-5 flex justify-between mx-auto">
            <div className='text-4xl font-bold'>
                Header
            </div>
            {
                toggle ? 
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-black text-3xl md:hidden block'/>
                    :
                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-black text-3xl md:hidden block'/>
 
            }
 
            <ul className='hidden md:flex text-white text-xl gap-10'>
                <li className='font-bold'><Link to="/">Home</Link></li>
                <li className='font-bold'><Link to="/docs">Docs</Link></li>
                <li className='font-bold'><Link to="/about">About Us</Link></li>
                <li className='font-bold'><Link to="/gallery">Gallery</Link></li>
                <li className='font-bold'><Link to="/contact">Contact Us</Link></li>
            
           
            
            </ul>
            {/* Responsive menu */}
            <ul className={`duration-500 md:hidden text-white fixed bg-gray-dark p-5  top-[108px] w-full h-screen
                ${toggle ? 'left-[0%]'  : 'left-[-100%]'}
            `}>
                <li className='p-5 font-bold '>Home</li>
                <li className='p-5 font-bold'>About</li>
                <li className='p-5 font-bold'>Contact</li>
                <li className='p-5 font-bold'>Gallery</li>
                <li className='p-5 font-bold'>Docs</li>
            </ul>
        </div>
    </div>
  )
}
