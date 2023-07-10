import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactsFilter } from "./ContactFilter/ContactFilter";
import { addContact, deleteContact, fetchContacts } from "redux/Contacts/ContactSlice";
import { selectContacts, selectFilteredName } from "../redux/selectors";
import { setFilter } from "../redux/Contacts/filterSlice";

export const App = () => {  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredName);

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
      <ContactForm contacts={contacts} addContact={handleAddContact} />
      <h2>Contacts</h2>
      <ContactsFilter filter={filter} setFilter={setFilter}/>
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} handleDeleteContact={handleDeleteContact} />
      ) : (
          <p>There are no contacts in your phonebook.</p>
      )}
    </div>
  );
};
