// SearchBar.tsx
import { useState } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const attractions = [
    { name: "Zombie escape coaster" },
    { name: "The infected swamp" },
    { name: "Deadly labyrinth" },
    { name: "Virus outbreak VR" },
    { name: "The quarantine zone" },
    { name: "Zombie assault: laser battle" },
    { name: "The apocalypse coaster" },
    { name: "Zombie carnival" },
  ];

  const categories = [
    { name: "Montagnes russes" },
    { name: "Attractions aquatiques" },
    { name: "Expériences interactives" },
    { name: "Maisons hantées" }
  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Initialisation des listes des résultats filtrés
  let filteredAttractions = [];
  let filteredCategories = [];
  
  if (searchInput.length > 0) {
    // Vérifier si le début de `searchInput` correspond à "attraction" ou "categorie"
    if (searchInput.toLowerCase().startsWith("att")) {
      // Afficher uniquement les noms des attractions
      filteredAttractions = attractions.map((attraction) => ({
        name: attraction.name,
        category: null,
      }));
    } else if (searchInput.toLowerCase().startsWith("cat")) {
      // Afficher uniquement les catégories
      filteredCategories = categories.map((category) => ({
        name: category.name,
        category: null,
      }));
    } else {
      // Filtrage standard pour d'autres mots-clés
      filteredAttractions = attractions.filter((attraction) =>
        attraction.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  }

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
          {/*<thead>
            <tr>
              <th>Attraction</th>
              <th>Catégorie</th>
            </tr>
          </thead>*/}
          <tbody>
            {/* Affichage des attractions */}
            {filteredAttractions.map((attraction, index) => (
              <tr key={`attraction-${index}`}>
                <td>{attraction.name || '-'}</td>
                <td>{attraction.category || '-'}</td>
              </tr>
            ))}
            {/* Affichage des catégories */}
            {filteredCategories.map((category, index) => (
              <tr key={`category-${index}`}>
                <td>{category.name || '-'}</td>
                <td>{category.category || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchBar;
