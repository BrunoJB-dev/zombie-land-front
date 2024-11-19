import '../../styles/infoModal.scss';
import  plan  from '/plan-du-parc.webp';


function InfoPlan() {
  return (
    <div className="modal-plan">
      <h3 className="modal-title">Plan du parc</h3>
      <img className="access-img" src={plan} alt="plan du parc"/>
    </div>
  )
}

export default InfoPlan;