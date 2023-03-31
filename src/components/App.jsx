
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";

import { Filter } from "./Phonebook/Filter/Filter";
import {PhoneForm} from "./Phonebook/PhoneForm";
import { PhoneList } from "./Phonebook/PhoneList/PhoneList";
import {Phonebook, Contacts} from './App.style'

import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';


export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Layout>
<Phonebook>Phonebook</Phonebook>
<PhoneForm />

<Contacts>Contacts</Contacts>
<Filter  />
{contacts.length > 0 ? 'Contacts' : 'No contacts'}
<PhoneList/>

      <GlobalStyle/>
    </Layout>
  );
  };

