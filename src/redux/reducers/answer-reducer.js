// Use constants to reduce fat finger bugs.
import {
  FETCH_ANSWER_START,
  FETCH_ANSWER_FULFILLED,
  FETCH_ANSWER_ERRORED,
} from '../../constants';

/**
 * Updates our Redux store with the new payload attached to a given action.
 * @param  {Object} state current state for our redux store.
 * @param  {ObjecT} action contains payload and type.
 */
export default function (
  state = {
    response: 'N/A',
    status: '',
    error: {}
  }, action
) {
  switch (action.type) {
    case FETCH_ANSWER_START:
    case FETCH_ANSWER_FULFILLED:
    case FETCH_ANSWER_ERRORED:
      // es6 destructuring uses elipses to transform objects into key-value pairs
      // any key-value pair in the action's payload will be assigned to the state
      return { ...state, ...action.payload }
    default:
      return state;
  }
}