import React, { useContext } from 'react'
import { ShopConntext } from '../Context/UserContext'
import {useNavigate} from 'react-router-dom'
const Single = (props) => {
const navigate=useNavigate()
  const {RemoveCart}=useContext(ShopConntext)
    const {id,name,username,email}=props.data
  return (
    <div key={id} className='single-user'  style={{backgroundColor:"aliceblue",position:"fixed",width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div className='middle' style={{backgroundColor:"yellow",padding:"40px", width:"500px",height:"500px",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
  <i class="fa-solid fa-xmark close" onClick={()=>RemoveCart(id)} ></i>

      <h1>{name}</h1>
      <h4 style={{margin:"30px"}}><span style={{color:"red"}}>Username:</span>{username}</h4>
      <h4 style={{margin:"30px"}}><span style={{color:"red"}}>EmailId:</span>{email}</h4>
      <button onClick={()=>RemoveCart(id)} className='btn'>Close</button>&nbsp;&nbsp;&nbsp;<button className='btn' onClick={()=>navigate('/userdetail')}>Get Details</button>
      </div>
    </div>
  )
}

export default Single;
