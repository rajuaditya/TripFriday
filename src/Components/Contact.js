import React from 'react'
import { ShopConntext } from '../Context/UserContext';
import { useContext } from 'react';
const Conntact = () => {

  const {photo,cartItem,AddToCart}=useContext(ShopConntext)
  return (
    <div>
      <h1>Show Albums</h1>
    <div  className='album'>
     
      {
        photo.map(item=>{
          const{id,thumbnailUrl}=item
          return (
            <div className='album-pic' key={id}>
            <img src={thumbnailUrl}alt="pic" width="200px" height="200px"/>
            <button className='btn' onClick={()=>AddToCart(id)}>AddToCart{cartItem[id]>0&&<>({cartItem[id]})</>}</button>
          </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Conntact;
