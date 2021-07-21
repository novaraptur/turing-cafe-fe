import React, { Component } from 'react';
import './App.css';

import { fetchReservationData } from '../../api-calls/api-calls';

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

  loadReservationCards() {
    this.state.reservations.forEach((reservation) => {
      return <Reservation reservation={reservation} />
    })
  }

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <section className='resy-form'>

        </section>
        <section className='resy-container'>
          {this.loadReservationCards()}
        </section>
      </main>
    )
  }
}

export default App;
