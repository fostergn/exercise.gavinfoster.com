import { connect } from 'react-redux';
import { toggleSearch } from '../../actions/actions';
import List from './List';

const mapStateToProps = (state) => {
  return {
    view: state.view,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearch: () => {
      dispatch(toggleSearch());
    },
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
