import React from 'react'
import Container from '../../../components/Container'

function HomeMealsCard(props) {

  const renderCategories = "There are no categories for this stall yet."

  return (
    <Container className="w-full">
      <Container className="bg-white p-4 flex flex-col gap-4 shadow-md">
        <Container onClick={() => alert(`Hello ${props.itemName}`)} className=' p-4 flex gap-4 border border-gray-300 hover:bg-slate-100 transition-all duration-200'>

          <div>
            <div className='bg-black h-full w-28'></div>
          </div>
          
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl'>{props.itemName}</h1>
            <article>{props.itemDesc}</article>
            <h3 className='text-xl font-bold'>P100</h3>
          </div>
        </Container>
      </Container>
    </Container>
  )
}

export default HomeMealsCard