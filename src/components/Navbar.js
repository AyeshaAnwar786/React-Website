import React from 'react'
import {Link} from  'react-router-dom';
import imageslogo from '../images/imageslogo.png';



export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg main-navbar">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/"><img src={imageslogo} alt="" className='nav-logo' /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" to="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" to="/About">About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" to="/Contact">Contact</Link>
          </li>
         
           
          
        </ul>

        <div className='ph-t'>
        <p className='pho'><i  class="ffficon fa fa-phone"></i> 000-1111-2222</p>
          <p className='pho-tex'>Toll Free & 24/7 Available</p>
        </div>
       
      </div>
    </div>
  </nav>
  )
}
