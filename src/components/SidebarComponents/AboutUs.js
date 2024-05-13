import React from "react";
import discussion from "../../Imgs/icon-30.png";
import Screenshot from "../../Imgs/Screenshot from 2024-05-13 12-57-43.png";

const About = () => {
  return (
    <>
      <div style={{ height: "90vh", backgroundColor: "white", color: "black", alignItems: "center", textAlign: "center",}}>

      <section>
              <img src={Screenshot} alt="" style={{width: "100%"}} />
      </section>

        <div className="container">
        </div>
        <div
          className="container d-flex gap-5"
          style={{ justifyContent: "center" }}
        >
          <div
            className="card my-5"
            style={{
              width: "18rem",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text pt-3">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-dark mt-4">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card my-5"
            style={{
              width: "18rem",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text pt-3">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-dark mt-4">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card my-5"
            style={{
              width: "18rem",
              backgroundColor: "transparent",
              border: "none",
              textAlign: "left",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text pt-3">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-dark mt-4">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <section>
            <div className="container">
                <div className="section-heading5" style={{textAlign: "center"}}>
                    <span className="sub-title" style={{fontSize: "20px"}}>Our Process</span>
                    <h2>Our <span className="text-secondary">working process</span></h2>
                    <div className="divider pb-3"></div>
                </div>
                <div className="row process-order">
                    <div className="col-sm-6 col-lg-3 mb-2-2 mb-lg-0">
                        <div className="process-style3 process-down-arrow" style={{textAlign: "center"}}>
                            <div className="icon-box">
                                <img src={discussion} alt="Icon" className="bg-dark p-4 my-4"/>
                            </div>
                            <h4>Discovery</h4>
                            <p className="mb-0 w-md-90 mx-auto">We assist your enterprise for growth and success.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-2-2 mb-lg-0">
                        <div className="process-style3 process-up-arrow" style={{textAlign: "center"}}>
                            <div className="icon-box">
                                <img src={discussion} alt="Icon" className="bg-dark p-4 my-4"/>
                            </div>
                            <h4>Discussion</h4>
                            <p className="mb-0 w-md-90 mx-auto">We assist your enterprise for growth and success.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-2-2 mb-sm-0">
                        <div className="process-style3 process-down-arrow" style={{textAlign: "center"}}>
                            <div className="icon-box">
                            <img src={discussion} alt="Icon" className="bg-dark p-4 my-4"/>
                            </div>
                            <h4>Testing</h4>
                            <p className="mb-0 w-md-90 mx-auto">We assist your enterprise for growth and success.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="process-style3" style={{textAlign: "center"}}>
                            <div className="icon-box">
                            <img src={discussion} alt="Icon" className="bg-dark p-4 my-4"/>
                            </div>
                            <h4>Execute</h4>
                            <p className="mb-0 w-md-90 mx-auto">We assist your enterprise for growth and success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="pt-5">
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
      </div>

      </div>
    </>
  );
};

export default About;