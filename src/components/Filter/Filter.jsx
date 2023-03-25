import { useDispatch, useSelector } from 'react-redux';

import { Input } from './Filter.styled';
import { setFilterValue } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

function Filter() {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setFilterValue(value));
  };

  return (
    <Input
      type="text"
      name="filter"
      value={filterValue}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      placeholder="Search"
      onChange={handleChange}
    />
  );
}

export default Filter;
