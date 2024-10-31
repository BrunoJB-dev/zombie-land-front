//import type { Reservation } from "../../@types/reservation";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function ReservationCalendar (){
  const [startDate, setStartDate] = useState(new Date());
  const [number, setNumber] = useState(0);

  const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = Number.parseInt(event.target.value);
    setNumber(selectedNumber)
  }

  const handleDateChange = (date: Date) => {
    setStartDate(date);
    const formatedDate = Date.parse(date.toISOString);
    console.log(formatedDate);
  }
  
  return(
    <div>
      <h3>Choisissez vos entrées</h3>
      <div>
        <p>Choisissez votre date de visite</p>
        <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        inline
            />
      </div>      
    <div>
      <p> Choisissez le nombre de billets que vous souhaitez</p>
      <select value={number} onChange={handleNumberChange}>
      <option value=""/>
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
  )
}

export default ReservationCalendar;