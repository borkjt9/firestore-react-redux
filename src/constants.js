// You can literally assign constants here to any values.
// It doesn't matter as long as the references make sense.

// Action Types. Feed into the reducer.
export const FETCH_ANSWER_START = 'FETCH_ANSWER_START';
export const FETCH_ANSWER_FULFILLED = 'FETCH_ANSWER_FULFILLED';
export const FETCH_ANSWER_ERRORED = 'FETCH_ANSWER_ERRORED';

// Statuses of requests to Firestore. Feed into the Reducer.
export const STATUS_PENDING = 'STATUS_PENDING';
export const STATUS_ERROR = 'STATUS_ERROR';
export const STATUS_SUCCESS = 'STATUS_SUCCESS';

export const COLLECTION_QUESTIONS = 'questions';