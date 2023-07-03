import React, { useState } from 'react'
import './Navbar.style.css'
import { Link } from 'react-router-dom'
import LogoImg from '../images/rec-web-logo.webp'

const Navbar = () => {
  const [display, setDisplay] = useState(false)
  const [search, setSearch] =useState(false)

  function handleChange(){
    setDisplay(true)
  }

  function handleSearch(){
    setSearch(true)
  }

  const displayComponent = display ? (
    <div className="container">
    <Link style={{textDecoration:'none'}} to={'/new_registration'}><span>Register</span></Link>
    <hr />
    <Link style={{textDecoration:'none'}}to={'/login'}><span>Login</span></Link>
  </div>
  ):null;

  const displaySearchComponent = search ? (
    <div className="search-sec">
    <input type="text" placeholder='search here' />
  </div>
  ):null;


  return (
    <div>
      <div className="nav-container">
        <div className="logo-sec">
            <Link to={'/'}><img src={LogoImg} alt="img error" /></Link>
            <div className="logo-name">
                <div className="find-box">
                    <span>FIN</span>
                    <span>D</span>
                </div>
                <div className="cherry-box">
                    <span>C</span>
                    <span>HERRY</span>
                </div>
            </div>
        </div>
        <div className="routes-sec">
            <ul>
                <Link to={'/'} style={{textDecoration:'none'}}><li>HOME</li></Link>
               <li onClick={handleChange}>REGISTER</li>
              <li onClick={handleSearch}>SEARCH</li>
            </ul>
        </div>
        <div className="reg-sec">
          {displayComponent}
        </div>
       {displaySearchComponent}
      </div>
    </div>
  )
}

export default Navbar
