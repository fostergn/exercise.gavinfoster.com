import React from 'react'
import contacts from '../../../test-contacts'
import SingleEditing from './SingleEditing'
import Single from './Single'

const SingleWrapper = ({params, isEditing, toggleEdit}) => {
  const singleId = params.id
  const singleContact = contacts.find(contact => contact.id === parseInt(singleId))

  return (
     isEditing ? <SingleEditing params={params} /> : <Single toggleEdit={toggleEdit} params={params} /> 
  )
}

export default SingleWrapper;
