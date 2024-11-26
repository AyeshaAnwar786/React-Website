import React from 'react'
import loans from '../images/loans.png';
import Nowus from './Nowus';

export default function About() {
  return (
    <div className='container-fluid p-0'>
      <div className='upper-about'>
        <h2 className='up'>About</h2>

      </div>
     

<div className='container-fluid about-header1 pt-5'>
<div class="container about-header mt-5">
        <div class="background-image1">
            <div class="header1">A REAL ESTATE OWNERSHIP</div>
            <div class="title1">BRINGING YOU TOGETHER</div>
            <div class="subtitle1">For a Happy Living</div>
            <div class="row">
                <div class="col-md-8">
                    <div class="content1">
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator this is to elongate on the Internet. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.
                        <br/><br/>
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="quote1">
                        <i class="fas fa-quote-left"></i> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator this is to elongate.
                        <br/><br/>
                        <div class="quote-author1">- Barry Hilligan, Co Founder of Houzy</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

     {/*  */}

     <section class="py-5">
        <div class="container">
        <div class="title2">Popular <span>Properties</span> <i class="fa-solid fa-house"></i>
         <p class="subtitle1">Best Properties around your area</p></div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="hover-card p-4">
                        <img src={loans}  alt="Pick your House" class="card-icon rounded-circle"/>
                        <h5 class="card-title">Pick your House</h5>
                        <p class="card-text">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <a href="#" class="btn btn-outline-primary"><i class="fas fa-search"></i> Search Home</a>
                    </div>
                </div>
                <div class="col">
                    <div class="hover-card1 p-4">
                        <img src={loans}  alt="Contact an Agent" class="card-icon rounded-circle"/>
                        <h5 class="card-title">Contact an Agent</h5>
                        <p class="card-text">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <a href="#" class="btn btn-outline-primary"><i class="fa-solid fa-phone"></i> Call An Agent</a>
                    </div>
                </div>
                <div class="col">
                    <div class="hover-card p-4">
                        <img src={loans} alt="Apply for a Loan" class="card-icon rounded-circle"/>
                        <h5 class="card-title">Apply for a Loan</h5>
                        <p class="card-text">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <a href="#" class="btn btn-outline-primary"><i class='fas fa-piggy-bank'></i> Apply Loan</a>
                    </div>
                </div>
                <div class="col">
                    <div class="hover-card1 p-4">
                        <img src={loans}  alt="Buy your House" class="card-icon rounded-circle"/>
                        <h5 class="card-title">Buy your House</h5>
                        <p class="card-text">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <a href="#" class="btn btn-outline-primary"><i class="fa-solid fa-key"></i> Get Your Key</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* inner part */}

    <div className="container-fluid Home-loan-img pt-3">
    <div class="title2 title3">Get Home Loans in  <span>easy way</span> 
    <p class="subtitle1 subtil">If money is the problem, make us the solution</p></div>
    <div class="container about-inner-section ">
    
    <div class="row">
            <div class="col-md-4 left-panel">
                <nav class="nav flex-column">
                    <a class="nav-link active" href="#"><i class="fas fa-eye"></i> Response Rate</a>
                    <a class="nav-link" href="#"><i class="fa-solid fa-thumbs-up"></i> Buyers Trust</a>
                    <a class="nav-link" href="#"><i class="fas fa-dollar-sign"></i> Value of Houzy</a>
                    <a class="nav-link" href="#"><i class="fas fa-question-circle"></i> Ask & Answer</a>
                    <a class="nav-link" href="#"><i class="fas fa-search"></i> Smart Search</a>
                </nav>
            </div>
            <div class="col-md-8 right-panel">
                <h3>Make your Listing to Appeal the Right Audience</h3>
                <p>To popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. From 45 BC, making it over 2000 years old.</p>
                <div class="row">
                    <div class="col-md-6">
                        <ul>
                            <li>Insurance</li>
                            <li>Title & Settlement</li>
                            <li>Property Management</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Services</li>
                            <li>Relocation Services</li>
                            <li>Mortgage</li>
                        </ul>
                    </div>
                </div>
                <button class="btn btn-primary">View</button>
            </div>
        </div>
    </div>
    </div>


   


    </div>
  )
}
