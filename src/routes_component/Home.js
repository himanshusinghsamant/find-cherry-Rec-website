import React from 'react'
import Main from '../home_Component/Main'
import Navbar from '../home_Component/Navbar'
import Register from './Register'


const Home = () => {
  return (
    <div >
        <Navbar/>
      <Register/>
      <Main/>
    </div>
  )
}

export default Home
