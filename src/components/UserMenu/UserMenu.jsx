import { Menu, User, ContactNum, Link } from './UserMenuStyled';
import { useAuth } from 'components/hooks/useAuth';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { ImExit } from 'react-icons/im';
import { selectFilteredContacts } from '../../redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Menu>
      <User>
        <b>Hello,</b> {user.name}.
      </User>
      <ContactNum>
        You have <b>{contacts.length}</b> contacts.
      </ContactNum>
      <Link type="button" onClick={() => dispatch(logOut())} to="/">
        <ImExit style={{ color: 'white', fontSize: '30' }} />
        Logout
      </Link>
    </Menu>
  );
};
