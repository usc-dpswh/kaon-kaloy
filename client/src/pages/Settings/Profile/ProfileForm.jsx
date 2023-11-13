import React from 'react'
import ProfileInputField from './ProfileInputField'
import ProfileInputSelect from './ProfileInputSelect'
import ProfileInputPassword from './ProfileInputPassword'
import Button from '../../../../components/Button'
import ProfileAlert from './ProfileAlert'

function ProfileForm() {
  const schools = ['SAS', 'SAFAD', 'SOE', 'SLG', 'SED', 'SBE', 'SHCP']

  return (
    <div className="w-4/12 bg-white p-8 md:max-w-5xl">
      <h1 className="mb-8 text-center text-3xl font-bold sm:text-2xl lg:text-4xl">My account</h1>

      <ProfileAlert type="error"/>
      <ProfileAlert type="success"/>

      <div className="md:text-2xl 2xl:text-xl">
        <div className="space-y-7">
          <ProfileInputField fieldName="ID Number" />
          <ProfileInputField fieldName="First name" />
          <ProfileInputField fieldName="Last name" />
          <ProfileInputSelect schools={schools} fieldName="School" />

          <hr className="border-t-1 border-slate-300"></hr>

          <ProfileInputPassword />
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="w-full bg-temporary p-3 text-white">Make changes</Button>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm
