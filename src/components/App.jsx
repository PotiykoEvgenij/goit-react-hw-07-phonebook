import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactsFilter } from "./ContactFilter/ContactFilter";
import { addContact, deleteContact, fetchContacts } from "redux/ContactSlice";
// import { selectContacts, selectFilteredName } from "../redux/selectors";
// import { setFilter } from "../redux/Contacts/filterSlice";
import { getFilteredContacts } from "../redux/selectors";

export const App = () => {  
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  // const filter = useSelector(selectFilteredName);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = async (contact) => {
    try {
      await dispatch(addContact(contact));
    } catch (error) {
      console.log("Error adding contact:", error);
    }
  };

  const handleDeleteContact = async (contactId) => {
    try {
      await dispatch(deleteContact(contactId));
    } catch (error) {
      console.log("Error deleting contact:", error);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <ContactsFilter />
      {contacts.length > 0 ? (
        <ContactList handleDeleteContact={handleDeleteContact} />
      ) : (
          <p>There are no contacts in your phonebook.</p>
      )}
    </div>
  );
};
