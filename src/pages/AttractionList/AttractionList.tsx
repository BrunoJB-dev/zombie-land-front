import { useEffect, useState } from 'react';
import AttractionList from '../../components/AttractionList/AttractionList';
import type { Attraction } from '../../@types/attraction';
import { instanceAxios } from '../../utils/axios';

function AttractionListPage () {
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  useEffect(() => {
    instanceAxios.get('/api/recipes').then(({ data }) => {
      setAttractions(data);
    });
  }, []);


  return (
    <AttractionList items={attractions} />
  )
}

export default AttractionListPage
