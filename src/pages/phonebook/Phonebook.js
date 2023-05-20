import { UserMenu } from 'components/userMenu/UserMenu';
import { ContactList } from 'components/contactsList/ContactList';
import { Form } from 'components/form/Form';
import { ContactsFilter } from 'components/filter/ContactsFilter';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './phonebook.css';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <UserMenu />
      <div className="phonebook-container">
        <div className="contacts-form-container">
          <h1>Phonebook</h1>
          <Form />
        </div>
        <div className="contacts-container">
          <h2>Contacts</h2>
          <ContactsFilter />
          <ContactList />
        </div>
      </div>
    </>
  );
};
