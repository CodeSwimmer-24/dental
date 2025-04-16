import React from "react";
import "./style.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1>
          Your Healthier Smile Awaits - <span>Book Now!</span>
        </h1>
        <a href="#" className="book-button link">
          Book Appointment <span className="arrow-right">→</span>
        </a>
      </div>
      <hr />
      <div className="footer-content">
        <div className="footer-section brand">
          <h2 className="logo">
            🦷 <span>Prime</span>care
          </h2>
          <p>
            The goal of our clinic is to provide friendly, caring dentistry and
            the highest level of general, cosmetic, and specialist dental
            treatments.
          </p>
          <div className="socials">
            <FaFacebookF className="link" />
            <FaSquareXTwitter className="link" />
            <FaLinkedinIn className="link" />
            <FaInstagram className="link" />
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#" className="link">
                Dental Care
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Cosmetic Dentistry
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Dental Implants
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Teeth Whitening
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p>
            <FaPhoneAlt /> +1 809 120 6705
          </p>
          <p>
            <FaEnvelope /> info@domain.com
          </p>
          <p>
            <FaMapMarkerAlt /> 843, Apple LanePeoria
          </p>
        </div>
      </div>
      <hr />
      <p className="copyright" style={{ textAlign: "center" }}>
        © Primecare 2024 All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
