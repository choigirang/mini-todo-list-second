import React from "react";
import styled from "styled-components";
import { checkClean } from "../actions/index.js";
import { useDispatch, useSelector } from "react-redux";

const Structure = () => {
  const clean = useSelector((state) => state.doClean.percent);
  // console.log(clean);
  return (
    <Container>
      <div className="topBox">
        <div className="room momRoom">
          <div>
            <span className="title">
              엄마방
              <span className="cleanNum">({clean[2].clean}%)</span>
            </span>
          </div>
          {clean[2].clean === 100 ? (
            <img className="stamp" src="./images/stampMom.png" />
          ) : (
            <img src="./images/mom.png" alt="momFace"></img>
          )}
        </div>
        <div className="room dadRoom">
          <div>
            <span className="title">
              아빠방<span className="cleanNum">({clean[3].clean}%)</span>
            </span>
          </div>
          {clean[3].clean === 100 ? (
            <img className="stamp" src="./images/stampDad.png" />
          ) : (
            <img src="./images/dad.png" alt="dadFace"></img>
          )}
        </div>
        <div className="door">
          <span className="title">현관</span>
        </div>
      </div>
      <div className="bottomBox">
        <div className="leftBox">
          <div className="room myRoom">
            <div>
              <span className="title">
                내방 <span className="cleanNum">({clean[0].clean}%)</span>
              </span>
            </div>
            {clean[0].clean === 100 ? (
              <img className="stamp" src="./images/stampSon.png" />
            ) : (
              <img src="./images/son.png" alt="sonFace"></img>
            )}
          </div>
          <div className="room sisRoom">
            <div>
              <span className="title">
                누나방 <span className="cleanNum">({clean[1].clean}%)</span>
              </span>
            </div>
            {clean[1].clean === 100 ? (
              <img className="stamp" src="./images/stampSis.png" />
            ) : (
              <img src="./images/sister.png" alt="sisterFace"></img>
            )}
          </div>
        </div>
        <div className="livingBox">
          <div>
            <span className="title">
              거실<span className="cleanNum">({clean[4].clean}%)</span>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Structure;

const Container = styled.div`
  position: relative;
  border: solid 1px black;
  width: 50%;
  height: 90%;
  margin-right: 5%;
  background-color: #fff;
  box-sizing: border-box;

  > .topBox {
    width: 100%;
    height: 40%;
    display: flex;

    > .momRoom {
      width: 40%;
      height: 100%;
      border-bottom: dotted 1px gray;
      border-right: solid 2px black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > .title {
      }

      > img {
        width: 60%;
        cursor: pointer;

        &:hover {
          transform: rotate(-10deg);
        }
      }

      > .stamp {
        width: 80%;
      }
    }

    > .dadRoom {
      width: 40%;
      height: 100%;
      border-bottom: dotted 1px gray;
      border-right: solid 2px black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > img {
        width: 60%;
        cursor: pointer;

        &:hover {
          transform: rotate(10deg);
        }
      }

      > .stamp {
        width: 80%;
      }
    }

    > .door {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  > .bottomBox {
    width: 100%;
    height: 60%;
    padding-top: 10%;
    display: flex;

    > .leftBox {
      width: 40%;
      height: 100%;

      > .myRoom {
        width: 100%;
        height: 50%;
        border-top: solid 2px black;
        border-right: dotted 1px black;
        border-bottom: solid 1px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > img {
          width: 50%;
          cursor: pointer;

          &:hover {
            transform: rotate(-10deg);
          }
        }

        > .stamp {
          width: 80%;
        }
      }

      > .sisRoom {
        width: 100%;
        height: 50%;
        border-top: solid 1px black;
        border-right: dotted 1px black;
        padding: 0 !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > img {
          width: 50%;
          cursor: pointer;

          &:hover {
            transform: rotate(10deg);
          }
        }

        > .stamp {
          width: 80%;
        }
      }
    }

    > .livingBox {
      width: 60%;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
    }
  }
`;
