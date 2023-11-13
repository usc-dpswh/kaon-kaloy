import React from 'react'
import Container from '../../../components/Container'

function HomeCategoryNavbar(props) {

  const renderCategories = "There are no categories for this stall yet."

  return (

    <Container className="h-26 flex w-10/12 scroll-me-48 justify-center gap-6 overflow-auto overflow-x-scroll rounded-b-lg bg-white p-4 text-xl shadow-md top-0 sticky">
      {props.data.length === 0 ? <h1 className='text-slate-500'>{renderCategories}</h1>
        : props.data.map((item, index) => (
          <button key={index} type="button" className="rounded-lg p-1 hover:bg-slate-500 hover:text-white hover:transition">
            {item}
          </button>
        ))}
    </Container>


  )
}

export default HomeCategoryNavbar