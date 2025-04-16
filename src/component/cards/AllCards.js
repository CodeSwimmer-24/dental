import React from 'react'
import DentalCareCard from './DentalCareCard'
import CosmeticDentistryCard from './CosmeticDentistryCard'
import DentalImplantsCard from './DentalImplantsCard'
import TeethWhiteningCard from './TeethWhiteningCard'
import '../../App.css';
function AllCards() {
  return (
    <>
     <div className="cards-container">
      <DentalCareCard/>
      <CosmeticDentistryCard />
      <DentalImplantsCard/>
      <TeethWhiteningCard/>
      <DentalCareCard/>
      <CosmeticDentistryCard />
      <DentalImplantsCard/>
      <TeethWhiteningCard/>
    </div>

    </>
  )
}

export default AllCards