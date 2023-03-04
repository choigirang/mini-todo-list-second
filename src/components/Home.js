import React, { useState } from "react";
import styled from "styled-components";

let nextId = 4;

export default function Home() {
  const [alter, setAlter] = useState(true);
  const [write, setWrite] = useState(false);

  const alterOn = () => {
    setAlter(!alter);
  };

  return (
    <Container>
      <Template></Template>
      <AlterBox>
        <Pen src="./pen.png"></Pen>
        {!alter ? (
          <StopImg src="./againBtn.png" onClick={alterOn} alter></StopImg>
        ) : (
          <StopImg src="./stopBtn.png" onClick={alterOn}></StopImg>
        )}
      </AlterBox>
      {!alter ? (
        <Alter>
          <span>진실의 방</span>
          <DoorImg src="./door.png"></DoorImg>
        </Alter>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Template = styled.div`
  position: relative;
  width: 60rem;
  height: 40rem;
  background-color: #dddddd;
  box-shadow: 0rem 0rem 2rem 0rem #4c4c4c;

  &::before {
    background: linear-gradient(
        -45deg,
        #dddddd 16px,
        red 16px,
        blue 16px,
        transparent 0
      ),
      linear-gradient(45deg, #dddddd 16px, transparent 0);
    background-position: left top;
    background-repeat: repeat-x;
    background-size: 22px 32px;
    content: " ";
    display: block;

    height: 32px;
    width: 100%;

    position: relative;
    top: -32px;
    left: 0;
  }

  &::after {
    background: linear-gradient(-45deg, transparent 16px, #dddddd 0),
      linear-gradient(45deg, transparent 16px, #dddddd 0);
    background-repeat: repeat-x;
    background-position: left bottom;
    background-size: 22px 32px;
    content: "";
    display: block;

    width: 100%;
    height: 32px;

    position: relative;
    top: calc(40rem - 32px);
    left: 0px;
  }
`;

const AlterBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;
  right: 2rem;
  bottom: 2rem;
  cursor: pointer;
`;

const Pen = styled.img`
  width: 10rem;
  &:hover {
    transform: rotate(10deg);
  }
`;

const StopImg = styled.img`
  width: 10rem;
  cursor: pointer;
  &:hover {
    transform: rotate(10deg);
  }
`;

const Alter = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > span {
    margin-top: 4rem;
    color: white;
    font-size: 5rem;
    font-family: "Child";
    letter-spacing: 1rem;
  }
`;

const DoorImg = styled.img`
  scale: 0.7;
  animation: door 10s;

  @keyframes door {
    from {
      scale: 0;
    }
    to {
      scale: 0.7;
    }
  }
`;
