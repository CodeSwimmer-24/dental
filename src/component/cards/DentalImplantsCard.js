import React from 'react';
import '../../App.css';
import toothicon from '../../icons/tooth-icon.png';


const DentalImplantsCard = () => {
  return (
    <div className="card">
      <img src={toothicon} alt="Implants Icon" />
      <h3>Dental Implants</h3>
      <p>We are excited to meet you and provide the best dental care.</p>
      <a href="#">Learn More →</a>
    </div>
  );
};

export default DentalImplantsCard;