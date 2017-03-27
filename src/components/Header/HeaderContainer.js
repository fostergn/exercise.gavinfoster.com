import { connect } from 'react-redux';
import { toggleSearch, updateSearch } from '../../actions/actions';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
    searchText: state.searchText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearch: () => {
      dispatch(toggleSearch());
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
