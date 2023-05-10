import { Form } from './form/Form';
import { ContactList } from './contactsList/ContactList';
import { ContactsFilter } from './filter/ContactsFilter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactList />
    </div>
  );
};
