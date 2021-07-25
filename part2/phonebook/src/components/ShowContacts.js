import React from 'react'
import Contact from './Contact'

const ShowContacts = ({ filterName, contactList }) =>
{
    const filteredList = contactList.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()))
    
    if (filterName) {
        return (
            <ul>
                {filteredList.map(contact => <Contact key={contact.name} contact={contact} />)}
            </ul> 
            )
        }
    else
        return (
            <ul>
                {contactList.map(contact => <Contact key={contact.name} contact={contact} />)}
            </ul>
            )
}

export default ShowContacts