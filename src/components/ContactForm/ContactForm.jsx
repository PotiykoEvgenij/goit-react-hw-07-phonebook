import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'

export const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
      if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and number');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    
    addContact(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.formLabel}>
        <span className={styles.formTittle}>Name</span>
      <input
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className={styles.formLabel}>
        <span className={styles.formTittle}>Number</span>
        <input
        type="tel"
        name="number"
        placeholder="Number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        />
        </label>
      <button type="submit" className={styles.formButton}>Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};