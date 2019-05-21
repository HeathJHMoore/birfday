import 'bootstrap';
import '../styles/main.scss';
import auth from './components/Auth/auth';
import birfday from './components/Birthday/birthday';

const init = () => {
  auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();
