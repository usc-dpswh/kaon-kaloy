import React from 'react'
import Container from '../../../components/Container'
import Button from '../../../components/Button'

function FavoritesCard(props) {
  return (
    <Container className="mb-4 flex flex-col gap-4 border border-slate-400 p-4 text-xl">
      <Container className="flex">
        {/* <div className="bg-slate-500 w-20 h-20"></div> */}

        <div className="flex w-full justify-center text-3xl">
          <h1 className="">{`${props.stallName}, ${props.location}`}</h1>
        </div>
      </Container>

      <Container className="flex w-full gap-4 text-xl">
        <Button className="w-full bg-ctaGreen p-2 text-white">Order again</Button>
        <Button className="w-full bg-ctaRed p-2 text-white">Remove</Button>
      </Container>
    </Container>
  )
}

export default FavoritesCard
