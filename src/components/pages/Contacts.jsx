import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/ContactFilter/ContactFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';


import { Container, PhonebookHeader, ContactsHeader } from '../App.styled';
import { Loader } from 'components/Loader/Loader';
import { FaPhoneSquareAlt, FaUser } from 'react-icons/fa';
import { selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookHeader>
        <FaPhoneSquareAlt style={{ marginRight: '5' }} /> Phonebook
      </PhonebookHeader>
      <ContactForm />
      <ContactsHeader>
        <FaUser style={{ marginRight: '5' }} /> Contacts
      </ContactsHeader>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>

    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xs">
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <h2>Contacts</h2>
    //       <ContactForm />
    //       <Filter />
    //       <ContactList />
    //     </Box>
    //   </Container>
    // </ThemeProvider>
  );
};

export default Contacts;
