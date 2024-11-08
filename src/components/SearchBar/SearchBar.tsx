import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import instanceAxios from '../../utils/axios.ts';
import type { Attraction, Category } from '../../@types/attraction.ts';  // Assurez-vous d'utiliser le bon chemin pour axios

function SearchBar() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredAttractions, setFilteredAttractions] = useState<{ name: string, id: string }[]>([]);  // Stocke les attractions filtrées
  const [filteredCategories, setFilteredCategories] = useState<{ name: string, id: string }[]>([]);  // Stocke les catégories filtrées

  // Récupère les attractions et catégories depuis l'API
  useEffect(() => {
    // Récupère les attractions
    instanceAxios.get('/api/attractions').then(({ data }) => {
      setAttractions(data);
    });

    // Récupère les catégories
    instanceAxios.get('/api/attractions/categories').then(({ data }) => {
      setCategories(data);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    // Filtrage des attractions et des catégories en fonction de l'input de recherche
    let filteredAttractionsList = [];
    let filteredCategoriesList = [];

    if (searchInput.length > 0) {
      // Si l'input commence par "att", on filtre les attractions uniquement
      if (searchInput.toLowerCase().startsWith('att')) {
        filteredAttractionsList = attractions.filter((attraction) =>
          attraction.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else if (searchInput.toLowerCase().startsWith('cat')) {
        // Si l'input commence par "cat", on filtre les catégories uniquement
        filteredCategoriesList = categories.filter((category) =>
          category.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else {
        // Sinon, on filtre les deux
        filteredAttractionsList = attractions.filter((attraction) =>
          attraction.name.toLowerCase().includes(searchInput.toLowerCase())
        );

        filteredCategoriesList = categories.filter((category) =>
          category.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      }
    }

    // Mise à jour des états avec les résultats filtrés
    setFilteredAttractions(filteredAttractionsList);
    setFilteredCategories(filteredCategoriesList);

  }, [searchInput, attractions, categories]); // Le useEffect se déclenche lorsque searchInput, attractions, ou categories changent

  return (
    <div>
      <input
        type="search"
        placeholder="Rechercher"
        onChange={handleChange}
        value={searchInput}
      />

      {/* Affichage conditionnel du tableau uniquement si des résultats existent */}
      {searchInput.length > 0 && (filteredAttractions.length > 0 || filteredCategories.length > 0) && (
        <table>
          <tbody>
            {/* Affichage des attractions */}
            {filteredAttractions.map((attraction) => (
              <tr key={attraction.id}>
                <td>
                  <Link to={`/attractions/${attraction.id}`}>{attraction.name}
                  <i>
                  (Attraction)
                  </i>
                  </Link>
                </td>
              </tr>
            ))}
            {/* Affichage des catégories */}
            {filteredCategories.map((category) => (
              <tr key={category.id}>
                <td>
                  {category.name}
                  <i>
                    (Catégorie)
                  </i>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchBar;
