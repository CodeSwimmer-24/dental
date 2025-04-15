import React from 'react';
import '../../App.css';
import toothicon from '../../icons/tooth-icon.png';

const DentalCareCard = () => {

  return (
    <div className="card">
         <img src={toothicon} alt="Cosmetic Icon" />
         <h3 >Dental Care</h3>
         <p>We are excited to meet you and provide the best dental care.</p>
         <a href="#">Learn More →</a>
               </div>
  );
};

export default DentalCareCard;