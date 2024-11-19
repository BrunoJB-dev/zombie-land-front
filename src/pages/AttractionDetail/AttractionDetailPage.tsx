import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Attraction } from "../../@types/attraction";
import instanceAxios from "../../utils/axios";
import AttractionDetail from "../../components/AttractionDetail/AttractionDetail";
import { useNavigate } from "react-router-dom";

import "./AttractionDetail.scss";


function AttractionDetailPage() {
  const params = useParams();

  const [detail, setDetail] = useState<Attraction>();

  const navigate = useNavigate();

  useEffect(() => {
    instanceAxios
    .get(`/api/attractions/${params.id}`)
    .then((response) => {
      setDetail(response.data) 
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        navigate('/404');
      } else {
        console.error('Erreur lors de la récupération de l\'attraction:', error);
      }
    })
  }, [
    params.id, navigate
  ])

  return (
    <main>
      {detail && <AttractionDetail detail={detail}/>}
    </main>
  );
}

export default AttractionDetailPage;