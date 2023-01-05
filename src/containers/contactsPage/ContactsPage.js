import React, {useEffect, useState} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm.js";
import {TileList} from "../../components/tileList/TileList.js";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [isDuplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(()=> {
    if(!contacts){
      return;
    }
    let names = [];
    contacts.forEach(contact => names.push(contact.name));
    setDuplicate(names.includes(name));
   }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts} />
      </section>
    </div>
  );
};
