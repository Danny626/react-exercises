import React from "react";

const Person = ({person, deletePerson}) => {
    return (
      <li>
        {person.fname} {person.number} 
        <button onClick={() => deletePerson(person.id, person.fname)}>delete</button>
      </li>
    );
};

export default Person;