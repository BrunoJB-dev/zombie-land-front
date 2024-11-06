import { useEffect, useState } from "react";
import { instanceAxios } from "../../utils/axios";
import type { Reservation } from "../../@types/reservation";

import "./myReservation,.scss"

function myReservation() {
  
  const [reservation , setReservation]= useState<Reservation>();

  useEffect(() => {
    instanceAxios.get('/api/profile/reservation').then(({data}) => {
      setReservation(data)
    })
  })

  return(
    <div className="my-reservation">
      <div className="title-myReservation">
        <h3>Mes reservations</h3>
      </div>

      
<div className="my-reservation-test">
                
                <div className="my-reservation-recap">
                  <div className="my-reservation-border">
                    <div className="my-reservation-head">
                      <img src="../../../public/favicon.jpg" alt="" />
                      <div>
                        <p className="reservation-billet">
                          {reservation?.ticket} Billet(s) Daté(s) 1 jours
                        </p>
                        <p className="reservation-date">Valable le {reservation?.date}</p>
                        <p>Annulation possible jusqu'à 10 jours</p>
                      </div>
                    </div>
                    <div className="my-reservation-content">
                      <div className="my-reservation-price">
                        <p> x</p>
                        <p className="my-space"> </p>
                        <p>60 €</p>
                      </div>
                      <div className="reservation-total">
                        <p className="my-totale-text">TOTAL</p>
                        <p className="my-total-price">{reservation?.total_price} €</p>
                      </div>

                      <button type='submit'>
                        Annuler
                      </button>
                    </div>
                  </div>
              </div>

              <div className="my-reservation-recap">
                  <div className="my-reservation-border">
                    <div className="my-reservation-head">
                      <img src="../../../public/favicon.jpg" alt="" />
                      <div>
                        <p className="reservation-billet">
                          {reservation?.ticket} Billet(s) Daté(s) 1 jours
                        </p>
                        <p className="reservation-date">Valable le {reservation?.date}</p>
                        <p>Annulation possible jusqu'à 10 jours</p>
                      </div>
                    </div>
                    <div className="my-reservation-content">
                      <div className="my-reservation-price">
                        <p> x</p>
                        <p className="my-space"> </p>
                        <p>60 €</p>
                      </div>
                      <div className="reservation-total">
                        <p className="my-totale-text">TOTAL</p>
                        <p className="my-total-price">{reservation?.total_price} €</p>
                      </div>

                      <button type='submit'>
                        Annuler
                      </button>
                    </div>
                  </div>
              </div>

              <div className="my-reservation-recap">
                  <div className="my-reservation-border">
                    <div className="my-reservation-head">
                      <img src="../../../public/favicon.jpg" alt="" />
                      <div>
                        <p className="reservation-billet">
                          {reservation?.ticket} Billet(s) Daté(s) 1 jours
                        </p>
                        <p className="reservation-date">Valable le {reservation?.date}</p>
                        <p>Annulation possible jusqu'à 10 jours</p>
                      </div>
                    </div>
                    <div className="my-reservation-content">
                      <div className="my-reservation-price">
                        <p> x</p>
                        <p className="my-space"> </p>
                        <p>60 €</p>
                      </div>
                      <div className="reservation-total">
                        <p className="my-totale-text">TOTAL</p>
                        <p className="my-total-price">{reservation?.total_price} €</p>
                      </div>

                      <button type='submit'>
                        Annuler
                      </button>
                    </div>
                  </div>
              </div>
</div>
 
    </div>

  )

}

export default myReservation;