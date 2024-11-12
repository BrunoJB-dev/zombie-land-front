import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import instanceAxios from '../../utils/axios.ts';
import type { Attraction } from '../../@types/attraction.ts';
import './SearchBar.scss';


function SearchBar() {
  // State to manage the current search input from the user
  const [searchInput, setSearchInput] = useState<string>('');
  
  // State to store the list of all attractions retrieved from the API
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  
  // State to store the filtered list of attractions based on the search input
  const [filteredAttractions, setFilteredAttractions] = useState<{ name: string, id: string }[]>([]);

  // Initialize the navigation hook to programmatically navigate to other routes
  const navigate = useNavigate();

  // Fetch attractions from the API once the component mounts
  useEffect(() => {
    instanceAxios.get('/api/attractions').then(({ data }) => setAttractions(data));
  }, []);

  // Handle changes in the search input field by updating the searchInput state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // Filter attractions based on the search input whenever searchInput or attractions change
  useEffect(() => {
    const filteredAttractionsList = searchInput.length > 0
      ? attractions.filter((attraction) =>
          attraction.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : [];
      
    // Update the filteredAttractions state with the filtered list
    setFilteredAttractions(filteredAttractionsList);
  }, [searchInput, attractions]);

  return (
    <div className='searchBarContainer'>
      <input
        type="search"
        placeholder="Rechercher"
        onChange={handleChange}
        value={searchInput}
        className='searchInput'
      />
      
      {/* Table des résultats de recherche flottante */}
      {searchInput.length > 0 && filteredAttractions.length > 0 && (
        <div className='resultsContainer'>
          <table className='resultsTable'>
            <tbody>
              {filteredAttractions.map((attraction) => (
                <tr key={attraction.id}>
                  <td className='resultItem'>
                    <Link to={`/attractions/${attraction.id}`}>
                      {attraction.name} <i>(Attraction)</i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SearchBar;