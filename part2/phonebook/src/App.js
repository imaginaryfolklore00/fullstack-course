import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ShowContacts from './components/ShowContacts'
import contactService from './services/contacts'
import Notification from './components/Notification'
import Error from './components/Error'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilterName(event.target.value)

  const updateContact = (contact, newNumber) => {
    const changedContact = {...contact, number: newNumber}

    contactService
      .update(contact.id, changedContact)
      .then(returnedContact => {
        setPersons(persons.map(person => person.id !== contact.id ? person : returnedContact))
        setNewName('')
        setNewNumber('')
        setNotificationMessage(`Updated ${returnedContact.name}`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
      .catch (error => {
        setErrorMessage(`${changedContact.name} was already removed from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  } 

  const addContact = (event) => {
    event.preventDefault()

    const contact = persons.find(c => c.name === newName)

    if (contact) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
      {
        updateContact(contact, newNumber)
      }
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
          setNotificationMessage(`Added ${returnedContact.name}`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
      }
  }

  const deleteContact = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      contactService
      .delete_db(id)
      .then(setPersons(persons.filter(person => person.id !== id)))
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
      <Notification message={notificationMessage} />
      <Error message={errorMessage} />
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h3>Add contact</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addContact={addContact} />
      <h3>Numbers</h3>
      <ShowContacts contactsToShow={contactsToShow} deleteContact={deleteContact}/>
    </div>
  )
}

export default App