import { connect } from 'react-redux';
import { toggleSearch, updateContact, toggleEdit, updateSearch, addContact } from '../../actions/actions';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
    searchText: state.searchText,
    isEditing: state.isEditing,
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearch: () => {
      dispatch(toggleSearch());
    },
    toggleEdit: () => {
      dispatch(toggleEdit());
    },
    updateSearch : (text) => {
      dispatch(updateSearch(text));
    },
    addContact : (contact) => {
      dispatch(addContact(contact));
    },
    updateContact : (contact) => {
      dispatch(updateContact(contact));
    },
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
