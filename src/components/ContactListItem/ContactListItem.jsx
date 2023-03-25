import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { Wrapper, Button, Text } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Wrapper>
      <Text>
        {name}
        {': '}
        <span>
          <a href={'tel:' + number}>{number}</a>
        </span>
      </Text>
      <Button
        id={id}
        onClick={handleDeleteContact}
        title="Delete contact"
        type="button"
      >
        <AiFillDelete />
      </Button>
    </Wrapper>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
