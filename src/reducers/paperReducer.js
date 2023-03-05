import { TOGGLE_PAPER } from "../actions/index";

const paperValue = {
  paper: false,
};

export const togglePaper = (state = paperValue, action) => {
  switch (action.type) {
    case TOGGLE_PAPER:
      return {
        ...state,
        paper: !state.paper,
      };
    default:
      return state;
  }
};
