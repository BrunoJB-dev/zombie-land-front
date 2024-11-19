
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import './ReservationCalendar.scss';

// Déclaration des types pour les props du composant ReservationCalendar
type ReservationCalendarProps = {
  startDate: Date | null; //Date de début sélectionnée pour la réservation
  setStartDate: (date: Date | null) => void; // Fonction pour mettre à jour la date de début
  number: number; // Nombre de billets sélectionnés
  setNumber: (number: number) => void; // Fonction pour mettre à jour le nombre de billets
};

// Composant ReservationCalendar : permet de choisir la date et le nombre de billets pour la réservation
function ReservationCalendar({
  startDate,
  setStartDate,
  number,
  setNumber,
}: ReservationCalendarProps) {

  const  [placeholder, setPlaceholder] = useState(true)
  // Fonction pour gérer le changement de nombre de billets sélectionnés
  const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = Number.parseInt(event.target.value);
    setNumber(selectedNumber);
    setPlaceholder(false); 
  };


  // Fonction pour gérer le changement de date de visite
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    console.log(date);
    if (date) {
      const formatedDate = date.toLocaleDateString('fr-CA'); //Formatage de la date en format "YYYY-MM-DD"
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
          <label htmlFor="calendar-select">Choisissez le nombre de billets que vous souhaitez</label>
          <select id='calendar-select' className='calendar-select' value={number} onChange={handleNumberChange}>
          {placeholder && <option value="">Faire mon choix </option>}
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
