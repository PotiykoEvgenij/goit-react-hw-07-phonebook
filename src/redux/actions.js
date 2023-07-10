import { createAction } from "@reduxjs/toolkit";

// export const addContact = (contact) => ({
//   type: 'contacts/addContact',
//   payload: contact,
// });

// export const deleteContact = (id) => ({
//   type: 'contacts/deleteContact',
//   payload: id,
// });

// export const setFilter = (filter) => ({
//   type: 'filter/setFilter',
//   payload: filter,
// });
export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');

export default { addContact, deleteContact, setFilter };