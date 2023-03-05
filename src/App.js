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
      <Face src="./sunFace.png" />
      <Sun src="./sun.png" />
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

const Sun = styled.img`
  position: absolute;
  width: 25rem;
  z-index: -2;
  top: 0rem;
  animation: roll 8s infinite ease-in;

  @keyframes roll {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
      scale: 0.5;
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Face = styled.img`
  position: absolute;
  left: 5rem;
  top: 4rem;
  width: 15rem;
  z-index: -1;
`;
