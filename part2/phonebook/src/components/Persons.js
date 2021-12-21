import React from "react";

const Persons = ({personsFiltered}) => {
    return (
      <ul>
        {personsFiltered.map(person => 
          <Person key={person.id} person={person} />  
        )}
      </ul>
    );
};

const Person = ({person}) => {
    return (
      <li>
        {person.fname} {person.number}
      </li>
    );
};

export default Persons;