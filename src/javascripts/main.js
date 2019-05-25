import 'bootstrap';
import '../styles/main.scss';
import fb from 'firebase/app';
import auth from './components/Auth/auth';
import apiKeys from './helpers/apiKeys.json';
import MyNavbar from './components/MyNavbar/MyNavbar';
import authData from './helpers/data/authData';

const init = () => {
  fb.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.authStringBuilder();
};

init();
