import { Form } from './form/Form';
import { ContactList } from './contactsList/ContactList';
import { ContactsFilter } from './filter/ContactsFilter';
export const Layout = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactList />
    </>
  );
};
