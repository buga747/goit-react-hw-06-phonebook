import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
