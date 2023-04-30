import React, { useContext } from 'react'
import { ShopConntext } from '../Context/UserContext';
import Single from './Single';
const Modal = () => {
    const {data,cartItem}=useContext(ShopConntext);
  return (
    <div>
      {
        data.map(item=>{
          if (cartItem[item.id]!==0) {
            return <Single data={item}/>
            
          }
        })
      }
    </div>

  )
}

export default Modal;
