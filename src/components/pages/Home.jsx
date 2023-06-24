import { Box, Typography } from '@mui/material';
import ParticlesBg from 'particles-bg';
import { FcContacts } from 'react-icons/fc';

const Home = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ParticlesBg type="square" bg={true} />
      <FcContacts style={{ fontSize: '86' }} />
      <Typography
        component="h1"
        variant="h5"
        sx={{ mb: 3, fontWeight: 'bold' }}
      >
        PhoneBook App
      </Typography>
      <Typography
        component="p"
        variant="h6"
        sx={{
          p: 1,
          fontWeight: 'light',
          fontStyle: 'italic',
          textAlign: 'center',
        }}
      >
        Phonebook App is a simple and handy phone book.
      </Typography>
      <Typography
        component="p"
        variant="h6"
        sx={{
          p: 1,
          fontWeight: 'light',
          fontStyle: 'italic',
          textAlign: 'center',
        }}
      >
        Access your contacts from any device.
      </Typography>
    </Box>
  );
};

export default Home;
