import React, { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)

  const addContact = (event) => {
    event.preventDefault()

    const names = persons.map(contact => contact.name)

    if (names.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }

    else {
      const contactObject = {
        name: newName
      }
      setPersons(persons.concat(contactObject))
      setNewName('')
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