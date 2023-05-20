import { NavLink } from 'react-router-dom';
import './home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        <span className="home-subtitle">Welcome to</span> My Phonebook App
      </h1>
      <div className="home-buttons">
        <NavLink className="home-button" to="/goit-react-hw-08-phonebook/login">
          LOG IN
        </NavLink>{' '}
        <span className="home-button-separator">or</span>{' '}
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
