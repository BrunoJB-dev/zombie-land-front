//import type { Reservation } from "../../@types/reservation";
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import './ReservationCalendar.scss';

type ReservationCalendarProps = {
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  number: number;
  setNumber: (number: number) => void;
};

function ReservationCalendar({
  startDate,
  setStartDate,
  number,
  setNumber,
}: ReservationCalendarProps) {
  //recupérer le nombre de billets à réserver
  const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = Number.parseInt(event.target.value);
    setNumber(selectedNumber);
  };
  // récupérer la date choisie
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    console.log(date);
    if (date) {
      const formatedDate = date.toLocaleDateString('fr-CA');
      console.log(formatedDate)
    }
  };

  return (
    <div className="reservation-calendar">
      <h3>Choisissez vos entrées</h3>
      <div className="reservation-container">
        <div>
          <p>Choisissez votre date de visite</p>
          <DatePicker selected={startDate} onChange={handleDateChange} inline />
        </div>
        <div>
          <p> Choisissez le nombre de billets que vous souhaitez</p>
          <select value={number} onChange={handleNumberChange}>
            <option value="" />
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ReservationCalendar;
