import {
  Box, Container,
  ThemeProvider,
  createTheme, Typography
} from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { SignRegBlock, Link } from './Login.styled';
import ParticlesBg from 'particles-bg';
import { FcPrivacy } from 'react-icons/fc';

const Login = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ParticlesBg type="color" num={1} bg={true} />
          <FcPrivacy style={{ color: 'white', fontSize: '40' }} />
          <Typography component="h1" variant="h4">
            Log in
          </Typography>
          <LoginForm />
          <SignRegBlock>
            Don't have an account? <Link to="/register">Sign up</Link>
          </SignRegBlock>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
