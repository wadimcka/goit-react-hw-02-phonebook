import React from 'react';

function ContactList({ contacts, handlerDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} : {number}
          <button
            type="button"
            onClick={() => handlerDeleteContact(id)}
          ></button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
