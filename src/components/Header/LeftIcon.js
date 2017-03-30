import React from 'react';
import { browserHistory } from 'react-router'

const LeftIcon = ({isSingle, isAdd, isSearching, toggleSearch, updateSearch}) => {
  
  const hiddenIcon = <i onClick={()=>leftIconTouch()} className="material-icons" style={{color:'transparent'}}>arrow_back</i>
  const arrowBackIcon = <i onClick={()=>leftIconTouch()} className="material-icons">arrow_back</i>
  const leftIcon = (isSingle || isAdd || isSearching)  ? arrowBackIcon : hiddenIcon

  const leftIconTouch = () => {
    updateSearch('')
    if (isSingle || isAdd) { browserHistory.push('/contacts') }
    else { toggleSearch() }
  }

  return (
    leftIcon
  )
}

export default LeftIcon