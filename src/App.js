import React from "react";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import formActions from "./redux/form/form-actions";
import Section from "./Components/Section";
import Form from "./Components/Form";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";

class App extends Component {
  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (JSON.parse(localStorage.getItem("contacts"))) {
  //     this.setState({
  //       contacts: contacts,
  //     });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  render() {
    return (
      <Section>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (filter) => dispatch(formActions.addFilter(filter)),
});

export default connect(null, mapDispatchToProps)(App);
