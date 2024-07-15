//Sample Props
interface users {
    user: {
        name: string
        age: number
        email: string
    }
    city: {
      address: string
      phoneNumber: number
      region: number
    }
}

const UserInfo: React.FC<users> = ({ user, city }) => {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.email}</div>
      <br/>
      <div>{city.address}</div>
      <div>{city.phoneNumber}</div>
      <div>{city.region}</div>
    </>
  )
}

export default UserInfo
