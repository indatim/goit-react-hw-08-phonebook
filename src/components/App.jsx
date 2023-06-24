import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { RestricterRoute } from './RestricterRoute/RestricterRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Header } from './Header/Header';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Loader } from './Loader/Loader';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Contacts = lazy(() => import('./pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {isRefreshing ? <Loader/> : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestricterRoute component={Register} redirectTo="/contacts" />
              }
            ></Route>
            <Route
              path="login"
              element={
                <RestricterRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      )}
    </div>
  );
}