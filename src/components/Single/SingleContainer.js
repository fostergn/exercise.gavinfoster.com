import { connect } from 'react-redux';
import { toggleSearch, toggleEdit, updateSearch } from '../../actions/actions';
import SingleWrapper from './SingleWrapper';

const mapStateToProps = (state) => {
  return {
    isEditing: state.isEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEdit: () => {
      dispatch(toggleEdit());
    },
  };
};

const SingleWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleWrapper);

export default SingleWrapperContainer;
