import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { browserHistory } from 'react-router'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import {pinkA200, transparent} from 'material-ui/styles/colors'
// import contacts from '../../../test-contacts'
import SubList from './SubList'
import { alphabetizeArray } from '../../utils.js'

const ContactList = ({searchText, contacts}) => {

  const addNavigate = () => {
    browserHistory.push('/add')
  }

  const singleNavigate = ( id ) => {
    browserHistory.push(`/contacts/${id}`)
  }

  const alphabetizedContacts = alphabetizeArray(contacts)
  const alphabetizedList = []

  let SubListElements = [];

  // if(!Object.values(alphabetizedContacts).every(contacts => contacts.every(contact => `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchText.toLowerCase())))){
  //   SubListElements = <p className="list__empty">Sorry, no contacts. You should add one</p>
  // } else {
    for (var key in alphabetizedContacts) {
      if (alphabetizedContacts.hasOwnProperty(key)) {
        SubListElements.push(<SubList key={key} letter={key} contacts={alphabetizedContacts[key]} searchText={searchText} />)
      }
    }
  // }
  return (
    <div>
      {SubListElements}
      <FloatingActionButton 
        children={<i className="material-icons">add</i>}
        style={{position:'fixed', bottom:'10px', right:'10px', zIndex: 10}}
        onTouchTap={() => addNavigate()}
      />
    </div>
  );
}

export default ContactList;
