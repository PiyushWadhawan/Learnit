import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
            <NavLink className="navbar-brand hey" to='/' style={{color: 'green', textDecoration: 'none', fontWeight: 'bold'}}>learnIt!</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <NavLink style={{color: 'black', textDecoration: 'none'}} to='/' className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Our Story
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink style={{color: 'black', textDecoration: 'none'}} to='/Instructors' className="dropdown-item">Our Instructors</NavLink></li>
                            <li><NavLink style={{color: 'black', textDecoration: 'none'}} to='/Founders' className="dropdown-item">Founders</NavLink></li>
                        </ul>
                      </li>
                    <li className="nav-item">
                        <NavLink style={{color: 'black', textDecoration: 'none'}} to='/Courses' className="nav-link">Courses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={{color: 'black', textDecoration: 'none'}} to='Signup' className="nav-link">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={{color: 'black', textDecoration: 'none'}} to='FAQs' className="nav-link">FAQs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={{color: 'black', textDecoration: 'none'}} to='Contact' className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
