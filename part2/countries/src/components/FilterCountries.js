import React from "react";

const FilterCountries = ({handleCountrieSearch, countrieSearch}) => {
    return (
        <div>
            Find Countries 
            <input
                value={countrieSearch}
                onChange={handleCountrieSearch}
            />
        </div>
    );
};

export default FilterCountries;