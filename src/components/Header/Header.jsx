import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'components/hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppBar } from './Header.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
      <AppBar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>
  );
};