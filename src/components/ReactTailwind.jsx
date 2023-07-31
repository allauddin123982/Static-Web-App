import React from 'react'
import img from '../assets/img/img1.png'
export default function ReactTailwind() {
  return (
    <>
      <div className='container3 mt-7 max-w-[1240px] mx-auto p-2 md:grid grid-cols-3 gap-20'>
        <div className=" col-span-1">
          <img src={img} alt="" className='w-[400px]'/>
        </div>

        <div className=" col-span-2">
          <h2 className='text-2xl font-bold text-justify'>A Beginner's Guide to Tailwind CSS in React:</h2>
          <p className='text-justify'>
            Tailwind CSS is a utility first CSS framework that allows
            developers to design custom web components without switching
            to a CSS file. In this tutorial, you will learn how to install
            Tailwind CSS in React and how you can use it to build a simple React page.
            CSS is a utility first CSS framework that allows
            to a CSS file. In this tutorial, you will learn how to install
            Tailwind CSS in React and how you can use it to build a simple React page.
            CSS is a utility first CSS framework that allows
            to a CSS file. In this tutorial, you will learn how to install
            to a CSS file. In this tutorial, you will learn how to install
            Tailwind CSS in React and how you can use it to build a simple React page.
            CSS is a utility first CSS framework that allows
            developers to design custom web components without switching
            to a CSS file. In this tutorial, you ... 

          </p>
          <button className='bg-pink p-3 rounded font-bold'>Lean more</button>
        </div>

      </div>
      <br /><br />
    </>
  )
}
