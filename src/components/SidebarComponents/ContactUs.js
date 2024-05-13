import React from 'react';
import fback from "../../Imgs/Screenshot from 2024-05-13 14-12-17.png";

const Contact = () => {
    return (
        <div style={{ flex: 1, height: '90vh', backgroundColor: 'white', color: 'black', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

         {/* <div className="bg-secondary"> */}

         <section className="page-title-section bg-img cover-background primary-overlay pb-4" data-overlay-dark="7"> 
         <img src={fback} alt="" style={{width: "100%"}} />  
        </section>

         <section className=" my-5">
             <div className="container">
        <div className="row justify-content-center mt-3" style={{gap: "80px"}}>
            <div className="col-lg-6 mb-2-2 mb-lg-0">
                <div className="p-3 p-lg-2 box-shadow h-100 bg-white" style={{border: "1px solid grey"}}>
                    <h2 className="mb-4 text-dark">Contact With Us</h2>
                    <form className="contact quform" action="https://techno.websitelayout.net/quform/contact.php" method="post" encType="multipart/form-data">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name" className="form-label">Your Name <span className="text-danger">*</span></label>
                                <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Your Email <span className="text-danger">*</span></label>
                                <input className="form-control" id="email" type="email" name="email" placeholder="Your email here" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="subject" className="form-label">Your Subject <span className="text-danger">*</span></label>
                                <input className="form-control" id="subject" type="text" name="subject" placeholder="Your subject here" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone" className="form-label">Contact Number</label>
                                <input className="form-control" id="phone" type="tel" name="phone" placeholder="Your phone here" />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                                <textarea className="form-control" id="message" name="message" rows="3" placeholder="Tell us a few words" required></textarea>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="type_the_word" className="form-label">Type the word <span className="text-danger">*</span></label>
                                <input className="form-control" id="type_the_word" type="text" name="type_the_word" placeholder="Type the below word" required />
                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-dark" type="submit">Send Message</button>
                                <div className="quform-loading-wrap mt-3"><span className="quform-loading"></span></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-4" style={{border: "1px solid grey"}}>
                <div className="p-3 p-lg-2 box-shadow h-100 bg-white">
                    <h2 className="mb-4 text-dark text-capitalize">Our contact detail</h2>
                    <p className="mb-4">Digital Solution And Any Related Services Company Field. Write as some words about your question.</p>
                    <div className="d-flex mb-4 pb-3 border-bottom border-2 border-dark">
                        <div className="flex-shrink-0 mt-2">
                            <i className="fas fa-phone-alt text-secondary fs-3"></i>
                        </div>
                        <div className="flex-grow-1 ms-4">
                            <h3 className="h5">Phone Number</h3>
                            <span className="text-muted d-block mb-1">(+44) 123 456 789</span>
                            <span className="text-muted">(+44) 152-567-987</span>
                        </div>
                    </div>
                    <div className="d-flex mb-4 pb-3 border-bottom border-2 border-dark">
                        <div className="flex-shrink-0 mt-2">
                            <i className="far fa-envelope-open text-secondary fs-3"></i>
                        </div>
                        <div className="flex-grow-1 ms-4">
                            <h3 className="h5 mb-1">Email Address</h3>
                            <span className="text-muted d-block mb-1">info@example.com</span>
                            <span className="text-muted">info@domain.com</span>
                        </div>
                    </div>
                    <div className="d-flex mb-4 pb-3 border-bottom border-2 border-dark">
                        <div className="flex-shrink-0 mt-2">
                            <i className="fas fa-map-marker-alt text-secondary fs-3"></i>
                        </div>
                        <div className="flex-grow-1 ms-4">
                            <h3 className="h5 mb-1">Location</h3>
                            <address className="text-muted d-block mb-0 w-md-80 w-xl-70">66 Guild Street 512B, Great North Town.</address>
                        </div>
                    </div>
                    <ul className="social-box list-unstyled d-flex">
                        <li className="me-3"><a href="#!" className="text-primary"><i className="fab fa-facebook-f fs-3"></i></a></li>
                        <li className="me-3"><a href="#!" className="text-primary"><i className="fab fa-twitter fs-3"></i></a></li>
                        <li className="me-3"><a href="#!" className="text-primary"><i className="fab fa-youtube fs-3"></i></a></li>
                        <li><a href="#!" className="text-primary"><i className="fab fa-linkedin-in fs-3"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <iframe className="map mt-5" id="gmap_canvas" src="https://maps.google.com/maps?q=london&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
        </section>

            <footer className="bg-dark text-light pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h5 className="mb-4">About</h5>
                <p>Aim</p>
                <p>Vision</p>
                <p>Testimonials</p>
              </div>
              <div className="col-md-3">
                <h5 className="mb-4">Contact</h5>
                <p>Email</p>
                <p>number</p>
                <p>Other</p>
              </div>
              <div className="col-md-3">
                <h5 className="mb-4">Services</h5>
                <ul className="list-unstyled">
                  <p>
                    <li>Frontend</li>
                  </p>
                  <p>
                    <li>backend</li>
                  </p>
                  <p>
                    <li>Other</li>
                  </p>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="mb-4">Social Media</h5>
                <ul className="list-unstyled">
                  <p>
                    <li>Linked In</li>
                  </p>
                  <p>
                    <li>Instagram</li>
                  </p>
                  <p>
                    <li>Facebook</li>
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <hr />
          </div>
          <div className="bg-dark text-light pb-3">
            <div className="container text-center">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} [Your Website Name]. All
                rights reserved.
              </p>
            </div>
          </div>
            </footer>
        {/* </div> */}

        </div>
    )
}

export default Contact