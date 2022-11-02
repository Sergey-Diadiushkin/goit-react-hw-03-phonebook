import React, { Component } from "react";
import Container from "../Container/Container";
import shortid from "shortid";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  // contactId = shortid.generate()

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
      // id: shortid.generate(),
    });
  };

  reset = () => this.setState({ name: "", number: "" });

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <Container>
        <form className="ContactForm" onSubmit={this.handleSubmit}>
          <label>
            Name
            <br />
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Number
            <br />
            <input
              value={this.state.number}
              onChange={this.handleInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </form>
      </Container>
    );
  }
}

export default Form;

Form.propTypes = { onSubmit: PropTypes.func.isRequired };
