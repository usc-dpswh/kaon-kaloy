import React from 'react'

import { ClassNames } from '../../../../components/ClassNames'

function ProfileInputSelect(props) {
  return (
    <div className="items-center sm:flex-col lg:flex-row 2xl:flex">
      <h3 className="sm:flex sm:justify-center md:w-full lg:w-4/12 lg:justify-start">{props.fieldName}</h3>
      <select className={ClassNames[0].inputFormat} name="school-dropdown" id="">
        {props.schools.map((school, index) => (
          <option key={index} value={school}>
            {school}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ProfileInputSelect
