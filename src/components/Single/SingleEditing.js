import React from 'react'
// import contacts from '../../../test-contacts'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import CommunicationCall from 'material-ui/svg-icons/communication/call'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import FaceIcon from 'material-ui/svg-icons/action/face'
import {indigo500} from 'material-ui/styles/colors'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import TextField from 'material-ui/TextField'
import { intToPhone } from '../../utils'

const Single = ({params, contacts}) => {
  const singleId = params.id
  const singleContact = contacts.find(contact => contact.id === singleId)

  return (
    <div>
      <List style={{display: 'flex', flexWrap:'wrap'}}>
        <ListItem
          leftIcon={<FaceIcon color={indigo500}/>}
          secondaryText="First Name"
        >
          <TextField tabIndex={10} id="first-name-input" hintText="First Name" defaultValue={singleContact.firstName} />
        </ListItem>
        <ListItem
          style={{paddingLeft:55}}
          secondaryText="Last Name"
        >
          <TextField tabIndex={20} id="last-name-input" hintText="Last Name" defaultValue={singleContact.lastName} />
        </ListItem>
      </List>
      <Divider inset={true} />
      <List>
        <ListItem
          leftIcon={<CommunicationCall color={indigo500} />}
          rightIcon={<CommunicationChatBubble />}
          secondaryText="Primary"
        >
          <TextField tabIndex={30} id="phone-input" hintText="Primary Phone" defaultValue={intToPhone(singleContact.phone)} />
        </ListItem>
      </List>
      <Divider inset={true} />
      <List>
        <ListItem
          leftIcon={<CommunicationEmail color={indigo500} />}
          secondaryText="Work"
        >
          <TextField tabIndex={40} id="email-input" type="email" hintText="Primary Phone" defaultValue={singleContact.email} />
        </ListItem>
      </List>
    </div>
  )
}

export default Single;
