import React, { useState } from "react";

const Person = ({person}) => {
  return (
    <li>
      {person.name}
    </li>
  )
};

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas' 
    }
  ]);
  const [ newName, setNewName ] = useState('');

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName
    };

    const person = persons.filter(person => person.name === newName);

    if( person.length !== 0 ) {
      window.alert(`${newName} is already registered.`);
    } else {
      if( newName !== '' ) {
        setPersons(persons.concat(personObject));
        setNewName('');
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
            value={newName}
            onChange={handlePersonChange}
          />
          <div>debug: {newName}</div>
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} />  
        )}
      </ul>
    </div>
  );
}

export default App;
