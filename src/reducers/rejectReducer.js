import { TOGGLE_REJECT } from "../actions/index";

const rejectValue = {
  reject: false,
};

// toggleReject
export const toggleReject = (state = rejectValue, action) => {
  switch (action.type) {
    case TOGGLE_REJECT:
      return {
        ...state,
        reject: !state.reject,
      };
    default:
      return state;
  }
};
