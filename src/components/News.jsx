import React from 'react'
import img2 from '../assets/img/img2.jpg'
export default function News() {
  return (
    <div className='container4 mt-10 max-w-[1240px] mx-auto '>
        <h1 className='letter_heading text-blue font-bold text-2xl '>Code in Style With Tailwind CSS</h1>
        <p className='text-justify'> 
        In this article, you learned about Tailwind CSS, its strengths, disadvantages,
         and how you can use its utility classes in React applications. Apart from classes,
          Tailwind CSS also offers other additional features
         and how you can use its utility classes in React applications. Apart from classes,
          Tailwind CSS also offers other additional features
         and how you can use its utility classes in React applications. Apart from classes,
          Tailwind CSS also offers other additional features
         including the ability to create responsive layouts and reusable components.
        <br/><br/>
        </p>
        <img src={img2} alt="" className='w-[300px] md:w-[900px] h-[250px] '/>
        <p>
            <br/><br/>
        But, as we mentioned earlier, Tailwind is far from the only CSS framework on the market. Which will you use for your next projectBut, 
        as we mentioned earlier, Tailwind is far from the only CSS framework on the market. Which will you use for your next project
        </p>
        <div className="md:grid grid-cols-5 mt-5 mx-40 " >
            <button className='bg-green p-[10px] md:p-[10px] w-[120px] rounded text-xl' >Comment</button> 
            <button className='bg-blue p-[10px] rounded w-[120px] text-xl'>Share </button>
            <button className='bg-gray p-[10px] rounded w-[120px] text-xl'>Tweet </button>
            <button className='bg-indigo p-[10px] rounded w-[120px] text-xl'>Linkedin </button>
            <button className='bg-blue p-[10px] rounded w-[120px] text-xl'>Email </button>
        </div>
    </div>
  )
}
