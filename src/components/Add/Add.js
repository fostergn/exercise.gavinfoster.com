import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FaceIcon from 'material-ui/svg-icons/action/face';
import { indigo500 } from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import TextField from 'material-ui/TextField';

const SingleAdd = () => (
  <div>
    <List style={{ display: 'flex', flexWrap: 'wrap' }}>
      <ListItem
        leftIcon={<FaceIcon color={indigo500} />}
        secondaryText="First Name"
      >
        <TextField id="first-name-input" hintText="First Name" />
      </ListItem>
      <ListItem
        style={{ paddingLeft: 55 }}
        secondaryText="Last Name"
      >
        <TextField id="last-name-input" hintText="Last Name" />
      </ListItem>
    </List>
    <Divider inset />
    <List>
      <ListItem
        leftIcon={<CommunicationCall color={indigo500} />}
        rightIcon={<CommunicationChatBubble />}
        secondaryText="Primary"
      >
        <TextField id="phone-input" hintText="Primary Phone" />
      </ListItem>
    </List>
    <Divider inset />
    <List>
      <ListItem
        leftIcon={<CommunicationEmail color={indigo500} />}
        secondaryText="Work"
      >
        <TextField id="email-input" type="email" hintText="Work Email" />
      </ListItem>
    </List>
  </div>
);

export default SingleAdd;
