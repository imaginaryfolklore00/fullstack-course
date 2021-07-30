import React from 'react'
import CountryLI from './CountryLI'
import ShowCountry from './ShowCountry'

const ShowCountries = ({ countriesToShow, setFilterName }) => {
    const numOfCountries = countriesToShow.length
    if (numOfCountries > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    else if (numOfCountries === 1) {
        return (
            <ShowCountry country={countriesToShow[0]} />
        )
    }
    
    return (
        <ul>
            {countriesToShow.map(country => <CountryLI key={country.alpha3Code} country={country} setFilterName={setFilterName} />  )}
        </ul>
    )
}

export default ShowCountries 