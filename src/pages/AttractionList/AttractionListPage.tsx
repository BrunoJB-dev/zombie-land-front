import { useEffect, useState } from 'react';
import AttractionList from '../../components/AttractionList/AttractionList.tsx';
import type { Attraction, Category } from '../../@types/attraction.ts';
import instanceAxios from '../../utils/axios.ts';

import "./AttractionList.scss";

function AttractionListPage() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);

  // Récupère toutes les attractions au chargement
  useEffect(() => {
    instanceAxios.get('/api/attractions').then(({ data }) => {
      setAttractions(data);
      setFilteredAttractions(data);
     // setCategories(data); // Initialise filteredAttractions avec toutes les attractions
    });
  }, []);

  // Récupère les catégories au chargement
  useEffect(() => {
    instanceAxios.get('/api/attractions/categories').then(({ data }) => {
      setCategories(data);
    });
  }, []);

  // Gère le changement de filtre
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    // Si un filtre est sélectionné, récupérer les attractions par catégorie
    if (selectedFilter) {
      instanceAxios.get(`/api/attractions/category/${selectedFilter}`).then(({ data }) => {
        setFilteredAttractions(data);
      });
    } else {
      setFilteredAttractions(attractions); // Affiche toutes les attractions si aucun filtre n'est sélectionné
    }
  };

  return (
    <main>
      <div className='banner'>
        <h1>Liste des attractions</h1>
      </div>

      <select className='select-list' value={filter} onChange={handleFilterChange}>
        <option value="">Toutes les catégories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>

      <AttractionList items={filteredAttractions} />
      </main>
  );
}

export default AttractionListPage;
