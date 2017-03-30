import { connect } from 'react-redux';
import { toggleSearch, toggleEdit, updateSearch, fetchContacts } from '../../actions/actions';
import SingleWrapper from './SingleWrapper';

const mapStateToProps = (state) => {
  return {
    isEditing: state.isEditing,
    contacts: state.contacts,
    contactsFetched: state.contactsFetched,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEdit: () => {
      dispatch(toggleEdit());
    },
    fetchContacts: () => {
      dispatch(fetchContacts());
    },
  };
};

const SingleWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleWrapper);

export default SingleWrapperContainer;
