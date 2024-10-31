import { useEffect, useState } from 'react';
import { instanceAxios } from '../../utils/axios.ts';
import ReservationCalendar from '../../components/ReservationCalendar/ReservationCalendar.tsx';
import ReservationRecap from '../../components/ReservationRecap/ReservationRecap.tsx';

function ReservationPage() {
  return (
    <main>
      <div>
        <h1>Réservation</h1>
      </div>
      <h2>Achetez vos billets pour zombieland</h2>
      < ReservationCalendar />
      < ReservationRecap />
    </main>
  );
}

export default ReservationPage;
