import React from 'react'
import Contact from './Contact'

const ShowContacts = ({ contactsToShow, deleteContact }) =>
(
    <ul>
        {contactsToShow.map(contact => <Contact key={contact.name} contact={contact} deleteContact={() => deleteContact(contact.id, contact.name)} />)}
    </ul>
)

export default ShowContacts