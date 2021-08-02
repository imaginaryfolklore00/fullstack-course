import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ShowContacts from './components/ShowContacts'
import contactService from './services/contacts'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilterName(event.target.value)

  const addContact = (event) => {
    event.preventDefault()

    const names = persons.map(contact => contact.name)
    const numbers = persons.map(contact => contact.number)

    if (names.includes(newName) || numbers.includes(newNumber)) {
      window.alert(`${newName} is already added to phonebook or the given number already exists`)
    }

    else {
      const contactObject = {
        name: newName,
        number: newNumber
      }

      contactService
        .create(contactObject)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact))
          setNewName('')
          setNewNumber('')
        })
  }
  }
  
  const contactsToShow = persons.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()))

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h3>Add contact</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addContact={addContact} />
      <h3>Numbers</h3>
      <ShowContacts contactsToShow={contactsToShow}/>
    </div>
  )
}

export default App