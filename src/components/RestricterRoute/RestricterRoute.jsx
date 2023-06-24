import { useAuth } from 'components/hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestricterRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
