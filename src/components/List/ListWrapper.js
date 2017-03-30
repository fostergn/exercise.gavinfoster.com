import React, { Component } from 'react'
import List from './List'

class ListWrapper extends Component {
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
    const { contactsFetched, searchText, contacts } = this.props
    return (
      contactsFetched && contacts.length > 0 ? <List searchText={searchText} contacts={contacts}/> : <div>Loading contacts</div>
    )
  }
}

export default ListWrapper