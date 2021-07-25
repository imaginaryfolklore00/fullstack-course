import React, { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567' 
    }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

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

      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input
            value={newNumber} 
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(contact =>
          <Contact key={contact.name} contact={contact} />
          )}
      </ul>
    </div>
  )
}

export default App