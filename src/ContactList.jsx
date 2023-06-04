import React, { useState } from 'react';
import './App.css';

function ContactList() {
  const [contacts, setContacts] = useState([
    { name: 'Avi', number: '9938493756' },
    { name: 'Aviva', number: '9874385674' },
    { name: 'John', number: '8943784939' },
    { name: 'Avi', number: '9234567890' },
    { name: 'Avni', number: '9876543210' },
    { name: 'Bishna', number: '9876544567' },
    { name: 'Bob', number: '9897969594' },
    { name: 'kimsu', number: '9874537628' },
    { name: 'kimu', number: '9856477698' },
    { name: 'radha', number: '9467893798' },
    { name: 'sumu', number: '9274945658' },
    { name: 'sumani', number: '9397583980' },
    { name: 'zack', number: '9456567657' },
  ]);

  //
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

//add contact
const [newName, setNewName] = useState('');
const [newNumber, setNewNumber] = useState('');

  // Function to   contact selection
  const  ContactClick = (contact) => {
    setSelectedContact(contact);
  };

  // Function to   search input change
  const  SearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //adding name and number
  const  AddContact = () => {
    const newContact = { name: newName, number: newNumber };
    setContacts([...contacts, newContact]);
    setNewName('');
    setNewNumber('');
  };

  return (
    <div className='Contact'>
      <input
        type="text"
        value={searchQuery}
        onChange={ SearchChange}
        placeholder="Search contacts"
      />
<h2>My Contact List</h2>
      <input
        type="text"
        placeholder="Name"
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Number"
        value={newNumber}
        onChange={(event) => setNewNumber(event.target.value)}
      />
      <button onClick={ AddContact}>Add Contact</button>

        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((contact, index) => (
            <li key={index} onClick={() =>  ContactClick(contact)}>
              {contact.name} - {contact.number}
            </li>
          ))}

      {selectedContact && (
        <div className="popup">
          <h3>{selectedContact.name}</h3>
          <p>{selectedContact.number}</p>
          <button onClick={() => setSelectedContact(null)}>Close</button>
        </div>
      )}
    </div>
  );
}
export default ContactList;