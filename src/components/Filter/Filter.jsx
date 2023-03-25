import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

import { Input } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <Input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      placeholder="Search"
      onChange={onChange}
    />
  );
}

export default Filter;
