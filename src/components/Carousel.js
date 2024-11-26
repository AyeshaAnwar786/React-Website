import React from 'react'
import family from '../images/house-img1.jpg';
import Homw from '../images/Homw.jpg';
import garden from '../images/garden.jpg'

export default function Carousel() {
  return (
    <div>
        <div class="container mt-2">
           <div className='housing1'>
           <h1 className='housing'>
            Fabulous Housing @ Special Price <br/> for near you</h1>
            <p className='housing-text'>Bringing the Best Affordable Property Near<br />  You. Everything as you desire.</p>
           </div>
   <div class="row">
    <div class="col-md-4">
     <div class="property-card1 card1">
      <div class="property-image1">
       <img alt="Image of a large house with a garden" height="225" src={family} width="355"/>
       <span class="property-type1">
        Apartment
       </span>
      
       <span class="property-featured">
        Featured
       </span>
      </div>
      <div class="property-details">
       <h5 className='ghouse'>
        Garden House
       </h5>
       <div class="price">
        $ 88917
       </div>
       <div class="info">
        
        <i class="fas fa-bed">
        </i>
        Beds: 2
        <br/>
        <i class="fas fa-bath">
        </i>
        Baths: 4
       </div>
       <div class="location">
        <i class="fas fa-map-marker-alt">
        </i>
        Karur, Tamil Nadu, India, IN 641001
       </div>
      </div>
      <div class="view-details">
       View Details
      </div>
     </div>
    </div>
    <div class="col-md-4">
     <div class="property-card1 card1">
      <div class="property-image1">
      <img alt="Image of a large house with a garden" height="225" src={Homw} width="355"/>
       <span class="property-featured">
        Featured
       </span>
      </div>
      <div class="property-details">
       <h5 className='ghouse'>
        Modern Chateau
       </h5>
       <div class="price">
        $ 63120
       </div>
       <div class="info">
        
        
        <i class="fas fa-bed">
        </i>
        Beds: 3
        <br/>
        <i class="fas fa-bath">
        </i>
        Baths: 3
       </div>
       <div class="location">
        <i class="fas fa-map-marker-alt">
        </i>
        Chennai, Tamil Nadu, India, IN 641001
       </div>
      </div>
      <div class="view-details">
       View Details
      </div>
     </div>
    </div>
    <div class="col-md-4">
     <div class="property-card1 card1">
      <div class="property-image1">
      <img alt="Image of a large house with a garden" height="225" src={garden} width="355"/>
       <span class="property-featured">
        Featured
       </span>
      </div>
      <div class="property-details">
       <h5 className='ghouse'>
        Manor House
       </h5>
       <div class="price">
        $ 79120
       </div>

       <div class="info">
        
        
        <i class="fas fa-bed">
        </i>
        Beds: 3
        <br/>
        <i class="fas fa-bath">
        </i>
        Baths: 3
       </div>
      
       <div class="location">
        <i class="fas fa-map-marker-alt">
        </i>
        Thuckalay, Tamil Nadu, India, IN 641001
       </div>
      </div>
      <div class="view-details">
       View Details
      </div>
     </div>
    </div>
   </div>
  </div>

{/* <div class="container my-5">
    <div class="row">
      <!-- Card 1 -->
      <div class="col-md-4">
        <div class="card">
          <img src={family} class="card-img-top" alt="Card Image"/>
          <div class="card-body">
            <h5 class="card-title">Card Title 1</h5>
            <p class="card-text">This is a description for card 1.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-4">
        <div class="card">
          <img src={family} class="card-img-top" alt="Card Image"/>
          <div class="card-body">
            <h5 class="card-title">Card Title 2</h5>
            <p class="card-text">This is a description for card 2.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4">
        <div class="card">
          <img src={family} class="card-img-top" alt="Card Image"/>
          <div class="card-body">
            <h5 class="card-title">Card Title 3</h5>
            <p class="card-text">This is a description for card 3.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

    </div>
  </div> */}

    </div>
  )
}

