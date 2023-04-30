import React, { useContext } from 'react'
import { ShopConntext } from '../Context/UserContext'
import './UserDetail.css'
import {useNavigate} from 'react-router-dom'
const UserDetail = () => {
    const {data,cartItem}=useContext(ShopConntext)
  return (
    <div>
      <h1>User Detail's</h1>
      {
        data.map((item)=>{
            if(cartItem[item.id]!==0){
                return <UserDetails data={item}/>
            }
        })
      }
    </div>
  )
}
const UserDetails=(props)=>{
  const navigate=useNavigate()
const {id,name,username,email,address,phone,website,company}=props.data
return(
<>
<div className='main-user'>
  <i class="fa-solid fa-xmark" onClick={()=>navigate('/')}></i>
<div className='user-Details' key={id}>
    <h1>{name}</h1>
    <h4><span style={{color:"black"}}>Username:</span> {username}</h4>
    <h5><span style={{color:"black"}}>EmailId:</span>  {email}</h5>
    <h5><span style={{color:"black"}}>Phone No:</span>  {phone}</h5>
    <h4><span style={{color:"black"}}>Website: </span> {website}</h4>
    <h2><span style={{color:"black"}}>CompanyName: </span> {company.name}</h2>
    <h3><span style={{color:"black"}}>Address: </span> {address.street}</h3>


</div>
</div>
</>
)

}

export default UserDetail
