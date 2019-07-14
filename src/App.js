import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchAnswer from './redux/actions/fetch-answer';
import { STATUS_ERROR } from './constants';
import logo from './logo.svg';
import './App.css';

/**
 * renderError
 *
 * @param  {String} msg Error message returned from Firestore
 */
function renderError(msg) {
  return (
    <div className="error">
      <p className = "error-text">
        {`Oh No! There was an error: ${msg}!`}
      </p>
    </div>
  );
}
class App extends Component {

  /**
   * Creates an instance of App
   */
  constructor() {
    super();
  }

  render() {
    const { answerDetail, dispatch } = this.props;
    const { response, status, error } = answerDetail
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="hello-firestore-question">
            Hello Firestore! How are you?
          </p>
            <button
              className="firestore-response-btn"
              onClick={() => dispatch(fetchAnswer())}
            >
              <p>
                Get Firestore Answer
              </p>
            </button>
            <p className="firestore-response-text">
              {`Firestore says: '${response}'`}
            </p>
            { status === STATUS_ERROR && renderError(error.message)}
        </header>
      </div>
    );
  }
}


/**
 * mapStateToProps/
 * https://react-redux.js.org/using-react-redux/connect-mapstate
 * As the first argument passed in to connect, mapStateToProps is used for
 * selecting the part of the data from the store that the connected component needs.
 * @param  {any} state state found in redux store
 */
function mapStateToProps(state) {
  return {
    answerDetail: state.answerDetail,
  };
}
export default connect(mapStateToProps)(App);
