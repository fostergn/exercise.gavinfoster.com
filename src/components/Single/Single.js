import React from 'react'
// import contacts from '../../../test-contacts'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import CommunicationCall from 'material-ui/svg-icons/communication/call'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import FaceIcon from 'material-ui/svg-icons/action/face'
import {indigo500} from 'material-ui/styles/colors'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import { intToPhone } from '../../utils'
import TextField from 'material-ui/TextField'

const Single = ({params, toggleEdit, contacts}) => {
  const singleId = params.id
  const singleContact = contacts.find(contact => contact.id === singleId)

  return (
    <div>
      <List style={{display: 'flex', flexWrap:'wrap'}}>
        <ListItem
          leftIcon={<FaceIcon color={indigo500}/>}
          secondaryText="First Name"
          onClick={() => toggleEdit()}
        >
          <TextField hintText="First Name" value={singleContact.firstName} />
        </ListItem>
        <ListItem
          style={{paddingLeft:55}}
          secondaryText="Last Name"
        >
          <TextField hintText="Last Name" value={singleContact.lastName} />
        </ListItem>
      </List>
      <Divider inset={true} />
      <List>
        <ListItem
          leftIcon={<CommunicationCall color={indigo500} />}
          rightIcon={<CommunicationChatBubble />}
          secondaryText="Primary"
          onClick={() => toggleEdit()}
        >
          <TextField hintText="Primary Phone" value={intToPhone(singleContact.phone)} />
        </ListItem>
      </List>
      <Divider inset={true} />
      <List>
        <ListItem
          leftIcon={<CommunicationEmail color={indigo500} />}
          secondaryText="Work"
          onClick={() => toggleEdit()}
        >
          <TextField hintText="Email" value={singleContact.email} />
        </ListItem>
      </List>
    </div>
  )
}

export default Single;
