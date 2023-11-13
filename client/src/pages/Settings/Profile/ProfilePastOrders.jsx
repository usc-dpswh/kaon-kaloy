import React from 'react'
import Container from '../../../../components/Container'
import OrderCard from './OrderCard'
import { ClassNames } from '../../../../components/ClassNames'

function ProfilePastOrders() {
  return (
    <Container
      className="my-5 w-4/12 overflow-hidden overflow-y-scroll bg-white p-8"
      style={{ height: '500px', overflow: 'auto', scrollbarGutter: 'stable' }}
    >
      <h1 className={`${ClassNames[0].heading} mb-8 sm:text-2xl lg:text-4xl`}>Past orders</h1>

      <OrderCard data={['Burp', '01/01/2023', '0000-0000-0000', '14:02:23']} />
      <OrderCard data={["Pappi's", '01/01/2023', '0000-0000-0000', '14:02:23']} />
      <OrderCard data={['Leylam Shawarma', '01/01/2023', '0000-0000-0000', '14:02:23']} />
      <OrderCard data={['Burp', '01/01/2023', '0000-0000-0000', '14:02:23']} />
      <OrderCard data={["Pappi's", '01/01/2023', '0000-0000-0000', '14:02:23']} />
      <OrderCard data={['Leylam Shawarma', '01/01/2023', '0000-0000-0000', '14:02:23']} />

      <h3 className="w-full border-slate-500 p-2 text-center text-2xl text-subtext">You have no orders yet.</h3>
    </Container>
  )
}

export default ProfilePastOrders
