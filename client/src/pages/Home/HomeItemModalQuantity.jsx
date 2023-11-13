import React from 'react'

function HomeItemModalQuantity(props) {

  const quantityHandler = () => {
    props.type === "add" ? props.setItemCount(prev => prev + 1) : props.setItemCount(prev => prev - 1)
  }

  return (
    <div style={{ borderRadius: '100%' }} className='text-xl bg-black w-8 h-max p-1 text-center' onClick={quantityHandler}>
      <h1 className='text-white'>{props.children}</h1>
    </div>
  )
}

export default HomeItemModalQuantity