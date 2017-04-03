import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { browserHistory } from 'react-router';
import { ListItem } from 'material-ui/List';
import SubList from './SubList';
import { alphabetizeArray } from '../../utils';

const ContactList = ({ searchText, contacts }) => {
  const addNavigate = () => {
    browserHistory.push('/add');
  };

  const alphabetizedContacts = alphabetizeArray(contacts);
  const SubListElements = [];

  // compare search term to all contacts first and last name
  const inSearchArray = Object.values(alphabetizedContacts).map(contacts => contacts.map(contact => `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchText.toLowerCase())));
  // flatten array
  const flatSearchArray = [].concat.apply([], inSearchArray);
  const isSearchEmpty = flatSearchArray.every(contact => contact === false);

  if (isSearchEmpty) {
    return (<ListItem
      primaryText="Sorry, there are no contacts that match your search."
      insetChildren
    />);
  }

  for (const key in alphabetizedContacts) {
    if (alphabetizedContacts.hasOwnProperty(key)) {
      SubListElements.push(
        <SubList
          key={key}
          letter={key}
          contacts={alphabetizedContacts[key]}
          searchText={searchText}
        />,
      );
    }
  }

  return (
    <div>
      {SubListElements}
      <FloatingActionButton
        children={<i className="material-icons">add</i>}
        style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 10 }}
        onTouchTap={() => addNavigate()}
      />
    </div>
  );
};

export default ContactList;
