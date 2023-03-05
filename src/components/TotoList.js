import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoReducer } from "../reducers/todoReducer";
import styled from "styled-components";

const TotoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoReducer.todos);
  //   const { todos } = state;
  //   console.log(state);
  return (
    <Container>
      {state.map((item) => {
        return (
          <div key={item.id} className="todoBox">
            <div className="room">{item.room}</div>
          </div>
        );
      })}
    </Container>
  );
};

export default TotoList;

const Container = styled.div`
  width: 30%;
  height: 90%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1rem;

  > .todoBox {
    /* background-color: black; */
    width: 100%;
    height: 10%;
    box-sizing: border-box;
  }
`;
