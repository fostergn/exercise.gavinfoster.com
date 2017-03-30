import { connect } from 'react-redux';
import { fetchContacts } from '../../actions/actions';
import List from './ListWrapper';

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    contactsFetched: state.contactsFetched,
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => {
      dispatch(fetchContacts());
    },
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
