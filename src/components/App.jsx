import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

function App() {
  // state
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [contactsFilter, setContactsFilter] = useState('');

  // add contact
  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(6), name, number };
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    setContactsFilter(value);
  };

  const getContacts = () => {
    const normalizedFilter = contactsFilter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(({ id }) => id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <ContactList contacts={getContacts()} deleteUser={deleteContact} />
    </Container>
  );
}

export default App;
