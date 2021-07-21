import React from 'react';
import './Reservation.css';

const Reservation = ({reservation}) => {
  return (
    <article className="resy-card" id={reservation.id}>
      <h2>{reservation.name}</h2>
      <p>{reservation.time} on {reservation.date}</p>
      <p>Number {reservation.number}</p>
    </article>
  )
}

export default Reservation;
