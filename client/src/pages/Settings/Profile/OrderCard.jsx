import React from 'react'
import Container from '../../../../components/Container'
import { ClassNames } from '../../../../components/ClassNames'

function OrderCard(props) {
  return (
    <Container className="mb-4 border border-slate-400 p-4 hover:bg-slate-100 transition-all duration-200">
      <h1 className={`${ClassNames[0].heading} text-2xl`}>{props.data[0]}</h1>

      <Container className="mt-4 flex justify-around">
        <h3 className="text-xl">{props.data[1]}</h3>
        <h3 className="text-xl">{props.data[2]}</h3>
        <h3 className="text-xl">{props.data[3]}</h3>
      </Container>
    </Container>
  )
}

export default OrderCard
