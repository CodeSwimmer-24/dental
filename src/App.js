
import React from 'react';
import './App.css'; 
import ContactHeader from './components/ContactHeader';  
import ContactPage from './components/ContactPage'; 

function App() {
  console.log("Hello from the contacts branch!");

  return (
    <div className="App">
      <ContactHeader />
      <ContactPage />
    </div>
  );
}

export default App;
