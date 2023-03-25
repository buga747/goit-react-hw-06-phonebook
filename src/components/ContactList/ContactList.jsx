import PropTypes from 'prop-types';
import { List, ListWrapper } from './ContactList.styled';
import Contact from 'components/Contact';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filtersSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const onFilterChange = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListWrapper>
      <List>
        {onFilterChange().map(({ id, name, number }) => (
          <li key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              deleteUser={onDeleteContact}
            />
          </li>
        ))}
      </List>
    </ListWrapper>
  );
};

ContactList.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
