import { useEffect, useState } from 'react';
import instanceAxios from '../../utils/axios';
import type { Reservation } from '../../@types/reservation';
import { differenceInDays } from 'date-fns';
import ReservationCalendar from '../ReservationCalendar/ReservationCalendar';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import './myReservation.scss';

function MyReservation() {
  // Déclaration des types pour les props du composant ReservationRecap
  /* type ReservationRecapProps = {
    startDate: Date | null;
    number: number;
  }; */

  // Type pour le tableau de disponibilités
  type AvailabilityData = AvailabilityItem[];

  // Type pour chaque élément de disponibilité
  type AvailabilityItem = {
    date: string;
    available: number;
  };
  const [dateError, setDateError] = useState<string | null>(null);
  const [numberError, setNumberError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData>(
    [],
  ); // Stocke la disponibilité de toutes les dates
  const [remainingTickets, setRemainingTickets] = useState<number>(100);
  const [remainingInfos, setRemainingInfos] = useState<string | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [reservationsWithDays, setReservationsWithDays] = useState<
    { reservation: Reservation; diffInDays: number }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [selectedReservationId, setSelectedReservationId] = useState<
    number | null
  >(null);
  // Définit l'état pour la date de début de réservation (initialisé à null)
  const [startDate, setStartDate] = useState<Date | null>(null);

  // Définit l'état pour le nombre de billets réservés (initialisé à 0)
  const [number, setNumber] = useState<number>(0);

  // Fonction pour récupérer les réservations et mettre à jour l'état
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    // Détection du changement de taille de l'écran
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const fetchReservations = () => {
    instanceAxios.get('/api/profile/reservation').then(({ data }) => {
      setReservations(data);})};

      useEffect(() => {
        fetchReservations();
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
        fetchReservations();
          setIsModalOpen(false);
      });
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (reservationId: number) => {
    setSelectedReservationId(reservationId);
    setIsModalUpdateOpen(true);
  };

  const cancelUpdate = () => {
    setIsModalUpdateOpen(false);
  };

  // Formate la date de début en format "YYYY-MM-DD" ou affiche "Date non sélectionnée" si la date est nulle
  const formatedDate = startDate
    ? startDate.toLocaleDateString('fr-CA')
    : 'Date non sélectionnée';

  // Calcule le prix total en multipliant le nombre de billets par 60€
  const price = number * 60;

  // Récupère les données de disponibilité au montage du composant
  useEffect(() => {
    instanceAxios.get('/api/reservation').then(({ data }) => {
      setAvailabilityData(data);
    });
  }, []);

  // Met à jour les tickets restants en fonction de la date sélectionnée
  useEffect(() => {
    // Si aucune date n'est sélectionnée, remet les places à 100 et enlève le message d'information
    if (formatedDate === 'Date non sélectionnée') {
      setRemainingTickets(100);
      setRemainingInfos(null);
      return;
    }

    // Recherche la disponibilité pour la date sélectionnée
    const availabilityForDate = availabilityData.find(
      (item) => item.date === formatedDate,
    );

    // Si aucune disponibilité n'est trouvée, réinitialise les places et infos
    if (!availabilityForDate) {
      setRemainingTickets(100);
      setRemainingInfos(null);
    }

    // Si la disponibilité est trouvée, met à jour les places et infos selon le nombre disponible
    if (availabilityForDate) {
      setRemainingTickets(availabilityForDate.available);
      if (remainingTickets === 0) {
        setRemainingInfos(
          'Il ne reste plus de billets disponibles pour cette date.',
        );
      } else if (remainingTickets < 10) {
        setRemainingInfos(
          `Il reste ${remainingTickets} billets disponibles pour cette date.`,
        );
      }
    }
  }, [formatedDate, availabilityData, remainingTickets]);

  const confirmUpdate = () => {
    setDateError(null);
    setNumberError(null);
    setSuccessMessage(null);

    // Vérifie que la date et le nombre de billets sont bien sélectionnés
    let hasError = false;

    if (!startDate) {
      setDateError('Veuillez sélectionner une date pour votre réservation.');
      hasError = true;
    }

    if (number <= 0) {
      setNumberError('Veuillez sélectionner le nombre de billets.');
      hasError = true;
    }

    if (hasError) return;

    instanceAxios.patch('api/profile/reservation/update', {
      reservationId: selectedReservationId,
      date: formatedDate,
      ticket: number,
      price: price,
    })
    .then(() => {
      fetchReservations();
      setIsModalUpdateOpen(false); // Recharge la page après mise à jour
    })

    //setIsModalUpdateOpen(false);
    //navigate('/profile');
  };

  useEffect(() => {
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
                infiniteLoop>
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
                      onClick={() => {
                        handleDelete(reservation.id);
                      }}
                    >
                      Annuler
                    </button>
                  )}
                  {diffInDays >= 10 && (
                    <button
                      className="reservation-button"
                      type="button"
                      onClick={() => {
                        handleUpdate(reservation.id);
                      }}
                    >
                      Modifier
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
              {isModalUpdateOpen && (
                <div className="modal modal-myprofile modal-myprofile-update">
                  <h4>Modifier la réservation</h4>
                  <ReservationCalendar
                    startDate={startDate}
                    setStartDate={setStartDate}
                    number={number}
                    setNumber={setNumber}
                  />
                  {remainingInfos && (
                    <p className="warning-message">{remainingInfos}</p>
                  )}
                  {/* Affiche les messages d'erreur si la date ou le nombre de billets est manquant */}
                  {dateError && <p className="error-message">{dateError}</p>}
                  {numberError && (
                    <p className="error-message">{numberError}</p>
                  )}
                  {/* Affiche un message de succès si la réservation est réussie */}
                  {successMessage && (
                    <p className="success-message">{successMessage}</p>
                  )}
                  <div className='buttons-update'>
                    <button
                      type="button"
                      className="button-confirm"
                      onClick={confirmUpdate}
                    >
                      Confirmer
                    </button>
                    <button
                      type="button"
                      className="button-cancel"
                      onClick={cancelUpdate}
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
