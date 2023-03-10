export const TOGGLE_REJECT = "TOGGLE_REJECT";
export const TOGGLE_PAPER = "TOGGLE_PAPER";
export const ADD_TO_DO = "ADD_TO_DO";
export const TOGGLE_CHECK = "TOGGLE_CHECK";
export const ADD_CLEAN = "ADD_CLEAN";
export const DELETE_TO_DO = "DELETE_TO_DO";

export const toggleReject = () => {
  return {
    type: TOGGLE_REJECT,
  };
};

export const togglePaper = () => {
  return {
    type: TOGGLE_PAPER,
  };
};

// 클릭한 순간 갯수를 가져와서 addtodo 로직에 들어가지 않게 하는 방법
// 마지막에 state를 가져와서 갯수에 제한을 둔다.
// state를 전역으로 관리로 한다.
// 전역 상태를 체크한다. 갯수를 초과하면 다른 액션을 실행을 시킨다.

export const addToDo = (room, tool) => {
  let time = 0;
  if (tool === "청소기 돌리기") time = 5;
  if (tool === "걸레질 하기") time = 10;
  if (tool === "빗자루질 하기") time = 3;
  // console.log(time);
  return {
    type: ADD_TO_DO,
    payload: {
      id: new Date(),
      room,
      during: time,
      checked: false,
      clean: tool,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TO_DO,
    payload: id,
  };
};

export const toggleCheck = (id) => {
  return {
    type: TOGGLE_CHECK,
    payload: id,
  };
};

export const checkClean = (room) => {
  return {
    type: ADD_CLEAN,
    payload: room,
  };
};
