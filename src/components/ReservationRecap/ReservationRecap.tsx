import { useState, useEffect } from 'react';
import { instanceAxios } from '../../utils/axios.ts';

import './ReservationRecap.scss';

// Déclaration des types pour les props du composant ReservationRecap
type ReservationRecapProps = {
  startDate: Date | null;
  number: number;
};

// Type pour le tableau de disponibilités
type AvailabilityData = AvailabilityItem[];

// Type pour chaque élément de disponibilité
type AvailabilityItem = {
  date: string;
  available: number;
};

// Composant ReservationRecap : Affiche un récapitulatif de la réservation
function ReservationRecap({ startDate, number }: ReservationRecapProps) {
  // États pour les messages d'erreur
  const [dateError, setDateError] = useState<string | null>(null);
  const [numberError, setNumberError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData>(
    [],
  ); // Stocke la disponibilité de toutes les dates
  const [remainingTickets, setRemainingTickets] = useState<number>(100);
  const [remainingInfos, setRemainingInfos] = useState<string | null>(null);

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

    console.log(`je cherche ${remainingTickets}`);
  }, [formatedDate, availabilityData, remainingTickets]);

  // Fonction pour gérer la soumission de la réservation
  const handleReservationSubmit = async () => {
    // Réinitialise les messages d'erreur et de succès
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

    try {
      const reservationData = {
        date: formatedDate,
        ticket: number,
        price: price,
      };

      // Envoie les données de réservation à l'API
      //const response = await instanceAxios.post(
      await instanceAxios.post(
        '/api/reservation',
        reservationData,
      );

      // Met à jour le message de succès en cas de réussite
      setSuccessMessage('Votre réservation a été confirmée avec succès !');
    } catch (error) {
      console.error('Erreur lors de la soumission de la réservation:', error);
    }
  };

  return (
    <div className="reservation-recap">
      <div className="reservation-border">
        <div className="reservation-head">
          <img src="../../../public/favicon.jpg" alt="" />
          <div>
            <p className="reservation-billet">
              {number} Billet(s) Daté(s) 1 jours
            </p>
            <p className="reservation-date">Valable le {formatedDate}</p>
            <p>Annulation possible jusqu'à 10 jours</p>
          </div>
        </div>
        <div className="reservation-content">
          <div className="reservation-price">
            <p>{number} x</p>
            <p className="space"> </p>
            <p>60 €</p>
          </div>
          <div className="reservation-total">
            <p className="totale-text">TOTAL</p>
            <p className="total-price">{price} €</p>
          </div>
          {remainingInfos && <p className="warning-message">{remainingInfos}</p>}
          <button type='submit' onClick={handleReservationSubmit}>
            Valider ma réservation
          </button>
          {/* Affiche les messages d'erreur si la date ou le nombre de billets est manquant */}
          {dateError && <p className="error-message">{dateError}</p>}
          {numberError && <p className="error-message">{numberError}</p>}
          {/* Affiche un message de succès si la réservation est réussie */}
          {successMessage && 
            <p className="success-message">{successMessage}</p>
          }
        </div>
      </div>
    </div>
  );
}

export default ReservationRecap;
