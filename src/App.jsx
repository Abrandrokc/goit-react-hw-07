
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import ContactForm from './components/ContactForm/ContactForm';
import { fetchContacts } from './redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectLoading } from './redux/contactsSlice';


function App() {
   
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
const isLoading= useSelector(selectLoading)
const isError= useSelector(selectError)
  return <div>
    
   
    <h1>Phonebook</h1>
    <ContactForm  />
    <SearchBox />
      {isLoading && <h1>Loading </h1>}
    <ContactList />
  
     {isError && <h1> Error. Try again</h1>}
  </div>
}

export default App
