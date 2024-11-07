import { useEffect, useState } from "react";
import instanceAxios from "../../utils/axios";
import type { Reservation } from "../../@types/reservation";

import "./myReservation.scss";

function MyReservation() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    instanceAxios.get('/api/profile/reservation').then(({ data }) => {
      setReservations(data);
      // console.log(data);
    });
  },[]);

  return (
    <div className="my-reservation">
      <div className="title-myReservation">
        <h3>Mes réservations</h3>
      </div>

      <div className="my-reservation-test">
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div key={reservation.user_id} className="my-reservation-border">
              <div className="my-reservation-head">
                <img src="../../../public/favicon.jpg" alt="Favicon" />
                <div>
                  <p className="my-reservation-billet">
                    {reservation.ticket} Billet(s) Daté(s) 1 jour
                  </p>
                  <p className="reservation-date">Valable le {reservation.date}</p>
                  <p>Annulation possible jusqu'à 10 jours</p>
                </div>
              </div>
              <div className="my-reservation-content">
                <div className="my-reservation-price">
                  <p>x</p>
                  <p className="my-space"> </p>
                  <p>60 €</p>
                </div>
                <div className="reservation-total">
                  <p className="my-totale-text">TOTAL</p>
                  <p className="my-total-price">{reservation.total_price} €</p>
                </div>
              </div>
              <div className="my-reservation-button">
                <button className="reservation-button" type="submit">
                  Annuler
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune réservation disponible.</p>
        )}
      </div>
    </div>
  );
}

export default MyReservation;
