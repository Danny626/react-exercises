import React, { useState } from "react";

const Person = ({person}) => {
  return (
    <li>
      {person.fname} {person.number}
    </li>
  )
};

const App = () => {
  // ESTADOS
  const [persons, setPersons] = useState([
    { fname: 'Arto Hellas', number: '040-123456', id: 1 },
    { fname: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { fname: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { fname: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [ person, setPerson ] = useState({fname: '', number: '', id: ''});
  
  const [ personSearch, setPersonSearch ] = useState('');

  const [ personsFiltered, setPersonsFiltered ] = useState(persons);


  // FUNCIONES
  const handleChange = (event) => {

    const {name, value} = event.target;

    setPerson(prevState => ({
      ...prevState,
      id: persons.length + 1,
      [name]: value
    }));

    console.log(person);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personsFiltered = persons.filter(p => p.fname === person.fname);

    if( personsFiltered.length !== 0 ) {
      window.alert(`${person.fname} is already registered.`);
    } else {
      if( person.fname !== '' ) {
        setPersons(persons.concat(person));
        setPersonsFiltered(persons.concat(person));
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

      <div>
        filter shown with
        <input
          value={personSearch}
          onChange={handlePersonSearch}
        />
      </div>

      <h2>add a new</h2>

      <form onSubmit={addPerson}>
        <div>
          name: 
          <input
            value={person.fname}
            onChange={handleChange}
            name="fname"
          />
        </div>

        <div>
          number: 
          <input
            value={person.number}
            onChange={handleChange}
            name="number"
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      <ul>
        {personsFiltered.map(person => 
          <Person key={person.id} person={person} />  
        )}
      </ul>
    </div>
  );
}

export default App;
