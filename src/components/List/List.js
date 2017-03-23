import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { browserHistory } from 'react-router';

const List = () => {

  const addNavigate = () => {
    browserHistory.push('/add')
  }

  const singleNavigate = ( id ) => {
    browserHistory.push(`/contacts/${id}`)
  }

  return (
    <div>
      <h1>List</h1>
      <ul>
          <li onClick={() => singleNavigate('gavin')}>Gavin Foster</li>
          <li onClick={() => singleNavigate('jerry')}>Uncle Jerry</li>
          <li onClick={() => singleNavigate('mommy')}>Mom</li>
      </ul>
      <FloatingActionButton 
        children={<i className="material-icons">add</i>}
        style={{position:'absolute', bottom:'10px', right:'10px'}}
        onTouchTap={() => addNavigate()}
      />
    </div>
  );
}

export default List;
