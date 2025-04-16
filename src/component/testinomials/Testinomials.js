import React from 'react'
import '../../App.css';
import doctor from '../../icons/download.jpg'
import doctor2 from '../../icons/download.jpg'
import quote from '../../icons/quote.jpg';
function Testinomials() {
  return (
  <>
    <div className='Ending'>
      <h3> &#129463; Testimonials </h3>
      <h1> Listen from our happy patients</h1>
      <p> The goal of our clinic is to provide friendly, caring 
         dentistry and the higest level of general, cosmetic, and<br></br>
         specialist dental treatments. With dental practices 
         throunght the world </p>

         <div className='item'>

          <div className='item-box'>
            <img src={quote} alt="quote" className='quote'/>
          I want to say thank you to my doctor 
          steve! Vivamus sagittis messa vitae
          bibendum rhoncus . duis cursus 
          thank you for helping the overcome 
          my fear of the dentist! Vivamus sagittis
          messa vitae bibendum rhoncus
          <br></br>
          <img src={doctor} alt=" Jenny Wilson"/>
            <h4 className='name'> Dianne Russell </h4>
            <p> patient </p>
        </div>

        <div className='item-box'>
        <img src={quote} alt="quote" className='quote'/>
          I want to say thank you to my doctor 
          steve! Vivamus sagittis messa vitae
          bibendum rhoncus . duis cursus 
          thank you for helping the overcome 
          my fear of the dentist! Vivamus sagittis
          messa vitae bibendum rhoncus
          <br></br>
          <img src={doctor2} alt=" Jenny Wilson"/>
            <h4 className='name'> Jenny Wilson </h4>
            <p> patient </p>
        </div>

        <div className='item-box'>
        <img src={quote} alt="quote" className='quote'/>
          I want to say thank you to my doctor 
          steve! Vivamus sagittis messa vitae
          bibendum rhoncus . duis cursus 
          thank you for helping the overcome 
          my fear of the dentist! Vivamus sagittis
          messa vitae bibendum rhoncus
          <br></br>
          <img src={doctor} alt=" Jenny Wilson"/>
            <h4 className='name'> Jane Cooper </h4>
            <p> patient </p>
        </div>

        <div className='item-box'>
        <img src={quote} alt="quote" className='quote'/>
          I want to say thank you to my doctor 
          steve! Vivamus sagittis messa vitae
          bibendum rhoncus . duis cursus 
          thank you for helping the overcome 
          my fear of the dentist! Vivamus sagittis
          messa vitae bibendum rhoncus
          <br></br>
          <img src={doctor2} alt=" Jenny Wilson"/>
            <h4 className='name'> Artemisia Udi </h4>
            <p> patient </p>
        </div>


        <div className='item-box'>
        <img src={quote} alt="quote" className='quote'/>
          I want to say thank you to my doctor 
          steve! Vivamus sagittis messa vitae
          bibendum rhoncus . duis cursus 
          thank you for helping the overcome 
          my fear of the dentist! Vivamus sagittis
          messa vitae bibendum rhoncus
          <br></br>
          <img src={doctor} alt=" Jenny Wilson"/>
            <h4 className='name'> Dianne Russell </h4>
            <p> patient </p>
        </div>
     </div>
      </div>
    
  
  </>
  )
}

export default Testinomials;