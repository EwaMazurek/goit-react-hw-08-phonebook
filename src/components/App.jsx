// import { Form } from './form/Form';
// import { ContactList } from './contactsList/ContactList';
// import { ContactsFilter } from './filter/ContactsFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Register } from 'pages/RegistrationPage';
import { Login } from 'pages/LoginPage';
import { refreshUser } from 'redux/auth/authOperations';
import { Phonebook } from 'pages/phonebook/Phonebook';
import { Home } from 'pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/goit-react-hw-08-phonebook/" element={<Home />} />
      <Route
        path="/goit-react-hw-08-phonebook/register"
        element={
          <RestrictedRoute
            redirectTo="/goit-react-hw-08-phonebook/contacts"
            component={<Register />}
          />
        }
      />
      <Route
        path="/goit-react-hw-08-phonebook/login"
        element={
          <RestrictedRoute
            redirectTo="/goit-react-hw-08-phonebook/contacts"
            component={<Login />}
          />
        }
      />
      <Route
        path="/goit-react-hw-08-phonebook/contacts"
        element={
          <PrivateRoute
            redirectTo="/goit-react-hw-08-phonebook/login"
            component={<Phonebook />}
          />
        }
      />
      <Route path="/goit-react-hw-08-phonebook/*" element={<Home />} />
    </Routes>
  );
};
