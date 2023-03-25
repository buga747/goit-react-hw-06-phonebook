import { List, ListWrapper } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ListWrapper>
      <List>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactListItem id={id} name={name} number={number} />
          </li>
        ))}
      </List>
    </ListWrapper>
  );
};

export default ContactList;
