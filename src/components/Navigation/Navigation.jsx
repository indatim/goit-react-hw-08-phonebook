// import { NavLink } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';
import { FaHome } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';
import { Menu, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Menu>
      <nav>
        <Link to="/">
          <FaHome
            style={{ color: 'white', fontSize: '30', marginRight: '5' }}
          />{' '}
          Home
        </Link>
        {isLoggedIn && (
          <Link to="/contacts">
            <AiFillContacts
              style={{ color: 'white', fontSize: '30', marginRight: '5' }}
            />
            Contacts
          </Link>
        )}
      </nav>
    </Menu>
  );
};