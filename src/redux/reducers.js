import { combineReducers } from 'redux';
import AnswerReducer from './reducers/answer-reducer';

/**
 * Think of appReducer as the 'master' reducer
 * It combines each of our individual reducers, like 'answer-reducer',
 * into a single reducer
 */
const appReducer = combineReducers({
  answerDetail: AnswerReducer
});

/** rootReducer
 * @param  {Object} state Current redux state
 * @param  {String} action The action about to be passed to the redux store
 */
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
