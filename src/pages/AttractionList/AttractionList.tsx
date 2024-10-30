import { useEffect, useState } from 'react';
import AttractionList from '../../components/AttractionList/AttractionList.tsx';
import type { Attraction, Category } from '../../@types/attraction';
import { instanceAxios } from '../../utils/axios';


function AttractionListPage () {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    instanceAxios.get('/api/attractions').then(({ data }) => {
      setAttractions(data);
      setFilteredAttractions(data);
    });
  }, []);

  

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter); 
  

  const filtered = attractions.filter(
    (attraction) => attraction.categories[0].name === selectedFilter
  );
  setFilteredAttractions(filtered);
  };

  
  return (
    
    <div>
      <h1>Liste des attractions</h1>

      <select value={filter} onChange={handleFilterChange}>
      <option value="">Toutes les catégories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}
        </select>

      <AttractionList items={attractions} />
    </div>
  )
}


export default AttractionListPage;

