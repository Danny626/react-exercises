import React from "react";
import Weather from "./Weather";

const Countrie = ({countrie}) => {
    return (
        <div>
            <h1>{countrie.name.common}</h1>

            <div>
                Capital: {countrie.capital}                
            </div>

            <div>
                Population: {countrie.population}
            </div>

            <h2>Languages</h2>

                <ul>
                    {Object.values(countrie.languages).map((lang, i) => 
                        <li key={i}>{lang}</li>
                    )}
                </ul>

            <img src={countrie.flags.png} alt="Bandera" />

            <Weather countrie={countrie} />
        </div>
    );
};

export default Countrie;