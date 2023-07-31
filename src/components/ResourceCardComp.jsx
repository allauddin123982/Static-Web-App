import React from 'react'

export const ResourceCardComp = (props) => {
  return (
    <div>
         <div className='grid grid-cols-2 p-10 '>
        <div className="col-span-1  ">
          <img src={props.images} alt="" />

        </div>

        <div className="col-span-1">
         {props.descri}
        </div>
      </div>
    </div>
  )
}
