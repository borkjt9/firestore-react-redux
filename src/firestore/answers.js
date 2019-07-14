import FirestoreDB from './config';
import { COLLECTION_QUESTIONS } from '../constants'

/**
 * fetchAnswer - makes requests to Firestore
 *
 * @param  {String} question
 * @return {Promise}      response from Firestore db
 */
function fetchAnswer(question) {
  // Calls to Firestore return a promise.
  // If no document exists, the promise will still resolve.
  return FirestoreDB().collection(COLLECTION_QUESTIONS).doc(question).get()
    .then((doc) => {
      if (doc.exists) {
        const { response } = doc.data();
        return response;
      } else {
        throw new Error('No Such Document');
      }
    })
    .catch(error => error);
}

export default fetchAnswer;