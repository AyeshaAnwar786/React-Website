import React from 'react'
import Backgroud1 from '../images/Backgroud1.jpg';
import family from '../images/family.jpg';


export default function Slider() {
  return (
    <div>

           <section class="container-fluid header-section Background ">
    <div class="container inner-header">
      <div class="row align-items-center">
       
        <div class="col-md-6">
          <h1 className='header-text'>Get A Property Now @ Affordable Price</h1>
          <p>Making Real Estate Simple & Easier for your Business or your Family</p>
        
         {/* <!-- Form Section --> */}
      {/* <div class="form-container"> */}
        {/* <form className="locationform">
            <div class="input-group">
                <input type="text" placeholder="Location" className="location"/>
                <span class="icon">&#128205;</span>
            </div>
            <div class="input-group">
                <select>
                    <option value="">Categories</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                </select>
            </div>
            <div class="input-group">
                <select>
                    <option value="">Contract Types</option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form> */}
    {/* </div> */}
        
        </div>
        
        <div class="col-md-6">
          <img src={family} alt="Family Image" class="img-fluid"/>
        </div>
      </div>
      </div>


     
    
  


      </section>

      

        </div>

       

    
  )
}
