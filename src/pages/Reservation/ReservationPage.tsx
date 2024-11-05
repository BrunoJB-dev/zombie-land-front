import { useEffect, useState } from 'react';
import ReservationCalendar from '../../components/ReservationCalendar/ReservationCalendar.tsx';
import ReservationRecap from '../../components/ReservationRecap/ReservationRecap.tsx';

import "./ReservationPage.scss"

// Composant principal de la page de réservation
function ReservationPage() {

   // Définit l'état pour la date de début de réservation (initialisé à null)
  const [startDate, setStartDate] = useState<Date | null>(null);

  // Définit l'état pour le nombre de billets réservés (initialisé à 0)
  const [number, setNumber] = useState<number>(0);

  return (
    <main className='reservation'>
      <div className='banner-reservation'>
        <h1>Réservation</h1>
      </div>
      <h2 className='title'>Achetez vos billets pour zombieland</h2>
       {/* Section qui contient le calendrier de réservation et le récapitulatif */}
      <div className='calendar-recap'>
        < ReservationCalendar startDate={startDate} setStartDate={setStartDate} number={number}  setNumber={setNumber}/>
        < ReservationRecap  startDate={startDate} number={number}/>
      </div>
    </main>
  );
}

export default ReservationPage;
