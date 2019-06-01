import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getRsvpsByBirthdayId = birthdayId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/rsvps.json?orderBy="birthdayId"&equalTo="${birthdayId}"`)
    .then((results) => {
      const rsvpsResults = results.data;
      const rsvps = [];
      Object.keys(rsvpsResults).forEach((RsvpsId) => {
        rsvpsResults[RsvpsId].id = RsvpsId;
        rsvps.push(rsvpsResults[RsvpsId]);
      });
      console.error(rsvps);
      resolve(rsvps);
    })
    .catch(err => reject(err));
});


export default { getRsvpsByBirthdayId };
