import React, { Component } from 'react';
import SingleEditing from './SingleEditing';
import Single from './Single';
import FloatingActionButton from 'material-ui/FloatingActionButton';


class SingleWrapper extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { contactsFetched, fetchContacts } = this.props;
    if (!contactsFetched) {
      fetchContacts();
    }
  }
  render() {
    const { params, isEditing, toggleEdit, contacts, contactsFetched, deleteContact } = this.props;

    const handleDelete = () => {
      deleteContact(params.id);
    };

    return (
      <div>
        {!contactsFetched ? <div>loading contacts</div> : (isEditing ? <SingleEditing params={params} contacts={contacts} /> : <Single toggleEdit={toggleEdit} params={params} contacts={contacts} />) }
        <FloatingActionButton
          secondary
          children={<i className="material-icons">delete</i>}
          style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 10 }}
          onTouchTap={() => handleDelete()}
        />
      </div>
    );
  }
}


export default SingleWrapper;
