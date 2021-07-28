import React from 'react'

const CountryLI = ({country, setFilterName}) => (
    <li>
        {country.name}
        <button onClick={() => setFilterName(country.name)}>
            show
        </button>
    </li>
)

export default CountryLI