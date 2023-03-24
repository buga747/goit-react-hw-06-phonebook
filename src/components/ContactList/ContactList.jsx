import PropTypes from 'prop-types';
import { List, ListWrapper } from './ContactList.styled';
import Contact from 'components/Contact';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListWrapper>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
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
