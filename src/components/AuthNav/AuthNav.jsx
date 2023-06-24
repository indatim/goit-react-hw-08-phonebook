import { Menu, Link } from './AuthNav.styled';
import '@fontsource/roboto/400.css';
import { ImEnter, ImCheckboxChecked } from 'react-icons/im';

export const AuthNav = () => {

  return (
    <Menu>
      <nav>
        <Link to="/register">
          <ImCheckboxChecked style={{ color: 'white', fontSize: '30' }} />
          Sign In
        </Link>
        <Link to="/login">
          <ImEnter style={{ color: 'white', fontSize: '30' }} />
          Log In
        </Link>
      </nav>
    </Menu>
  );
};