import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Attraction } from "../../@types/attraction";
import { instanceAxios } from "../../utils/axios";
import AttractionDetail from "../../components/AttractionDetail/AttractionDetail";

import "./AttractionDetail.scss";


function AttractionDetailPage() {
  const params = useParams();

  const [detail, setDetail] = useState<Attraction>();

  useEffect(() => {
    instanceAxios.get(`/api/attractions/${params.id}`).then(({data}) => {
      setDetail(data)
      console.log(data);    
    })
  }, [
    params.id,
  ])

  return (
    <main>
      {detail && <AttractionDetail detail={detail}/>}
    </main>
  );
}

export default AttractionDetailPage;