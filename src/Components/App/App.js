import React, { Component } from 'react';
import './App.css';

import { fetchReservationData } from '../../api-calls/api-calls';

import Form from '../Form/Form';
import Reservation from '../Reservation/Reservation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
      error: null
    }
  }

  componentDidMount() {
    fetchReservationData('reservations')
      .then((data) => this.setState({ reservations: data }))
      .catch((err) => this.setState({ error: err.message }))
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] });
  }

  loadReservationCards() {
    return this.state.reservations.map((reservation) => {
      console.log(reservation);
      return <Reservation reservation={reservation} />
    })
  }

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <section className='resy-form'>
          <Form addReservation={this.addReservation} reservations={this.state.reservations}/>
        </section>
        <section className='resy-container'>
          {this.loadReservationCards()}
        </section>
      </main>
    )
  }
}

export default App;
