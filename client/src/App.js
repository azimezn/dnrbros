import './App.css';
import React, { useState } from 'react';
import { Header, Footer, Home, Community, Renovation, Showroom, Cabinets, Countertops, LVP, Tile, Hardware, SALE, Blog, Financing, Contact } from './component';

function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* {currentPage === "Home" && <Home />}
      {currentPage === "Community" && <Community />}
      {currentPage === "Renovation" && <Renovation />}
      {currentPage === "Showroom" && <Showroom />}
      {currentPage === "Cabinets" && <Cabinets />}
      {currentPage === "Countertops" && <Countertops />}
      {currentPage === "LVP" && <LVP />}
      {currentPage === "Tile" && <Tile />}
      {currentPage === "Hardware" && <Hardware />}
      {currentPage === "SALE" && <SALE />}
      {currentPage === "Blog" && <Blog />}
      {currentPage === "Financing" && <Financing />}
      {currentPage === "Contact" && <Contact />}
      <br></br>
      <Footer /> */}
    </>
  );
}

export default App;
