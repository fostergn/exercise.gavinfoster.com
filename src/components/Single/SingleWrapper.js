import React, { Component } from 'react'
import contacts from '../../../test-contacts'
import SingleEditing from './SingleEditing'
import Single from './Single'

class SingleWrapper extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const { contactsFetched, fetchContacts } = this.props
    if(!contactsFetched){
      fetchContacts()
    }
  }
  render(){
    const {params, isEditing, toggleEdit, contacts, contactsFetched} = this.props
   
    return (
        !contactsFetched ? <div>loading contacts</div> : (isEditing ? <SingleEditing params={params} /> : <Single toggleEdit={toggleEdit} params={params} contacts={contacts}/>) 
    )
  }
}


export default SingleWrapper;
