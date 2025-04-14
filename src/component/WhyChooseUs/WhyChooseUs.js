import React from 'react'

function WhyChooseUs() {
  return (
   <>
    <section className="why-choose-us">
      <div className="left-column">
        <div className="feature">
          <i className="icon">🩺</i>
          <h4>Personalized Care For Patient</h4>
          <p>We understand that each patient is unique, and listen to concerns.</p>
        </div>
        <div className="feature">
          <i className="icon">⚙</i>
          <h4>Cutting Edge Technology</h4>
          <p>We invest in the latest dental technology to give you the best results.</p>
        </div>
        <div className="feature">
          <i className="icon">👨‍⚕</i>
          <h4>Family Friendly</h4>
          <p>No matter your age or situation, we are here to help.</p>
        </div>
      </div>

      <div className="right-column">
        <h2>Exceptional dental care tailored to your needs</h2>
        <p className="highlight">
          We take the time to understand your individual needs and goals, creating customized treatment plans to help you achieve optimal oral health.
        </p>
        <p>
          We believe that your dental experience should be more than just a routine visit. Our goal is to provide comprehensive, personalized care in a welcoming environment, where your comfort and well-being come first.
        </p>
        <div className="stats">
          <div>
            <h3>20+</h3>
            <p>Years Of Experience</p>
          </div>
          <div>
            <h3>5M+</h3>
            <p>Happy Patients</p>
          </div>
          <div>
            <h3>986+</h3>
            <p>Treatment Completed</p>
          </div>
        </div>
      </div>
    </section>

   </>
  )
}

export default WhyChooseUs;
