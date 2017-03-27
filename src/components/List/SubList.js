import React from 'react'
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';

const SubList = ( { letter, contacts, index }) => {

  const contactsList = contacts.map( (contact, index) => {
      if (index === 1) {
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
            />
          </div>
        )
      } else {
        return (
          <ListItem
            primaryText={`${contact.firstName} ${contact.firstName}`}
            insetChildren={true}
          />
        )        
      }
    }
  )

  return (
    <div>
      { contactsList }
    </div>
  )
}

export default SubList