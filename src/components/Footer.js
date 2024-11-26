import React from 'react'
import imageslogo from '../images/imageslogo.png'
export default function Footer() {
    return (
        <footer
            class="text-center text-lg-start text-white"
        //   style="background-color: #45526e"
        >
            {/* <!-- Grid container --> */}
            <div class="container p-4 pb-0">
                {/* <!-- Section: Links --> */}
                <section class="">
                    {/* <!--Grid row--> */}
                    <div class="row">
                        {/* <!-- Grid column --> */}
                        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 ">
                            <h2 class="text-uppercase mb-4 font-weight-bold footer-logo">
                                Houzy
                            </h2>
                            
                            <p className='logo-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia, consequatur omnis assumenda ratione, sit voluptas
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        <hr class="w-100 clearfix d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 footer-logo">
                            <h6 class="text-uppercase mb-4 font-weight-bold ">Products</h6>
                            <p>
                                <a class="text-white ">Shoes</a>
                            </p>
                            <p>
                                <a class="text-white">Dress</a>
                            </p>
                            <p>
                                <a class="text-white">Makeup</a>
                            </p>
                            <p>
                                <a class="text-white">Hair Products</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        <hr class="w-100 clearfix d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div class="text-uppercase col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 footer-logo">
                            <h6 class="text-uppercase mb-4 font-weight-bold">
                                My links
                            </h6>
                            <p>
                                <a class="text-white">My Account</a>
                            </p>
                            <p>
                                <a class="text-white">BecomeAffiliate</a>
                            </p>
                            <p>
                                <a class="text-white">Shipping Rates</a>
                            </p>
                            <p>
                                <a class="text-white">Help</a>
                            </p>
                        </div>

                        {/* <!-- Grid column --> */}
                        <hr class="w-100 clearfix d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 ">
                            <h6 class="text-uppercase mb-4 font-weight-bold footer-logo">Contact</h6>
                            <p><i class="fas fa-home mr-3 foo-log"></i> New York, NY 10012, US</p>
                            <p><i class="fas fa-envelope mr-3 foo-log"></i> info@gmail.com</p>
                            <p><i class="fas fa-phone mr-3 foo-log"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print mr-3 foo-log"></i> + 01 234 567 89</p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!--Grid row--> */}
                </section>
                {/* <!-- Section: Links --> */}

                <hr class="my-3" />

                {/* <!-- Section: Copyright --> */}
                <section class="p-3 pt-0">
                    <div class="row d-flex align-items-center">
                        {/* <!-- Grid column --> */}
                        <div class="col-md-7 col-lg-8 text-center text-md-start">
                            {/* <!-- Copyright --> */}
                            <div class="p-3">
                                © 2024:
                                <a class="text-white" href="https://mdbootstrap.com/"
                                >Yahoo@.com</a
                                >
                            </div>
                            {/* <!-- Copyright --> */}
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            {/* <!-- Facebook --> */}
                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                className="text-white"
                                role="button"
                            ><i class="fab fa-facebook-f foo-log"></i
                            ></a>

                            {/* <!-- Twitter --> */}
                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                className="text-white"
                                role="button"
                            ><i class="fab fa-twitter foo-log"></i
                            ></a>

                            {/* <!-- Google --> */}
                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                className="text-white"
                                role="button"
                            ><i class="fab fa-google foo-log"></i
                            ></a>

                            {/* <!-- Instagram --> */}
                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                className="text-white"
                                role="button"
                            ><i class="fab fa-instagram foo-log"></i
                            ></a>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                </section>
                {/* <!-- Section: Copyright --> */}
            </div>
            {/* <!-- Grid container --> */}
        </footer>
    )
}
