import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { SignRegBlock, Link } from './Register.styled';
import { FcLock } from 'react-icons/fc';

const Register = () => {
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
          <FcLock style={{ color: 'white', fontSize: '40' }} />
          <Typography component="h1" variant="h4">
            Sign in to PhoneBook
          </Typography>
          <Typography component="h6" variant="body1">
            Register or login to start create your Phonebook today.
          </Typography>
          <RegisterForm />
          <SignRegBlock>
            Already registered?<Link to="/login">Sign in</Link>
          </SignRegBlock>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
