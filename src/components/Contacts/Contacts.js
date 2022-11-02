import "./Contacts.css";
import React from "react";
import PropTypes from "prop-types";

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className="contactList">
    {contacts.map(({ name, id, number }) => (
      <li className="contactListItem" key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
