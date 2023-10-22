import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameId = nanoid();
  telId = nanoid();

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === name))
      return alert(`${name} is already in contscts`);

    const addedContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [addedContact, ...prevState.contacts],
    }));
  };

  // Filter update
  handlerFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  handlerDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const notmalazedFilter = filter.toLocaleLowerCase().trim();
    const filteredContact = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(notmalazedFilter)
    );
    return (
      <>
        <Section title="Phonebook">
          <Form
            onFormSubmit={this.addContact}
            nameId={this.nameId}
            ntelIdameId={this.telId}
          />
        </Section>
        <Filter value={filter} onChange={this.handlerFilterChange} />
        <Section title="Contacts">
          <ContactList
            contacts={filteredContact}
            handlerDeleteContact={this.handlerDeleteContact}
          />
        </Section>
      </>
    );
  }
}
