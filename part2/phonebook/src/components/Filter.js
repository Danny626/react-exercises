import React from "react";

const Filter = ({handlePersonSearch, personSearch}) => {
    return (
      <div>
        filter shown with
        <input
          value={personSearch}
          onChange={handlePersonSearch}
        />
      </div>
    );
};

export default Filter;