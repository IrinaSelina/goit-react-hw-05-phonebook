import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formActions from "../../redux/form/form-actions";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <li className="contact-item" key={id}>
        <span className="contact-data-name">{name}:</span>
        <span className="contact-data-number">{number}</span>

        <button
          className="delete__btn"
          onClick={() => onDelete(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;

  return {
    contacts: state.contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(formActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
