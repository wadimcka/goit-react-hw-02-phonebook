import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerFormInputChange = event => {
    const { name, number, value } = event.target;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [name]: value });
    this.setState({ [number]: value });
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label htmlFor={this.props.nameId}> Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handlerFormInputChange}
          id={this.props.nameId}
        />
        <label htmlFor={this.props.telID}> Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handlerFormInputChange}
          id={this.props.telID}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
