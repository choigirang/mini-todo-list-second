import { ADD_TO_DO, TOGGLE_CHECK } from "../actions/index";

export const TodoList = {
  todos: [
    {
      id: new Date(),
      room: "작은 방",
      during: 5,
      checked: false,
      clean: "청소기 돌리기",
    },
  ],
};

export const todoReducer = (state = TodoList, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      });

    case TOGGLE_CHECK:
      let idx = state.todos.findIndex((el) => el.id === action.payload);
      state.todos[idx].checked = !state.todos[idx].checked; //위에다가 빼내서
      //TODO
      return Object.assign({}, state, {
        todos: [
          // ...state.todos.slice(0, idx),
          // ...state.todos.slice(idx + 1),
          ...state.todos,
        ],
      });

    default:
      return state;
  }
};
