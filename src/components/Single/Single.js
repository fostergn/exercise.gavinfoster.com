import React from 'react'
import contacts from '../../../test-contacts'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import CommunicationCall from 'material-ui/svg-icons/communication/call'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import {indigo500} from 'material-ui/styles/colors'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import { intToPhone } from '../../utils'

const Single = ({params}) => {
  const singleId = params.id
  const singleContact = contacts.find(contact => contact.id === parseInt(singleId))

  return (
    <div>
      <List>
        <ListItem
          leftIcon={<CommunicationCall color={indigo500} />}
          rightIcon={<CommunicationChatBubble />}
          primaryText={intToPhone(singleContact.phoneNumber)}
          secondaryText="Primary"
        />
      </List>
      <Divider inset={true} />
      <List>
        <ListItem
          leftIcon={<CommunicationEmail color={indigo500} />}
          primaryText={singleContact.email}
          secondaryText="Work"
        />
      </List>
    </div>
  )
}

export default Single;
