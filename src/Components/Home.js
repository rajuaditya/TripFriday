import React, { useContext} from 'react'
import { ShopConntext } from '../Context/UserContext';
import Modal from './Modal';
const Home = () => {
 const {data,AddToCart,click,setClick}=useContext(ShopConntext) 



  return (
    <div>
      { click && <Modal/>}
      <h1>Trip Friday Assignment</h1>
      <div>
        <h2 style={{textAlign:"left",color:"green"}}>1.Show Username & Email</h2>
      </div>

      <div>
        {
          data.map(item=>{
            return (
              <div className='avry-item' key={item.id} style={{padding:"10px"}}>
                <div onMouseOver={()=>setClick(true)} style={{width:"20%",cursor:"pointer"}}>
                <h3 onMouseOver={()=>AddToCart(item.id)}>{item.name}</h3>
                </div>
              </div>
            )
          })
        }

      </div>
      
    </div>
  )
}

export default Home;