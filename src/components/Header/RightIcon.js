import React from 'react';
import { browserHistory } from 'react-router'

const RightIcon = ({location, saveEdits, isSearching, isEditing, toggleEdit}) => {

  const isSingle = location.pathname.includes('/contacts/')
  const isAdd = location.pathname.includes('/add')

  const save = () => {
    const contact = {
      firstName: document.getElementById('first-name-input'),
      lastName: document.getElementById('last-name-input'),
      phone: document.getElementById('email-input'),
      email: document.getElementById('email-input'),
    }
    saveEdits(contact);
  }

  const hiddenIcon = <i className="material-icons" style={{color:'transparent'}}>arrow_back</i>
  const arrowBackIcon = <i className="material-icons">arrow_back</i>
  const moreVertIcon = <i className="material-icons">more_vert</i>
  const searchIcon = <i className="material-icons">search</i>
  const pencilIcon = <i className="material-icons" onClick={() => toggleEdit()}>mode_edit</i>
  const saveIcon = <i onClick={() => saveEdits()} style={{paddingLeft:20}} className="material-icons">save</i>
  const cancelAndSave = <div>
                          <i onClick={() => toggleEdit()} className="material-icons">cancel</i>
                          <i onClick={() => saveEdits()} style={{paddingLeft:20}} className="material-icons">save</i>
                        </div>
  
  const rightIcon = (isSearching) ? hiddenIcon : isSingle ? (isEditing ? cancelAndSave : pencilIcon) : (isAdd ? saveIcon : searchIcon)

  return (
    rightIcon
  )
}

export default RightIcon