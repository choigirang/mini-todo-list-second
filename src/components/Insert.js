import React from "react";
import styled from "styled-components";
import { addToDo, togglePaper } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { todoReducer } from "../reducers/todoReducer";

const Insert = () => {
  const dispatch = useDispatch();
  const paper = useSelector((state) => state.togglePaper.paper);

  const handleTodo = (e) => {
    e.preventDefault();
    dispatch(addToDo(e.target.room.value, e.target.tool.value));
    dispatch(togglePaper(!paper));
  };

  return (
    <Container>
      <InputBox>
        <div>나에 청소 수첩</div>
        {/* 이벤트 prevent / submit말고 클릭 시 form이 전달 */}
        {/* form은 서버에 요청을 주로 쓴다. */}
        <form onSubmit={handleTodo}>
          {/* onChange로 접근하자 */}
          <div className="selectBox">
            <span>어디를 청소하지?</span>
            <select name="room" className="roomSelect">
              <option value="화장실">화장실</option>
              <option value="부엌">부엌</option>
              <option value="작은 방">작은 방</option>
              <option value="안방">안방</option>
              <option value="베란다">베란다</option>
              <option value="거실">거실</option>
            </select>
          </div>
          <div className="selectBox">
            <span>멀로 청소하지?</span>
            <select name="tool" className="toolSelect">
              <option value="청소기 돌리기">청소기 (5분)</option>
              <option value="걸레질 하기">걸레 (10분)</option>
              <option value="빗자루질 하기">빗자루 (3분)</option>
              <option value="몰래 안하기">몰래 안하기</option>
            </select>
          </div>
          <input type="submit" />
        </form>
      </InputBox>
      <PaperImg src="./paper.png"></PaperImg>
    </Container>
  );
};

export default Insert;

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  font-family: "Child" !important;
  position: absolute;
  top: 25%;
  font-size: 3rem;

  > div {
    text-align: center;
    margin-bottom: 2rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    > .selectBox {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: solid 1px black;
      padding-bottom: 1rem;

      > select {
        text-align: center;
        font-size: 1rem;
        width: 10rem;
        height: 2.5rem;
        font-family: "Child" !important;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border: none;
        border: dotted 1px black;
        background: none;
        margin-left: 2rem;
      }

      > select:focus {
        border-color: #aaa;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        color: #222;
        outline: none;
      }
    }
  }
`;

const PaperImg = styled.img`
  height: 80%;
  cursor: default !important;
`;
