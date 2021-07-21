import React, { Component } from 'react';
import './App.css';

import Reservation from '../Reservation/Reservation';

class App extends Component {
  loadReservationCards() {
    
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
