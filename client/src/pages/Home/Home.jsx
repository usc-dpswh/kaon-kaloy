import React, { useState } from 'react'

import HomeCategoryNavbar from './HomeCategoryNavbar'
import { ClassNames } from '../../../components/ClassNames'
import HomeMeals from './HomeMeals'
import HomeItemModal from './HomeItemModal'
import HomeItemModalQuantity from './HomeItemModalQuantity'
import Button from '../../../components/Button'

function Home() {
  const sampleCategoryData = ['Rice', 'Snacks', 'Drinks', 'Meat', 'Carlo', 'Xander', 'Karylle']

  const [cartItemCount, setCartItemCount] = useState(0)

  const stallData = [
    {
      categoryName: "Rice",
      categoryData: [
        {
          itemName: "Dog",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
    {
      categoryName: "Snacks",
      categoryData: [
        {
          itemName: "Dog",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
        {
          itemName: "Cat",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
        {
          itemName: "Dinosaur",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
    {
      categoryName: "Drinks",
      categoryData: [
        {
          itemName: "Dog",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
        {
          itemName: "Cat",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
    {
      categoryName: "Meat",
      categoryData: [
        {
          itemName: "Dog",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
        {
          itemName: "Cat",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
    {
      categoryName: "ABCDE",
      categoryData: [
        {
          itemName: "Dog",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
        {
          itemName: "Cat",
          itemDesc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        },
      ],
    },
  ]

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-3'>
        {/* Left column (takes up 2 units) */}
        <div className='col-span-2'>
          <div className='flex flex-col items-end mr-16'>
            <HomeCategoryNavbar data={sampleCategoryData} />
            <HomeMeals data={stallData} />
            <HomeItemModal />
          </div>
        </div>

        {/* Right column (takes up 1 unit) */}
        <div className='bg-white p-4 w-8/12 sticky top-0' style={{ height: '1400px', }}>
          <h1 className='text-4xl font-bold flex justify-center mb-6'>Your order</h1>

          <hr className='border-slate-300 mb-6' />


          <div className="flex flex-col gap-4 p-4 overflow-hidden overflow-y-scroll" style={{ height: "450px" }}>

            <div className='flex gap-4 border  p-2'>
              <div className='bg-black w-6/12' />

              <div className='flex flex-col w-full'>
                <h1 className='text-xl text-slate-500'>Item name</h1>
                <h3 className='text-2xl font-bold'>P1,000</h3>

                <div className='flex justify-between'>
                  <HomeItemModalQuantity
                    type="subtract"
                  >—</HomeItemModalQuantity>
                  <h3 className='text-3xl'>1</h3>
                  <HomeItemModalQuantity
                    type="add"
                  >+</HomeItemModalQuantity>
                </div>
              </div>


            </div>
            <div className='flex gap-4 border  p-2'>
              <div className='bg-black w-6/12' />

              <div className='flex flex-col w-full'>
                <h1 className='text-xl text-slate-500'>Item name</h1>
                <h3 className='text-2xl font-bold'>P1,000</h3>

                <div className='flex justify-between'>
                  <HomeItemModalQuantity
                    type="subtract"
                  >—</HomeItemModalQuantity>
                  <h3 className='text-3xl'>1</h3>
                  <HomeItemModalQuantity
                    type="add"
                  >+</HomeItemModalQuantity>
                </div>
              </div>


            </div>
            <div className='flex gap-4 border  p-2'>
              <div className='bg-black w-6/12' />

              <div className='flex flex-col w-full'>
                <h1 className='text-xl text-slate-500'>Item name</h1>
                <h3 className='text-2xl font-bold'>P1,000</h3>

                <div className='flex justify-between'>
                  <HomeItemModalQuantity
                    type="subtract"
                  >—</HomeItemModalQuantity>
                  <h3 className='text-3xl'>1</h3>
                  <HomeItemModalQuantity
                    type="add"
                  >+</HomeItemModalQuantity>
                </div>
              </div>


            </div>
            <div className='flex gap-4 border  p-2'>
              <div className='bg-black w-6/12' />

              <div className='flex flex-col w-full'>
                <h1 className='text-xl text-slate-500'>Item name</h1>
                <h3 className='text-2xl font-bold'>P1,000</h3>

                <div className='flex justify-between'>
                  <HomeItemModalQuantity
                    type="subtract"
                  >—</HomeItemModalQuantity>
                  <h3 className='text-2xl'>1</h3>
                  <HomeItemModalQuantity
                    type="add"
                  >+</HomeItemModalQuantity>
                </div>
              </div>



            </div>
          </div>

          <hr className='border-slate-300 mt-6' />

          <div className='flex flex-col mt-4' style={{ WebkitUserSelect: 'none' }}>
            <div className='flex justify-between'>
              <h1 className='text-2xl pointer-events-none'>Subtotal</h1>
              <h1 className='text-2xl'>P1000</h1>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-2xl'>Delivery fee</h1>
              <h1 className='text-2xl'>P500</h1>
            </div>
          </div>

          <hr className='border-slate-300 mt-4 mb-6' />

          <div className='flex justify-between'>
            <h1 className='text-2xl'>Total</h1>
            <h1 className='text-2xl font-bold'>P1500</h1>
          </div>

          <Button className="w-full bg-temporary p-3 text-white text-3xl mt-8">Review payment</Button>

          <div className='relative flex justify-center items-center top-28' style={{ height: '30%' }}>
            <div className='bg-black w-6/12 h-2/4 absolute bottom-18' />

            <div className='z-10 absolute bottom-6 text-xl text-center'>
              <h3>&copy; 2023 Kaon Kaloy</h3>
              <h3>USC-TC</h3>
            </div>

          </div>

          {/* <div className='flex flex-col items-center absolute bottom-8 text-xl w-full'>
          <h3>&copy; 2023 Kaon Kaloy</h3>
          <h3>USC-TC</h3>
        </div> */}

        </div>
      </div>
    </div>

  );


}

export default Home