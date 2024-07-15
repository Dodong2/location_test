import UserInfo from "../components/common/UserInfo"


const User = () => {

  const userInfo = {
    name: "carl",
    age: 20,
    email: 'Carl@gmail.com',
  }

  const userCity = {
    address: 'Laguna',
    phoneNumber: 99256775477,
    region: 4030
  }

  return (
    <>
    <div>
      <UserInfo user={userInfo} city={userCity}/>
    </div>
    </>
  )
}

export default User
