import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Main() {
  const [reject, setReject] = useState(true);
  const alterMom = () => {
    setReject(!reject);
  };

  return (
    <Container>
      <div className="offer">기랑아~청소기 좀 돌릴래?</div>
      {!reject ? (
        <AlterBox>
          <ReBtn src="./againBtn.png" onClick={alterMom}></ReBtn>
          <ImgMom src="./alter.png"></ImgMom>
        </AlterBox>
      ) : null}
      <YesOrNot>
        <Link to="/Home">
          <YesBtn src="./okBtn.png"></YesBtn>
        </Link>
        <NoBtn onClick={alterMom} src="./noBtn.png"></NoBtn>
      </YesOrNot>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  > .offer {
    font-family: "Bing" !important;
    font-size: 5rem;
    margin-bottom: 1rem;
  }
`;

const YesOrNot = styled.div`
  display: flex;
  flex-direction: row;
`;

const YesBtn = styled.img`
  width: 10rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    transform: rotate(10deg);
  }
`;

const NoBtn = styled.img`
  width: 10rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    transform: rotate(10deg);
  }
`;

const AlterBox = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ImgMom = styled.img`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const ReBtn = styled.img`
  position: fixed;
  width: 15rem;
  bottom: 15%;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    transform: rotate(10deg);
  }
`;
