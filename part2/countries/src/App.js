import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import ShowCountries from './components/ShowCountries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filterName, setFilterName] = useState('')

  const handleFilterChange = (event) => setFilterName(event.target.value)
  
  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filterName.toLowerCase()))

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <ShowCountries countriesToShow={countriesToShow} />
    </div>
  )
}


export default App