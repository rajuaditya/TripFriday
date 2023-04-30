import React, { useContext } from 'react'

import { ShopConntext } from '../Context/UserContext';
import SingleAlbum from '../AlbumPage/SingleAlbum.js'
const Album = () => {
  const {photo,cartItem}=useContext(ShopConntext)
  return (
    <div>
      {
        photo.map(eachAlbum=>{
          if (cartItem[eachAlbum.id]) {
            return <SingleAlbum data={eachAlbum}/>
            
          }
        })
      }
      
    </div>
  )
}

export default Album;
