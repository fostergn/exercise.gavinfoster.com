import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { browserHistory } from 'react-router';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import contacts from '../../../test-contacts';
import SubList from './SubList'
import { alphabetizeArray } from '../../utils.js'

const ContactList = () => {

  const addNavigate = () => {
    browserHistory.push('/add')
  }

  const singleNavigate = ( id ) => {
    browserHistory.push(`/contacts/${id}`)
  }

  const alphabetizedContacts = alphabetizeArray(contacts)
  const alphabetizedList = []

  let SubListElements = [];
  for (var key in alphabetizedContacts) {
    if (alphabetizedContacts.hasOwnProperty(key)) {
      SubListElements.push(<SubList letter={key} contacts={alphabetizedContacts[key]} />)
    }
  }

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
