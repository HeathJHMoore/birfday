import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendResults = results.data;
      const friends = [];
      console.error(friendResults);
      Object.keys(friendResults).forEach((friendId) => {
        friendResults[friendId].id = friendId;
        friends.push(friendResults[friendId]);
      });
      console.error(friends);
      resolve(friends);
    })
    .catch(err => reject(err));
});

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, friendObject);

export default { addNewFriend, getFriendsByUid };
