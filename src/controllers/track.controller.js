const fetch = require('node-fetch');

const aboveAverage = 0.8;
const average = 0.6;
const beloveAverage = 0.4;

const getAverage = (json) => {
  let averageLoudness = 0;
  let sumLoudness = 0;
  let countLoudness = 0;
  for (let i=0; i < 4; i++) {
    sumLoudness += json.sections[i].loudness;
    countLoudness++;
  }
  averageLoudness = parseFloat(sumLoudness/countLoudness).toFixed(2);
  console.log(averageLoudness);
  return averageLoudness;
}
const getFirstFourSection = json => {
  let arrayOfSectionsEnd= [];
  for (let i=1; i < 5; i++) {
      arrayOfSectionsEnd.push(json.sections[i].start);
  }
  console.log(arrayOfSectionsEnd);
  return(arrayOfSectionsEnd);
}
const trackController = (req, res) => {
  fetch('http://localhost:3000/spotify')
    .then(answer => answer.json())
    .then(data => {
      getAverage(data);
      getFirstFourSection(data);
      res.status(200).send('ok');
    })
    .catch(console.log)
};

module.exports = trackController;