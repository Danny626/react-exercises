import React, { useState } from "react";

const Person = ({person}) => {
  return (
    <li>
      {person.fname} {person.number}
    </li>
  )
};

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      fname: 'Arto Hellas',
      number: 11111
    }
  ]);

  const [ person, setPerson ] = useState({fname: '', number: ''});

  const handleChange = (event) => {

    const {name, value} = event.target;

    setPerson(prevState => ({
      ...prevState,
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
        /* setPerson(prevState => ({
          ...prevState,
          fname: person.fname,
          number: person.number
        })); */

        setPersons(persons.concat(person));
        setPerson({fname: '', number: ''});
      } else {
        window.alert(`Empty value.`);
      }
    }

  };

  return (
    <div>
      <h2>Phonebook</h2>

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
        {persons.map(person => 
          <Person key={person.fname} person={person} />  
        )}
      </ul>
    </div>
  );
}

export default App;
