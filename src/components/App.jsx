import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useMemo } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import s from "./App.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([
      { id: "id-1", name: "Denzel Hayes Washington Jr", number: "459-12-56" },
      { id: "id-2", name: "Julia Roberts", number: "443-89-12" },
      { id: "id-3", name: "Jennifer Aniston", number: "645-17-79" },
      { id: "id-4", name: "Robert De Niro", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState('');
  const localStorageKeyName = 'contacts';

  useEffect(() => {
    const parsed = JSON.parse(
      localStorage.getItem(localStorageKeyName),
    );
    setContacts(parsed);
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKeyName, JSON.stringify(contacts));
  }, [contacts]);

  const change = event => {
    setFilter(event.currentTarget.value);
  };

  const formSubmit = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: uuidv4(),
    };

    setContacts(prevState => {
      const double = prevState.find(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase()),
      );

      if (double && double.name.length === name.length) {
        toast.error(`${name} is already in contacts`);
        return [...prevState];
      } else {
        setContacts([newContact, ...prevState]);
      }
    });
  };
  
  const deleteContact = (contactId) => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };
  
  const filtered = useMemo(() => {
    const toLower = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLower),
    );
  }, [filter, contacts]);

    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm submitProp={formSubmit} />
        <h2 className={s.title}>Contacts</h2>
        <Filter change={change} value={filter} />
        <ContactList
          getContact={filtered}
          deleteContact={deleteContact}
        />
        <ToastContainer />
      </div>
    );
  }


export default App;
