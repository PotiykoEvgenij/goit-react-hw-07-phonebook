import axios from 'axios';

const API_BASE_URL = 'https://64ac24799edb4181202f2b34.mockapi.io/contacts';

export const fetchContacts = async () => {
    const response = await axios.get(`${API_BASE_URL}/contacts`);
    return response.data;
};

export const addContact = async (contact) => {
    const response = await axios.post(`${API_BASE_URL}/contacts`, contact);
    return response.data;
};

export const deleteContact = async (contactId) => {
    await axios.delete(`${API_BASE_URL}/contacts/${contactId}`);
};