import React from "react";

const PersonForm = ({addPerson, handleChange, person }) => {
    return(
        <form onSubmit={addPerson}>
            <div>
                name: 
                <input
                value={person.fname}
                onChange={handleChange}
                name="fname"
                autoFocus
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
    );
};

export default PersonForm;