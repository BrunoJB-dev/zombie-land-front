import { useEffect, useState } from 'react';
import AttractionList from '../../components/AttractionList/AttractionList.tsx';
import type { Attraction } from '../../@types/attraction';
import { instanceAxios } from '../../utils/axios';

function FilterButton (){
  const [fileredAttractions, setfilterAttractions] = useState<Attraction[]>([]);
  const [filter, setFilter] = useState<string>('');
}

export default FilterButton;