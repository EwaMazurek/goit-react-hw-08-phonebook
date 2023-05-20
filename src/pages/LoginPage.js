import { LoginForm } from 'components/login/LoginForm';
import { NavLink } from 'react-router-dom';
export const Login = () => {
  return (
    <div>
      <title>Login</title>
      <LoginForm />
      <div className="span-container">
        <span>If you don't have an account</span>
        <NavLink
          className="home-button"
          to="/goit-react-hw-08-phonebook/register"
        >
          REGISTER
        </NavLink>
      </div>
    </div>
  );
};
