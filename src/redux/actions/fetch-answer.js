// Use constants to reduce fat finger bugs.
import {
  FETCH_ANSWER_START,
  FETCH_ANSWER_FULFILLED,
  FETCH_ANSWER_ERRORED,
  STATUS_PENDING,
  STATUS_ERROR,
  STATUS_SUCCESS
  } from '../../constants';

// Start, Fulfilled, and Error Actions all report on the status of a request.
// They are called during the request to Firestore.
// They feed into the Answer Reducer.

/**
 * fetchAnswerStart
 *
 * @return {any}      feeds into reducer
 */
export function fetchAnswerStart() {
  return {
    type: FETCH_ANSWER_START,
    payload: {status: STATUS_PENDING},
  };
}

/**
 * fetchAnswerFulfilled
 *
 * @param  {Object} response
 * @return {any}      feeds into reducer
 */
export function fetchAnswerFulfilled(response) {
  return {
    type: FETCH_ANSWER_FULFILLED,
    payload: { status: STATUS_SUCCESS, response },
  };
}

/**
 * fetchActiveSitesErrored
 *
 * @param  {Error} error code & message
 * @return {any}      feeds into reducer
 */
export function fetchAnswerErrored(error) {
  return {
    type: FETCH_ANSWER_ERRORED,
    payload: { status: STATUS_ERROR, error } ,
  };
}