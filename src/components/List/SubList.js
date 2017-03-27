import React from 'react'
import { browserHistory } from 'react-router'
import {ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import {pinkA200, transparent} from 'material-ui/styles/colors'

const SubList = ( { letter, contacts, index, searchText }) => {

  const singleNavigate = ( id ) => {
    browserHistory.push(`/contacts/${id}`)
  }

  let contactsList = contacts.map( (contact, index) => {
      const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase()
      if (fullName.includes(searchText.toLowerCase())){
        if (index === 0) {
          return (
            <div>
              <Divider inset={true} />
              <ListItem
                leftAvatar={
                <Avatar
                  color={pinkA200} backgroundColor={transparent}
                  style={{left: 8}}
                >
                  { letter }
                </Avatar>
              }
                primaryText={`${contact.firstName} ${contact.lastName}`}
                insetChildren={true}
                onTouchTap={() => singleNavigate(contact.id)}
              />
            </div>
          )
        } else {
          return (
            <ListItem
              primaryText={`${contact.firstName} ${contact.firstName}`}
              insetChildren={true}
              onTouchTap={() => singleNavigate(contact.id)}
            />
          )        
        }
      } else {return false}
    }
  )

 const filteredContacts = contactsList.filter(x=>x!==false)
 if(filteredContacts.length == 0){
   return false
 }
  return (
    <div>
      { contactsList }
    </div>
  )
}

export default SubList