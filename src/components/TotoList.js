import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheck, checkClean, deleteTodo } from "../actions/index";
import styled from "styled-components";

const TotoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoReducer.todos);
  //   const { todos } = state;
  //   console.log(state);
  const handleCheck = (e) => {
    dispatch(toggleCheck(e));
  };

  const finishClean = (e) => {
    dispatch(checkClean(e));
  };

  const handleTodo = (e) => {
    dispatch(deleteTodo(e));
  };

  return (
    <Container>
      {state.map((item) => {
        return (
          <div key={item.id} className="todoBox">
            <div className="textBox">
              {!item.checked ? (
                <img
                  src={`./images/uncheckBox${Math.floor(
                    Math.random() * (4 - 0) + 1
                  )}.png`}
                  onClick={() => {
                    handleCheck(item.id);
                    finishClean(item.room);
                  }} // item id 바로 넘겨주기 payload
                ></img>
              ) : (
                <img
                  src={`./images/checkBox${Math.floor(
                    Math.random() * (4 - 0) + 1
                  )}.png`}
                ></img>
              )}
              <div className="room">{item.room}</div>
              <div className="clean">{item.clean}</div>
              <div className="clean">{item.during}분</div>
              <img
                src="./images/trash.png"
                onClick={() => handleTodo(item.id)}
              ></img>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default TotoList;

const Container = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0.7rem 0.2rem;
  padding-top: 6rem;

  background-image: url("./images/paper.png");
  background-size: 100% 100%;

  > .todoBox {
    width: 100%;
    height: 10%;
    box-sizing: border-box;
    position: relative;

    > .textBox {
      width: 70%;
      display: flex;
      justify-content: space-around;
      font-size: 1.5rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      > img {
        width: 2rem;
        cursor: pointer;
      }

      > .clean {
        font-size: 1.2rem;
        line-height: 1.8rem;
      }
    }

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
