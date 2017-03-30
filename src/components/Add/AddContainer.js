import { connect } from 'react-redux';
import { addContact } from '../../actions/actions';
import Add from './Add';

const mapStateToProps = (state) => {
  return {
    // isEditing: state.isEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: () => {
      dispatch(addContact());
    },
  };
};

const AddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);

export default AddContainer;
