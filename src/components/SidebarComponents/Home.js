import React from "react";
import backgroundImage from "../../Imgs/back.png";
import cardImage from "../../Imgs/img_avatar3.png";
import fback from "../../Imgs/Screenshot from 2024-05-13 13-29-15.png";

const Home = () => {

  const [customersServed, setCustomersServed] = React.useState(0);
  const [projectsCompleted, setProjectsCompleted] = React.useState(0);
  const [yearsOfExperience, setYearsOfExperience] = React.useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = React.useState(0);
  const [stopCounting, setStopCounting] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Increment numbers gradually
      setCustomersServed((prev) => (prev < 80 ? prev + 1 : prev));
      setProjectsCompleted((prev) => (prev < 80 ? prev + 1 : prev));
      setYearsOfExperience((prev) => (prev < 4 ? prev + 1 : prev));
      setCustomerSatisfaction((prev) => (prev < 95 ? prev + 1 : prev));

      // Stop counting when numbers reach 80
      if (
        customersServed >= 80 &&
        projectsCompleted >= 80 &&
        yearsOfExperience <= 4 &&
        customerSatisfaction >= 95
      ) {
        setStopCounting(true);
      }
    }, 5);

    // Clean up interval on component unmount or when counting should stop
    return () => clearInterval(interval);
  }, [
    stopCounting,
    customersServed,
    projectsCompleted,
    yearsOfExperience,
    customerSatisfaction,
  ]);

  return (
    <>
    <div style={{ flex: 1, height: "90vh", backgroundColor: "white", color: "black", justifyContent: "center", alignItems: "center", textAlign: "center", }}>

    <section className="page-title-section bg-img cover-background primary-overlay" data-overlay-dark="7">
      <img src={fback} alt="" style={{width: "100%"}} />  
        </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Feature Image"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2 className="fw-bold mb-4">Feature 1 Title</h2>
                <p className="lead">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="/" className="btn btn-dark btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2 className="fw-bold mb-4">Feature 2 Title</h2>
                <p className="lead">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="/" className="btn btn-dark btn-lg">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Feature Image"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="company-in-numbers py-5"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <h2 className="text-center mb-5">Our Works</h2>
          <p className="text-center mb-5">
            We are the best agency to improve your deals
          </p>
          <div className="row text-center">
            <div className="col-md-3">
              <h3>{customersServed}+</h3>
              <p>Customers Served</p>
            </div>
            <div className="col-md-3">
              <h3>{projectsCompleted}+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="col-md-3">
              <h3>{yearsOfExperience}</h3>
              <p>Years of Experience</p>
            </div>
            <div className="col-md-3">
              <h3>{customerSatisfaction}%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container d-flex gap-5" style={{justifyContent: "center"}}>
      <div className="card my-5" style={{width: "18rem"}}>
        <img src={cardImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-dark">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card my-5" style={{width: "18rem"}}>
        <img src={cardImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-dark">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card my-5" style={{width: "18rem"}}>
        <img src={cardImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-dark">
            Go somewhere
          </a>
        </div>
      </div>
      </div> 

      <div className="">
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
              <p><li>Frontend</li></p>
              <p><li>backend</li></p>
              <p><li>Other</li></p>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-4">Social Media</h5>
            <ul className="list-unstyled">
              <p><li>Linked In</li></p>
              <p><li>Instagram</li></p>
              <p><li>Facebook</li></p>
            </ul>
          </div>
        </div>
      </div>
      <div  className="pt-4">
      <hr /> 
      </div>
         <div className="bg-dark text-light pb-3">
               <div className="container text-center">
                   <p className="mb-0">&copy; {new Date().getFullYear()} [Your Website Name]. All rights reserved.</p>
               </div>
        </div>
    </footer>
    </div>

    </div>
      </>
  );
};

export default Home;