import React from 'react'

function Food(props) {
  return (
    <div>
      {props.orderSummary.map((food, index) => (
        <div className='flex justify-between'>
          <h1 className='text-2xl'>{food.item}</h1>
          <h1 className='text-2xl'>{food.quantity}</h1>
          <h1 className='text-2xl'>{food.price}</h1>
        </div>
      ))}
    </div>
  )
}

export default Food