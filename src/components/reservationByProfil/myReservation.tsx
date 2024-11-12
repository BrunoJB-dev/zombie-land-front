import { useEffect, useState } from 'react';
import instanceAxios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import type { Reservation } from '../../@types/reservation';
import { differenceInDays } from 'date-fns';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import './myReservation.scss';

function MyReservation() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [reservationsWithDays, setReservationsWithDays] = useState<
    { reservation: Reservation; diffInDays: number }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReservationId, setSelectedReservationId] = useState<
    number | null
  >(null);
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    // Détection du changement de taille de l'écran
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

 
  useEffect(() => {
    instanceAxios.get('/api/profile/reservation').then(({ data }) => {
      setReservations(data);
      
    });
  }, []);

  const handleDelete = (reservationId: number) => {
    setSelectedReservationId(reservationId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    instanceAxios
      .delete('/api/profile/reservation/del', {
        data: { reservationId: selectedReservationId },
      })
      .then(() => {
        setReservations(
          reservations.filter(
            (reservation) => reservation.id !== selectedReservationId,
          ),
        );
        setIsModalOpen(false);
        navigate('/profile');
      });
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };


  //Fonction pour calculer la différence entre la date du jour et la date de réservation
  
 // const daysDifference = (reservationDate: string) => {
   // const today = new Date();
 //   const reservationDay = new Date(); //comment recup la date de chaque resa ?
 //  const diffInDays = differenceInDays(reservationDay, today);
   //setDiff(diffInDays)
 // }

useEffect(()=> {
  const today = new Date();
    const reservationsWithDays = reservations.map((reservation) => {
      const reservationDay = new Date(reservation.date);
      const diffInDays = differenceInDays(reservationDay, today);
      return { reservation, diffInDays };
    });
    setReservationsWithDays(reservationsWithDays);
  }, [reservations]);

  return (
    <div className="my-reservation">
      <div className="title-myReservation">
        <h3>Mes réservations</h3>
      </div>

      <div className="my-reservation-test">
        {reservationsWithDays.length > 0 ? ( 
          
          isMobile ? (
            <Carousel 
                showThumbs={false} 
                showStatus={false} 
                infiniteLoop
                emulateTouch>
              {reservationsWithDays.map(({ reservation, diffInDays }) => (
                <div key={reservation.id} className="my-reservation-border">
                  {/* Contenu de chaque réservation */}
                  <div className="my-reservation-head">
                    <img src="../../../public/favicon.jpg" alt="Favicon" />
                    <div>
                      <p className="my-reservation-billet">
                        {reservation.ticket} Billet(s) Daté(s) 1 jour
                      </p>
                      <p className="reservation-date">
                        Valable le {reservation.date}
                      </p>
                      <p>Annulation possible jusqu'à 10 jours</p>
                    </div>
                  </div>
                  <div className="my-reservation-content">
                    <div className="my-reservation-price">
                      <p>{reservation.ticket}x</p>
                      <p className="my-space"> </p>
                      <p>60 €</p>
                    </div>
                    <div className="reservation-total">
                      <p className="my-totale-text">TOTAL</p>
                      <p className="my-total-price">{reservation.total_price} €</p>
                    </div>
                  </div>
                  <div className="my-reservation-button">
                    {diffInDays >= 10 && (
                      <button
                        className="reservation-button"
                        type="button"
                        onClick={() => { handleDelete(reservation.id); }}
                      >
                        Annuler
                      </button>
                    )}
                  </div>
                  {isModalOpen && (
                    <div className="modal modal-myprofile">
                      <h4>Confirmer la suppression</h4>
                      <p>Êtes-vous sûr de vouloir annuler votre réservation ? Cette action est irréversible.</p>
                      <div className="button-myprofile">
                        <button type="button" className="button-confirm" onClick={confirmDelete}>
                          Confirmer
                        </button>
                        <button type="button" className="button-cancel" onClick={cancelDelete}>
                          Annuler
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Carousel>

          ) : (
            
          reservationsWithDays.map(({reservation, diffInDays}) => (
            
            <div key={reservation.id} className="my-reservation-border">
              <div className="my-reservation-head">
                <img src="../../../public/favicon.jpg" alt="Favicon" />
                <div>
                  <p className="my-reservation-billet">
                    {reservation.ticket} Billet(s) Daté(s) 1 jour
                  </p>
                  <p className="reservation-date">
                    Valable le {reservation.date}
                  </p>
                  <p>Annulation possible jusqu'à 10 jours</p>
                </div>
              </div>
              <div className="my-reservation-content">
                <div className="my-reservation-price">
                  <p>{reservation.ticket}x</p>
                  <p className="my-space"> </p>
                  <p>60 €</p>
                </div>
                <div className="reservation-total">
                  <p className="my-totale-text">TOTAL</p>
                  <p className="my-total-price">{reservation.total_price} €</p>
                </div>
              </div>
              <div className="my-reservation-button">
              {diffInDays >= 10 && (
                <button
                  className="reservation-button"
                  type="button"
                  onClick={() => {handleDelete(reservation.id);}}
                >
                  Annuler
                </button>
        )}
              </div>
              {isModalOpen && (
                <div className="modal modal-myprofile">
                  <h4>Confirmer la suppression</h4>
                  <p>
                    Êtes-vous sûr de vouloir annuler votre réservation ? Cette
                    action est irréversible.
                  </p>
                  <div className="button-myprofile">
                    <button
                      type="button"
                      className="button-confirm"
                      onClick={confirmDelete}
                    >
                      Confirmer
                    </button>
                    <button
                      type="button"
                      className="button-cancel"
                      onClick={cancelDelete}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              )}
            </div>
          )))
        ) : (
          <p>Aucune réservation disponible.</p>
        )}
      </div>
    </div>
  );
}

export default MyReservation;
