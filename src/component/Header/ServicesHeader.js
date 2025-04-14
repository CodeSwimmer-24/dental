import React from 'react';

const ServicesHeader = () => {
  return (
    <div className='serhead' >
      <h1 className='serfont'>Services</h1>
      <p>
        <a className='serlink' href='#'>Home</a> <span style={{ margin: '0 0.5rem' }}>/</span> <span>Services</span>
      </p>
    </div>
  );
};

export default ServicesHeader;
