import { RegisterForm } from 'components/registration/RegistrationForm';
import { NavLink } from 'react-router-dom';
export const Register = () => {
  return (
    <div>
      <title>Registration</title>
      <RegisterForm />
      <div className="span-container">
        <span>If you already have an account: </span>
        <NavLink className="home-button" to="/goit-react-hw-08-phonebook/login">
          LOG IN
        </NavLink>
      </div>
    </div>
  );
};
