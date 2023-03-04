import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";

import { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <FamilyImg src="./family.png" />
      <House src="./house.png"></House>
    </div>
  );
}

export default App;

const FamilyImg = styled.img`
  position: absolute;
  left: 2rem;
  bottom: 4rem;
  width: 40rem;
  z-index: -1;
`;

const House = styled.img`
  position: absolute;
  right: 2rem;
  top: 7rem;
  width: 40rem;
  z-index: -1;
`;
