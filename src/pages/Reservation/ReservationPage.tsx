import { useEffect, useState } from 'react';
import ReservationCalendar from '../../components/ReservationCalendar/ReservationCalendar.tsx';
import ReservationRecap from '../../components/ReservationRecap/ReservationRecap.tsx';

import "./ReservationPage.scss"

function ReservationPage() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [number, setNumber] = useState<number>(0);
  return (
    <main className='reservation'>
      <div className='banner-reservation'>
        <h1>Réservation</h1>
      </div>
      <h2 className='title'>Achetez vos billets pour zombieland</h2>
      < ReservationCalendar startDate={startDate} setStartDate={setStartDate} number={number}  setNumber={setNumber}/>
      < ReservationRecap  startDate={startDate} number={number}/>
    </main>
  );
}

export default ReservationPage;
