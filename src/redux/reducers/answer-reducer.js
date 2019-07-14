// Use constants to reduce fat finger bugs.
import {
  FETCH_ANSWER
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
    case FETCH_ANSWER:
      return { ...state, ...{response: action.payload} }
    default:
      return state;
  }
}