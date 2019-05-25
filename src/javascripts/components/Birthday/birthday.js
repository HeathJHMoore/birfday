import util from '../../helpers/util';
import birfdayData from '../../helpers/data/birfdayData';

const birfdayStringBuilder = (uid) => {
  console.error(uid);
  birfdayData.getBirfdayByUid(uid)
    .then((birthday) => {
      console.error(birthday);
      let domString = `<h1>${birthday.date}</h1>`;
      domString += `<img src=${birthday.imageUrl} alt="birthday location">`;
      domString += `<h2>${birthday.location} @ ${birthday.time}</h2>`;
      util.printToDom('event', domString);
    })
    .catch(err => console.error(err, 'could not get birfday'));
};

export default { birfdayStringBuilder };
