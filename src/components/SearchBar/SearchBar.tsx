import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import instanceAxios from '../../utils/axios.ts';
import type { Attraction, Category } from '../../@types/attraction.ts';

function SearchBar() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredAttractions, setFilteredAttractions] = useState<{ name: string, id: string }[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<{ name: string, id: string }[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    instanceAxios.get('/api/attractions').then(({ data }) => setAttractions(data));
    instanceAxios.get('/api/attractions/categories').then(({ data }) => setCategories(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    let filteredAttractionsList = [];
    let filteredCategoriesList = [];

    if (searchInput.length > 0) {
      if (searchInput.toLowerCase().startsWith('att')) {
        filteredAttractionsList = attractions.filter((attraction) =>
          attraction.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else if (searchInput.toLowerCase().startsWith('cat')) {
        filteredCategoriesList = categories.filter((category) =>
          category.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else {
        filteredAttractionsList = attractions.filter((attraction) =>
          attraction.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        filteredCategoriesList = categories.filter((category) =>
          category.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      }
    }

    setFilteredAttractions(filteredAttractionsList);
    setFilteredCategories(filteredCategoriesList);
  }, [searchInput, attractions, categories]);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/attractions`, { state: { categoryId } });
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Rechercher"
        onChange={handleChange}
        value={searchInput}
      />
      {searchInput.length > 0 && (filteredAttractions.length > 0 || filteredCategories.length > 0) && (
        <table>
          <tbody>
            {filteredAttractions.map((attraction) => (
              <tr key={attraction.id}>
                <td>
                  <Link to={`/attractions/${attraction.id}`}>
                    {attraction.name} <i>(Attraction)</i>
                  </Link>
                </td>
              </tr>
            ))}
            {filteredCategories.map((category) => (
              <tr key={category.id}>
                <td>
                  <button type='button' onClick={() => handleCategoryClick(category.id)}>
                    {category.name} <i>(Catégorie)</i>
                  </button>
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
