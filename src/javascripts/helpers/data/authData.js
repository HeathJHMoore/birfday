import fb from 'firebase/app';
import 'firebase/auth';

import birfday from '../../components/Birthday/birthday';
import friends from '../../components/Friends/friends';

const authDiv = document.getElementById('auth');
const birfdayDiv = document.getElementById('birfday');
const birfdayNavbar = document.getElementById('navbar-button-birfday');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');

const checkLoginStatus = () => {
  fb.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      birfdayDiv.classList.remove('hide');
      birfdayNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      birfday.birfdayStringBuilder(user.uid);
      friends.getFriends(user.uid);
    } else {
      console.error('nope');
      authDiv.classList.remove('hide');
      birfdayDiv.classList.add('hide');
      birfdayNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
