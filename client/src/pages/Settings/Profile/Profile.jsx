import ProfileForm from './ProfileForm'
import ProfilePastOrders from './ProfilePastOrders'
import { ClassNames } from '../../../../components/ClassNames'

function Profile() {
  return (
    <div
      style={{
        backgroundColor: '#e8e8e8',
      }}
      className={ClassNames[0].placeCenter}
    >
      <ProfileForm />
      <ProfilePastOrders />
    </div>
  )
}

export default Profile
