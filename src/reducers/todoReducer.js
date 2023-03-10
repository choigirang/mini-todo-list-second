import { ADD_TO_DO, TOGGLE_CHECK, DELETE_TO_DO } from "../actions/index";
import { CleanList } from "./cleanReducer";

let cleanPercent = CleanList.percent;

export const TodoList = {
  todos: [
    {
      id: new Date(),
      room: "내방",
      during: 5,
      checked: false,
      clean: "청소기 돌리기",
      // img: url을 받아와서 랜덤으로 생성 ,
    },
  ],
};

export const todoReducer = (state = TodoList, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      if (state.todos.length >= 9) return state;
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

    case DELETE_TO_DO:
      return Object.assign({}, state, {
        todos: [...state.todos.filter((el) => el.id !== action.payload)],
      });

    default:
      return state;
  }
};
