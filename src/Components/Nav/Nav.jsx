import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    const navLinks = [
        { path: "/", title: "Home" },
        { path: "/about", title: "About Us" },
        { path: "/contact", title: "Contact Us" },
      ];

      const renderLinks = navLinks.map((value, index) => {
        return <Link to={value.path} key={index} className='link'>{value.title}</Link>
      })

  return (
    <div className='nav'>
        <h1 className='logo'> <Link to={'/'}>Michyking</Link></h1>
        <div>{renderLinks}</div>
    </div>
  )
}

export default Nav