import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./form-actions";
const items = createReducer([], {
  [actions.addContact]: (state, { payload }) =>
    state.some(
      (someContact) =>
        someContact.name.toLocaleLowerCase() ===
        payload.name.toLocaleLowerCase()
    )
      ? (alert(`${payload.name} is already in contacts`), state)
      : [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.addFilter]: (state, { payload }) => payload,
});
export default combineReducers({
  items,
  filter,
});
