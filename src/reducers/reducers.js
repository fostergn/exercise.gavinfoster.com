import { TOGGLE__BUTTON } from '../actions/testAction'

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE__BUTTON:
      return Object.assign({}, state, {
         button: !state.button
       })
   default:
    return state;
  }
}

export default reducer;
