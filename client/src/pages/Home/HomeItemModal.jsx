import React, { useState } from 'react'
import Container from '../../../components/Container'
import { ClassNames } from '../../../components/ClassNames'
import Button from '../../../components/Button'
import HomeItemModalQuantity from './HomeItemModalQuantity'

function HomeItemModal() {
  const [itemCount, setItemCount] = useState(0)

  return (
    <div className='p-6 w-5/12'>
      <div className=" bg-white p-8 md:max-w-5xl overflow-hidden overflow-y-scroll h-100 shadow-md">
        <div>
          <h1 className="mb-8 text-center text-3xl font-bold">Item name</h1>
          <div className='bg-black h-28'></div>
          <article className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel iaculis sem. Nullam ut metus nibh.</article>
        </div>

        <div className='mt-6'>
          <h1 className='text-2xl mb-4'>Quantity</h1>
          <div className='flex justify-between'>
            <HomeItemModalQuantity
              setItemCount={setItemCount}
              type="subtract"
            >—</HomeItemModalQuantity>
            <h3 className='text-3xl'>{itemCount}</h3>
            <HomeItemModalQuantity
              setItemCount={setItemCount}
              type="add"
            >+</HomeItemModalQuantity>
          </div>

        </div>

        <div className='mt-6'>
          <h1 className='text-2xl'>Specific instructions</h1>
          <textarea name="comment" form="" className='p-4 w-full border border-slate-400 mt-4' placeholder='Enter your instructions here...'></textarea>
        </div>

        <div className=" mt-12 flex justify-center">
          <Button className="w-full bg-temporary p-3 text-white">Add to cart</Button>
        </div>
      </div>
    </div>
  )
}

export default HomeItemModal