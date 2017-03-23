import { connect } from 'react-redux';
import { toggleSearch } from '../../actions/actions';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearch: () => {
      dispatch(toggleSearch());
    },
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
