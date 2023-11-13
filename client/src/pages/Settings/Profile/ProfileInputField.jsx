import React from 'react'

function ProfileInputField(props) {
  const inputFormat = 'p-2 border border-slate-500 w-full text-subtext'

  return (
    <div>
      <div className="items-center sm:flex-col lg:flex-row 2xl:flex">
        <h3 className="sm:flex sm:justify-center md:w-full lg:w-4/12 lg:justify-start ">{props.fieldName}</h3>
        <input className={inputFormat} type="text" />
      </div>
    </div>
  )
}

export default ProfileInputField
