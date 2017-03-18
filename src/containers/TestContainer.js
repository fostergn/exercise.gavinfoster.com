import { connect } from 'react-redux';
import { toggleButton } from '../actions/testAction';
import TestComponent from '../components/TestComponent'

  console.log('toggle button: ', toggleButton);

const mapStateToProps = (state) => {
  console.log('state:', state);
  return {
    button: state.button
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleButton: () => {
      dispatch(toggleButton())
    }
  }
}

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent)

export default TestContainer
