import FirestoreDB from './config';
import { COLLECTION_QUESTIONS } from '../constants'
import {
  fetchAnswerStart,
  fetchAnswerFulfilled,
  fetchAnswerErrored,
} from '../redux/actions/fetch-answer';

/**
 * fetchAnswer - makes requests to Firestore
 *
 * @param  {Function} dispatch Redux function dispatch
 * @param  {String} question the name of the document we are querying
 * @return {any}      feeds into reducer
 */
export default function fetchAnswer(dispatch, question) {
  dispatch(fetchAnswerStart());
  // Calls to Firestore return a promise.
  // If no document exists, the promise will still resolve.
  FirestoreDB().collection('questions').doc(question).get()
    .then((doc) => {
      if (doc.exists) {
        const { response } = doc.data();
        dispatch(fetchAnswerFulfilled(response));
      } else {
        throw new Error('No Such Document');
      }
    })
    .catch((error) => {
      // List of Firestore errors: https://firebase.google.com/docs/storage/web/handle-errors
      dispatch(fetchAnswerErrored(error));
    });
}