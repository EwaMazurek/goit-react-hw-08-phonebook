import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    if (contacts.some(contact => contact.name === name)) {
      window.alert(`${name} is already on the list`);
    } else dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Phone number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
