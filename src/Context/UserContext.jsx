import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
export const ShopConntext=createContext()


const UserContext = (props) => {
/* Click and setClick Functionality
   Data Show & Hide
*/
const [click,setClick]=useState(false)


const DefualtItem=()=>{
     let cart={}
     for (let i = 0; i < 100 +1; i++) {
         cart[i]=0
     }
     return cart
}
const [cartItem,setCartItem]=useState(DefualtItem())

/* AddToUser in uniq*/
const AddToCart=(ietmId)=>{
  setCartItem((prev)=>({...prev,[ietmId]:prev[ietmId] + 1}))
}
/* RemoveUser in uniq*/
const RemoveCart=(ietmId)=>{
  setCartItem((prev)=>({...prev,[ietmId]:prev[ietmId] - 1}))
}



/* UserData Store in data SetData*/
const [data,setData]=useState([])

/* Userposts Store in post SetPosst*/
const [post,setPost]=useState([])

/* Userphotos Store in photo SetPhoto*/
const [photo,setPhoto]=useState([])

/* The Enatir Users Data Fetching  without using Props 
 send data in any Component*/
    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(item=>setData(item))
    },[])

/*  Users Posts Fetching API*/
useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/posts").then(ress=>ress.json()).then(eachpost=>setPost(eachpost))
},[])

/*  Users Album Fetching API*/
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/photos").then(ress=>ress.json()).then(eachphoto=>setPhoto(eachphoto))
},[])


const ContextValue={
                  data,
                  cartItem,
                  AddToCart,
                  RemoveCart,
                  click,
                  setClick,
                  post,
                  photo
                  
                }
  return (
    <div>
      <ShopConntext.Provider value={ContextValue}>
        {props.children}
      </ShopConntext.Provider>
    </div>
  )
}

export default UserContext;
