import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { browserHistory } from 'react-router';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';

const ContactList = () => {

  const addNavigate = () => {
    browserHistory.push('/add')
  }

  const singleNavigate = ( id ) => {
    browserHistory.push(`/contacts/${id}`)
  }

  return (
    <div>
      <List style={{paddingTop: 64}}>
        <ListItem
          onTouchTap={() => singleNavigate('chelsea o')}
          primaryText="Chelsea Otakan"
          leftIcon={<ActionGrade color={pinkA200} />}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/5341422?v=3&s=128" />}
        />
        <ListItem
          primaryText="Eric Hoffman"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/5341441?v=3&s=128" />}
        />
        <ListItem
          primaryText="Kerem Suer"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/4214491?v=3&s=128" />}
        />
      </List>
      <Divider inset={true} />
      <List>
        <ListItem
          primaryText="Adelle Charles"
          leftAvatar={
            <Avatar
              color={pinkA200} backgroundColor={transparent}
              style={{left: 8}}
            >
              A
            </Avatar>
          }
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/4223491?v=3&s=128" />}
        />
        <ListItem
          primaryText="Eric Hoffman"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/5341441?v=3&s=128" />}
        />
        <ListItem
          primaryText="Eric Hoffman"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/5341441?v=3&s=128" />}
        />
        <ListItem
          primaryText="Kerem Suer"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/4214491?v=3&s=128" />}
        />
        <ListItem
          primaryText="Eric Hoffman"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/5341441?v=3&s=128" />}
        />
        <ListItem
          primaryText="Kerem Suer"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/4214491?v=3&s=128" />}
        />
        <ListItem
          primaryText="Eric Hoffman"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/5341441?v=3&s=128" />}
        />
        <ListItem
          primaryText="Eric Hoffman"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/5341441?v=3&s=128" />}
        />
        <ListItem
          primaryText="Kerem Suer"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/4214491?v=3&s=128" />}
        />
        <ListItem
          primaryText="Eric Hoffman"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/5341441?v=3&s=128" />}
        />
        <ListItem
          primaryText="Eric Hoffman"
          insetChildren={true}
          rightAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/5341441?v=3&s=128" />}
        />
      </List>
      <FloatingActionButton 
        children={<i className="material-icons">add</i>}
        style={{position:'fixed', bottom:'10px', right:'10px', zIndex: 10}}
        onTouchTap={() => addNavigate()}
      />
    </div>
  );
}

export default ContactList;
