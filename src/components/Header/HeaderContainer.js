import { connect } from 'react-redux';
import { toggleSearch, toggleEdit, updateSearch } from '../../actions/actions';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
    searchText: state.searchText,
    isEditing: state.isEditing,
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
    }
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
