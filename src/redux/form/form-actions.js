// import types from "./foorm-type";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

// const addContact = (name, number) => ({
//   type: types.ADD_CONTACT,
//   payload: { id: uuidv4(), name, number },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE_CONTACT,
//   payload: contactId,
// });
const addContact = createAction("contact/Add", (name, number) => {
  return {
    payload: { id: uuidv4(), name, number },
  };
});
const deleteContact = createAction("contacts/Delete");
const addFilter = createAction("contacts/Filter");
// const addFilter = (value) => ({
//   type: types.ADD_FILTER,
//   payload: value,
// });
export default { addContact, deleteContact, addFilter };
