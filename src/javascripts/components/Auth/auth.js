import fb from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';
import googleImage from './download.png';

const signMeIn = () => {
  const provider = new fb.auth.GoogleAuthProvider();
  fb.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '<button id="google-auth" class="btn btn-danger p-0">';
  domString += `<img src=${googleImage}/>`;
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
