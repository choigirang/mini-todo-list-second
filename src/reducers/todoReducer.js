import { ADD_TO_DO } from "../actions/index";

const num = 1;

export const TodoList = {
  todos: [
    {
      id: new Date(),
      room: "작은 방",
      during: "5분",
      checked: false,
      clean: "청소기",
    },
  ],
};

export const todoReducer = (state = TodoList, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      });

    default:
      return state;
  }
};
