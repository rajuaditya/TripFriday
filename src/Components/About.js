import React, { useContext } from 'react'
import { ShopConntext } from '../Context/UserContext';

const About = () => {
  const {post}=useContext(ShopConntext)
  return (
    <>
      <h1>Show Posts</h1>

    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div>
{
  post.map(item=>{
    return <li key={item.id} style={{border:"2px solid green",width:"100%",padding:"10px"}}>{item.title}</li>
  })
}
    </div>
    </div>
    </>
  )
}

export default About;
