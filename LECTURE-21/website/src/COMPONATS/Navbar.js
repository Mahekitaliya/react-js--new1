import React, { Component } from 'react'

import '../COMPONATS/Navbar.css'

function Navbar() {
  return (
   <>
      <div class="con" id="home">

<div class="navbar">
    <div class="logo">
        <a href="#">Coding Market</a>
    </div>
    <div class="items">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#contactus">Contact Us</a></li>
            <li><a href="#ourteam">Our Team</a></li>
        </ul>
    </div>
</div>
</div>
</>
  )
}

export default Navbar

