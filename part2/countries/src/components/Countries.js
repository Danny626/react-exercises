import React from "react";

const Countries = ({countriesFiltered, setCountriesFiltered}) => {
    return (
        <ul>
            {countriesFiltered
            .map(countrie =>
                <li key={countrie.name.common}>
                    {countrie.name.common}
                    <button onClick={() => setCountriesFiltered([countrie])}>show</button>
                </li>
                )}
        </ul>
    );
};

export default Countries;