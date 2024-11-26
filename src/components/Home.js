import React from 'react'
import Slider from './Slider';
import family from '../images/family.jpg';
import Carousel from './Carousel';

export default function Home() {
  return (
    <>
    <Slider/>
    <Carousel/>
    <div className='cotainer-fluid home-section11'>
      

      

       <div class="container properties-section">
   <div class="row">
    
    <div class="col-md-4">
     <div class="property-type">
      <div class="property-item">
      <i class="house-icons fa-solid fa-house"></i>
      
      <strong className='app-name'>  Appartments</strong><br/>
      <div className='app-text'>(5 Properties)</div>  
      </div>
      <div class="property-item">
      <i class="house-icons fa-solid fa-address-card"></i>
      <strong className='app-name'> Individual Villa</strong><br/>
      <p className='app-text' >(4 Properties)</p>                
      </div>
      
      
      <div class="property-item">
      
      <i class='house-icons fas fa-building'></i>
          <strong className='app-name'> Office Space</strong><br/>
          <p className='app-text' >(4 Properties)</p>


</div>
     </div>
    </div>
    {/*  */}
    <div class="col-md-4">
     <div class="property-type">
      <div class="property-item">
      <i class='house-icons fas fa-landmark'></i>
      
      <strong className='app-name'>  Town House</strong><br/>
      <div className='app-text'>(4 Properties)</div>  
      </div>
      <div class="property-item">
      <i class='house-icons fas fa-city'></i>
      <strong className='app-name'> Modern Home</strong><br/>
      <p className=' app-text' >(5 Properties)</p>                
      </div>
      
      
      <div class="property-item">
      
      <i class='house-icons fas fa-business-time'></i>
          <strong className='app-name'> Farm House</strong><br/>
          <p className='app-text' >(5 Properties)</p>


</div>
     </div>
    </div>

    <div class="col-md-4">
     <div class="info-section22">
      <h5 className='he1'>
       GET ACCESS OVER
      </h5>
      <h2 className='he11'>
       ELI
       <span>
        PROPERTY
       </span>
      </h2>
      <p className='he111'>
       Get a Feature Rich Home
      </p>
      <hr/>
      <h5 className='he1'>
       CONNECT OVER
      </h5>
      <h2 className='he11'>
       EXPER
       <span>
        AGENTS
       </span>
      </h2>
      <p className='he111'>
       to Help You Get a Property
      </p>
     </div>
    </div>
   </div>
  </div>

      
     
  
    </div>

    </>
  )
}
