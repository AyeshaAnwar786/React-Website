import React from 'react'
import Footer from './Footer';

export default function Contact() {
  return (
    <div className='contact-background pb-5'>

<div className='upper-about'>
        <h2 className='up'>Contact</h2>

      </div>

<div class="container pt-5  ">

        <div class="row">
            <div class="col-md-6 contact-info">
                <h3>A REAL ESTATE OWNERSHIP</h3>
                <h2>CONTACT INFO</h2>
                <p>For a Happy Living</p>
                <div class="info-item">
                    <div>
                    <i className='ficons fas fa-envelope'></i>
                        <strong>info@example.com</strong><br/>
                        <p className="small-text" >mail us for any Queries</p>
                    </div>
                </div>
                <div class="info-item">
                    
                    <div>
                    <i className="ficons  fas fa-map-marker-alt"></i>
                        <strong>78 5th Ave, New York</strong><br/>
                        <p className="small-text" >We Are Here Always</p>
                    </div>
                </div>
                <div class="info-item">
                    
                    <div>
                    <i className="ficons fas fa-skype"></i>
                        <strong>hozyskypeid</strong><br/>
                        <p className="small-text" >Chat with us anytime</p>
                    </div>
                </div>
                <div class="info-item">
                   
                    <div>
                    <i className="ficons fas fa-phone"></i>
                        <strong>1-1920-305-3324</strong><br/>
                       <p className="small-text" > Toll Free & 24/7 Available</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="contact-form">
                    <h2>Contact <span>Form</span></h2>
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="FullName"/>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Your Email Address"/>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Phone"/>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="4" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Submit Query</button>
                        <small>Your Email Address Will not be Published</small>
                    </form>
                </div>
            </div>
        </div>
    </div>



   

    

    </div>
  )
}
