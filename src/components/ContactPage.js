
import React, { useState } from 'react';
import '../App.css'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle phone number separately
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, ''); // Remove non-numeric characters
      setFormData(prev => ({ ...prev, phone: onlyNumbers }));

      // Validate phone number length
      if (onlyNumbers.length !== 10) {
        setErrors(prev => ({ ...prev, phone: "Please enter a valid 10-digit phone number" }));
      } else {
        setErrors(prev => ({ ...prev, phone: "" }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
      return;
    } else {
      setErrors(prev => ({ ...prev, email: "" }));
    }

    // Validate Phone Number
    if (formData.phone.length !== 10) {
      setErrors(prev => ({ ...prev, phone: "Please enter a valid 10-digit phone number" }));
      return;
    }

    console.log('Form submitted:', formData);
    localStorage.setItem('contactForm', JSON.stringify(formData));
    alert("Message Sent!");

    // Clear form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="info-card">
          <i className="fas fa-phone-alt"></i>
          <div>
            <h4>Contact Details</h4>
            <p>+01-787-582-568</p>
          </div>
        </div>
        <div className="info-card">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Address</h4>
            <p>403, Port Washington Road, Canada</p>
          </div>
        </div>
        <div className="info-card">
          <i className="fas fa-envelope"></i>
          <div>
            <h4>Email Us</h4>
            <p>info@domain.com</p>
          </div>
        </div>
        <div className="social-icons">
          <p>Follow Us:</p>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="contact-form">
        <h5>Contact Us</h5>
        <h2>Reach out for questions</h2>
        <p>We take the time to understand your individual needs and goals...</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <div className="form-row">
            <div>
              <label>Your Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div>
              <label>Phone Number</label>
              <input 
                type="text" 
                name="phone" 
                placeholder="Enter Your Number" 
                maxLength={10} 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
          </div>

          <label>Message</label>
          <textarea 
            name="message" 
            placeholder="Write your message..." 
            rows={5} 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
