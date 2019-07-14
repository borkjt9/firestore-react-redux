import {
  FETCH_ANSWER
} from '../../constants';

/**
 * fetchAnswer
 *
 * @return {any}      feeds into reducer
 */
export default function fetchAnswer() {
  return {
    type: FETCH_ANSWER,
    payload: 'Hey! This is a placeholder.',
  };
}