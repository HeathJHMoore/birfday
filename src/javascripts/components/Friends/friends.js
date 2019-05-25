import firebase from 'firebase/app';
import 'firebase/auth';

import friendsData from '../../helpers/data/friendsData';

import util from '../../helpers/util';

const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('birfday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
    })
    .catch(err => console.error(err, 'no new friend for you'));
  console.error(newFriend);
};

const newFriendButton = () => {
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = () => {
  const domString = '<button id="add-friends" class="btn btn-danger">Add Friend</button>';
  util.printToDom('friends', domString);
  document.getElementById('add-friends').addEventListener('click', newFriendButton);
};

export default { showFriends };
