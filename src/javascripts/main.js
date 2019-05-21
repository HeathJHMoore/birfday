import 'bootstrap';
import '../styles/main.scss';
import fb from 'firebase/app';
import auth from './components/Auth/auth';
import birfday from './components/Birthday/birthday';
import apiKeys from './helpers/apiKeys.json';

const init = () => {
  fb.initializeApp(apiKeys.firebaseKeys);
  auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();
