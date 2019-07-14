import firebase from 'firebase/app';
import 'firebase/firestore';

// Below keys are found in Firebase Console -> Project Overview -> Project Settings -> General
const config = {
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
};
firebase.initializeApp(config);

export default () => firebase.firestore();