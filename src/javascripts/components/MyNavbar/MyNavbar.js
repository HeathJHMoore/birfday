import fb from 'firebase/app';
import 'firebase/auth';

const navbarEvents = () => {
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', (e) => {
      if (e.target.id === 'navbar-button-logout') {
        fb.auth().signOut()
          .then(() => {
            console.error('bye');
          })
          .catch(err => console.error('you still logged in!', err));
      }
    });
  }
};

export default { navbarEvents };
