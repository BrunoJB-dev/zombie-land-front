import "./ReservationRecap.scss"

type ReservationRecapProps = {
  startDate: Date | null;
  number: number;
};

function ReservationRecap ({startDate, number}: ReservationRecapProps){

    const formatedDate = startDate ? startDate.toLocaleDateString('fr-CA') : "Date non sélectionnée";
    const price = number * 60;

  return(
    <div className="reservation-recap">
      <div className="reservation-border">
        <div className="reservation-head">
          <img src="../../../public/favicon.jpg" alt="" />
          <div>
            <p className="reservation-billet">{number} Billet(s) Daté(s) 1 jours</p>
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
        </div>
      </div>
    </div>
  )
}

export default ReservationRecap;