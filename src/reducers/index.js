import { combineReducers } from "redux";
import { toggleReject } from "./rejectReducer";
import { togglePaper } from "./paperReducer";
import { todoReducer } from "./todoReducer";

// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
const rootReducer = combineReducers({
  toggleReject,
  togglePaper,
  todoReducer,
});
// 합칠 때 카테고리별로 분류가 되는데,
// setReject라는 이름으로 합친 거임
// store.setReject.reject

export default rootReducer;
