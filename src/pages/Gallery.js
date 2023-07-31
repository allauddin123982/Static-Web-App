import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import GalComp from '../components/GalComp'
import img6 from '../assets/img/img6.png'

import gallery from '../Gallery'
function Gallery() {
  return (
    <>

      <Header />
      <GalComp/>

      <div className='flex flex-wrap gap-x-6 gap-y-20 md:gap-y-10  m-28 '>
      {
        gallery.map((element) => {
          return(
            <Card 
              img={element.Poster}
              title={element.Title}
              images={img6}
            />

          )
        }
        )
      } 
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer/>

    </>
  )
}

export default Gallery