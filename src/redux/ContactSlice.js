import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ContactsApi from "./ContactsApi";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async () => {
        const contacts = await ContactsApi.fetchContacts();
        return contacts;
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact) => {
        const newContact = await ContactsApi.addContact(contact);
        return newContact;
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId) => {
        await ContactsApi.deleteContact(contactId);
        return contactId;
    }
);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (contact) => contact.id !== action.payload
                );
            });
    },
});

export const contactsReducer = contactsSlice.reducer;