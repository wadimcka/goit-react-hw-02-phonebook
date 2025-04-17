import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section, ContactList, FilterContact, ContactForm } from 'components';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const existingContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  handlerContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <ContactForm
            addContact={this.addContact}
            onInputChange={this.onInputChange}
          />
        </Section>

        <Section title="Contacts">
          <FilterContact
            filter={this.state.filter}
            onFilterChange={this.onFilterChange}
          />
          <ContactList
            contacts={visibleContacts}
            handlerContactDelete={this.handlerContactDelete}
          />
        </Section>
      </div>
    );
  }
}
