import React from 'react'
import Navbar from './Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import UserDetail from './UserPage/UserDetail';
import Album from './AlbumPage/Album';
function App() {
  return (
   <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='blog' element={<Blog/>}/>
  <Route path='contact' element={<Contact/>}/>
<Route path='userdetail' element={<UserDetail/>}/>
<Route path='album' element={<Album/>}/>

</Routes>

   </>
  );
}

export default App;
