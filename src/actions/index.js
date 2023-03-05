export const TOGGLE_REJECT = "TOGGLE_REJECT";
export const TOGGLE_PAPER = "TOGGLE_PAPER";
export const ADD_TO_DO = "ADD_TO_DO";

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

export const addToDo = (area, value, tool) => {
  return {
    type: ADD_TO_DO,
    payload: {
      id: new Date(),
      room: area,
      during: value,
      checked: false,
      clean: tool,
    },
  };
};
