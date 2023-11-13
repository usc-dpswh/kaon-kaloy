import React, { useState } from 'react'

function ProfileInputPassword() {
  const [inputType, setInputType] = useState('password')

  const inputClickHandler = () => {
    // Toggle input type between "password" and "text"
    setInputType((prevInputType) => (prevInputType === 'password' ? 'text' : 'password'))
  }

  const inputFormat = 'p-2 border border-slate-500 w-full text-subtext'

  return (
    <div>
      <div className="items-center sm:flex-col lg:flex-row 2xl:flex">
        <h3 className="sm:flex sm:justify-center md:w-full lg:w-4/12 lg:justify-start">Password</h3>
        <input className={inputFormat} type={inputType} onClick={inputClickHandler} name="" id="" />
      </div>
    </div>
  )
}

export default ProfileInputPassword
