import { ADD_CLEAN } from "../actions/index.js";

export const CleanList = {
  percent: [
    {
      room: "내방",
      clean: 0, //10
    },
    {
      room: "누나방",
      clean: 0,
    },
    {
      room: "엄마방",
      clean: 0,
    },
    {
      room: "아빠방",
      clean: 0,
    },
    {
      room: "거실",
      clean: 0,
    },
  ],
};

export const doClean = (state = CleanList, action) => {
  switch (action.type) {
    case ADD_CLEAN:
      let idx = state.percent.findIndex((el) => el.room === action.payload);
      //   console.log(state.percent[idx]);
      if (state.percent[idx].clean !== 100) state.percent[idx].clean += 10;
      return Object.assign({}, state, {
        percent: [...state.percent],
      });

    default:
      return state;
  }
};
