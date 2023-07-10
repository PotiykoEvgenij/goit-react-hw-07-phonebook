import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from 'Contacts/ContactSlice';
import { setFilter } from 'Contacts/filterSlice';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
});

export default reducer;