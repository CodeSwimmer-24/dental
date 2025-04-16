import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="hero">
        <div className="container">
          <div className="left-container">
            <div className="left-content">
              <h3>Exceptional dental care for every stage of your journey</h3>

              <p>
                We are committed to providing top-notch dental care in a <br />
                comfortable and friendly environment.
              </p>
              <button>Book Appointment →</button>
              <div className="horizontal-line"></div>
            </div>
            <div className="hero-footer">
              <div className="footer-content">
                <img src="/icon-hero-footer-1.svg" alt="icon" />
                <p>
                  Exeperience <br /> Doctor
                </p>
              </div>

              <div className="footer-content">
                <img src="/icon-hero-footer-2.svg" alt="icon" />
                <p>
                  Personalized
                  <br />
                  Care
                </p>
              </div>

              <div className="footer-content">
                <img src="/icon-hero-footer-3.svg" alt="icon" />
                <p>
                  Flexible
                  <br />
                  Payment
                  <br /> Options
                </p>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="column1">
              <img className="img1" src="/hero-image-1.jpg" alt="img" />
              <img className="img2" src="/hero-image-2.jpg" alt="img" />
            </div>

            <div className="column2">
              <img className="img1" src="/hero-image-3.jpg" alt="img" />
              <img className="img2" src="/hero-image-4.jpg" alt="img" />
            </div>

            <div className="column3">
              <img src="/hero-image-5.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-row">
        <div className="row-content">
          <div className="row-icon">
            <img src="/icon-phone.svg" alt="icon" />
          </div>
          <div className="row-title-text">
            <h1>Need Dental Services ?</h1>
            <p>Call on : (+01) 987 828 745</p>
          </div>
        </div>
        <div className="row-content">
          <div className="row-icon">
            <img src="/icon-mail.svg" alt="icon" />
          </div>
          <div className="row-title-text">
            <h1>Opening hours</h1>
            <p>Mon to Sat 9:00AM to 9:00PM</p>
          </div>
        </div>
        <div className="row-content">
          <div className="row-icon">
            <img src="/icon-clock.svg" alt="icon" />
          </div>
          <div className="row-title-text">
            <h1>schedule appointment</h1>
            <p>Mail us : appointment@domain.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
