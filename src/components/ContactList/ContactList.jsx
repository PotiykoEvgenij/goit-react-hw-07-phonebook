import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactSlice';
// import PropTypes from 'prop-types';
import { getFilteredContacts } from 'redux/selectors';
import styles from './ContactList.module.css';


export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  // const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // const filteredContacts = contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
    
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
          <li key={contact.id}>
          <span className={styles.contact}>{contact.name}: {contact.number}</span>
          <button onClick={() => handleDelete(contact.id)} className={styles.contactButton}>&#10060;</button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   handleDeleteContact: PropTypes.func.isRequired,
// };