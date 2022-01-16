import React from "react";
import Person from "./Person";

const Persons = ({personsFiltered, deletePerson}) => {
    return (
      <ul>
        {personsFiltered.map(person => 
          <Person key={person.id} person={person} deletePerson={deletePerson} />  
        )}
      </ul>
    );
};

export default Persons;