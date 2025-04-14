import React from 'react';
import '../../App.css';
import toothicon from '../../icons/tooth-icon.png';


const CosmeticDentistryCard = () => {
  return (
    <div className="card">
      <img src={toothicon} alt="Cosmetic Icon" />
      <h3 >Cosmetic Dentistry</h3>
      <p>We are excited to meet you and provide the best dental care.</p>
      <a href="#">Learn More →</a>
            
   
    </div>
  );
};

export default CosmeticDentistryCard;