import React, { useState, useEffect } from "react";

import personService from './services/persons.service';

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";


const App = () => {
  // ESTADOS
  const [persons, setPersons] = useState([]);
  const [ person, setPerson ] = useState({fname: '', number: '', id: ''});
  const [ personSearch, setPersonSearch ] = useState('');
  const [ personsFiltered, setPersonsFiltered ] = useState([]);

  useEffect(() => {
    personService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons);
        setPersonsFiltered(returnedPersons);
      });
  }, []);


  // FUNCIONES
  const handleChange = (event) => {

    const {name, value} = event.target;

    setPerson(prevState => ({
      ...prevState,
      id: persons.length + 1,
      [name]: value
    }));
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personsFiltered = persons.filter(p => p.fname === person.fname);

    if( personsFiltered.length !== 0 ) {
      window.alert(`${person.fname} is already registered.`);
    } else {
      if( person.fname !== '' ) {
        personService
          .create(person)
          .then(returnedPerson => {
            setPersons(persons.concat(person));
            setPersonsFiltered(persons.concat(person));
          })
          .catch(error => {
            alert(`Ocurrió un error al guardar la persona`);
          })

          setPerson({fname: '', number: '', id: ''});
      } else {
        window.alert(`Empty value.`);
      }
    }

  };

  const handlePersonSearch = (event) => {
    const personSearch = event.target.value;
    setPersonSearch(personSearch);

    const personsFiltered = persons.filter(p => p.fname.toUpperCase().search(personSearch.toUpperCase()) !== -1);

    setPersonsFiltered(personsFiltered);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        handlePersonSearch={handlePersonSearch} 
        personSearch={personSearch}
      />

      <h2>add a new</h2>

      <PersonForm 
        addPerson={addPerson} 
        handleChange={handleChange} 
        person={person}
      />

      <h2>Numbers</h2>
      
      <Persons 
        personsFiltered={personsFiltered} 
      />
    </div>
  );
}

export default App;
