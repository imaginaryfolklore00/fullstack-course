import React from 'react'
import Contact from './Contact'

const ShowContacts = ({ contactsToShow }) =>
(
    <ul>
        {contactsToShow.map(contact => <Contact key={contact.name} contact={contact} />)}
    </ul>
)

export default ShowContacts