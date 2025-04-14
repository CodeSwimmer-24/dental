import React from 'react';
import '../../App.css';
import toothicon from '../../icons/tooth-icon.png';

const DentalCareCard = () => {
  function showmore(){
    if(document.getElementById('btn').innerHTML==="Learn More"){
document.getElementById('show').classList.remove('hide');
document.getElementById('btn').innerHTML="Learn Less";
document.getElementById('more').classList.add('hide');
    }
    else{
      document.getElementById('show').classList.add('hide');

      document.getElementById('more').classList.remove('hide');

      document.getElementById('btn').innerHTML="Learn More";
    }
  }
  return (
    <div className="card">
      <img src={toothicon} alt="Dental Icon" />
      <h3>Dental Care</h3>
      <p>We are excited to meet you and provide the best dental care.<span id='more'>...</span>
        <span id='show' className='hide'>We are excited to meet you and provide the best dental care.</span></p>
      <button onClick={showmore} id='btn'>Learn More</button>
    </div>
  );
};

export default DentalCareCard;