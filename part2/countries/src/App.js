import React, { useState, useEffect } from "react";
import axios from "axios";

import Countries from "./components/Countries";
import FilterCountries from "./components/FilterCountries";
import Countrie from "./components/Countrie";

const App = () => {

  // ESTADOS
  const [countries, setCountries] = useState([]);
  const [countrieSearch, setCountrieSearch] = useState('');
  const [countriesFiltered, setCountriesFiltered] = useState([]);
  const [tooManyResults, setTooManyResults] = useState(false);


  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
      console.log("cargando datos");
      /* setCountriesFiltered(response.data) */
    })
  }, []);


  const handleCountrieSearch = (event) => {
    const countrieSearch = event.target.value;
    setCountrieSearch(countrieSearch);

    const countriesFiltered = countries.filter(c => c.name.common.toUpperCase().search(countrieSearch.toUpperCase()) !== -1);

    if(countriesFiltered.length > 10) {
      setTooManyResults(true);
      setCountriesFiltered([]);
    } else {
      setTooManyResults(false);
      setCountriesFiltered(countriesFiltered);
    }
  };

  return (
    <div>
      <FilterCountries
        handleCountrieSearch={handleCountrieSearch}
        countrieSearch={countrieSearch}
      />

      <div>{tooManyResults ? 'Too many matches, specify another filter' : ""}</div>

      {
        countriesFiltered.length === 1 
          ? <Countrie countrie={countriesFiltered[0]} />
          : <Countries countriesFiltered={countriesFiltered} setCountriesFiltered={setCountriesFiltered} />
      }

      
    </div>
  );
};

export default App;
