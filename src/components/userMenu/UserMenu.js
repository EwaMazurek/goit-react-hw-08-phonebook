import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import './UserMenu.css';
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="user-menu">
      <h2>My Phonebook App </h2>
      <div className="user-menu-logs">
        <p className="user-email">{user.email}</p>
        <button className="logout-button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    </div>
  );
};
