import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { Wrapper, Button, Text } from './Contact.styled';


const Contact = ({id, name, number, deleteUser}) => {
    return <Wrapper>
            <Text>{name}: <span><a href={"tel:" + number}>{number}</a></span></Text>
            <Button id={id}
            onClick={() => { deleteUser(id) }}
            title="Delete contact"
            type="button">
            <AiFillDelete />
        </Button>
    </Wrapper>
    
}

export default Contact

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired,
}

