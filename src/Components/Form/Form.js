import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      numGuests: ''
    }
  }

  createReservation(event) {
    event.preventDefault();
    const newReservation = {
      id: Date.now,
      ...this.state
    }
    this.props.addReservation(newReservation);
    this.setState({name: '', date: '', time: '', numGuests: ''});
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Number of Guests"
          name="numGuests"
          value={this.state.numGuests}
          onChange={(event) => this.handleChange(event)}
        />
        <button id="makeReservationBtn" onClick={(event) => this.createReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
