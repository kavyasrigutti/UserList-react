import './index.css'

const UserProfile = props => {
  const {userDetails, key} = props
  const {imageUrl, name, role} = userDetails
  console.log(key)
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
