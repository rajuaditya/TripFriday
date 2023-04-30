import React, { useState } from 'react'

const Blog= () => {
  const [create,setCreate]=useState("")
  const [store,setStore]=useState([])

  const subHand=(e)=>{
    e.preventDefault()
    const newItem=[...store,create]
    setStore(newItem)
    setCreate(" ")
  }
  const DeletHand=(value)=>{
    const NewTodo=store.filter((tod,index)=>index!==value)
    setStore(NewTodo)
       
  }
  return (
    <React.Fragment>
      <div className='po4'>
      <h1>Add Comments</h1>
      <div>
        <form onSubmit={subHand}>
          <input type="text" placeholder='write a Comment' value={create} onChange={(e)=>setCreate(e.target.value)}/>&nbsp;
          <input className='btn' type="submit" value="Create Comment"/>
        </form>     
      </div>
      <div>
      {
        store.map((item,index)=>{
          return <div style={{fontSize:"40px",marginTop:"30px"}} key={index}>{item}&nbsp;<button  onClick={()=>DeletHand(index)} className='btn'>Delete</button></div>
        })
      }    
      </div>
      </div>
      

    </React.Fragment>
  )
}

export default Blog;
