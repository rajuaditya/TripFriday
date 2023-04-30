import React from 'react'

const SingleAlbum = (props) => {
    const {id,thumbnailUrl}=props.data
  return (
        <div className='album-pic' key={id}>
            <img src={thumbnailUrl}alt="pic" width="200px" height="200px"/>
      
    </div>
  )
}

export default SingleAlbum;
