import React from 'react'
import Language from './Language'

const ShowCountry = ({country}) => (
    <div>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
            {country.languages.map(language => <Language key={language.iso639_2} language={language} />)}
        </ul>
        <img src={country.flag} alt="Country flag"/>
    </div>
)

export default ShowCountry