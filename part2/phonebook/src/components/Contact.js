import React from 'react'

const Contact = ({ contact, deleteContact }) => 
(
    <li>
        {contact.name} {contact.number}
        <button onClick={deleteContact}>delete</button>
    </li>
)

export default Contact