const fetch = require('node-fetch');

const aboveAverage = 0.8;
const average = 0.6;
const beloveAverage = 0.4;

const getAverage = json => {
  let averageLoudness = 0;
  let sumLoudness = 0;
  let countLoudness = 0;
  for (let i = 0; i < 4; i++) {
    sumLoudness += json.sections[i].loudness;
    countLoudness++;
  }
  averageLoudness = parseFloat(sumLoudness / countLoudness).toFixed(2);
  return averageLoudness;
};
const getFirstFourSectionsEndpoint = json => {
  let arrayOfSectionsEnd = [];
  for (let i = 1; i < 5; i++) {
    arrayOfSectionsEnd.push(json.sections[i].start);
  }
  // console.log(arrayOfSectionsEnd);
  return arrayOfSectionsEnd;
};
const getFirstFourSectionsLoudness = json => {
  let arrayOfLoudnesses = [];
  for (let i = 0; i < 4; i++) {
    arrayOfLoudnesses.push(json.sections[i].loudness);
  }
  // console.log(arrayOfLoudnesses);
  return arrayOfLoudnesses;
};
const randomize = (averageLoudness, loudness) => {
  if (loudness < averageLoudness - 2) {
    return (Math.random() > beloveAverage) ? false : true;
  } else if (averageLoudness - 2 < loudness < averageLoudness + 2) {
    return (Math.random() > average) ? false : true;
  } else if (loudness > averageLoudness + 2) {
    return (Math.random() > aboveAverage) ? false : true;
  }
};
const getBeats = json => {
  const sections = getFirstFourSectionsEndpoint(json);
  const loudnesses = getFirstFourSectionsLoudness(json);
  const averageLoudness = getAverage(json);
  let firstArray = [];
  let secondArray = [];
  let thirdArray = [];
  let fourthArray = [];
  json.beats.forEach(beat => {
    if (beat.start <= sections[0]) {
      if (randomize(averageLoudness, loudnesses[0])) {
        let object = {};
        object.time = beat.start;
        object.type = 'beat';
        firstArray.push(object);
      }
    } else if (beat.start < sections[1]) {
      if (randomize(averageLoudness, loudnesses[1])) {
        let object = {};
        object.time = beat.start;
        object.type = 'beat';
        secondArray.push(object);
      }
    } else if (beat.start < sections[2]) {
      if (randomize(averageLoudness, loudnesses[2])) {
        let object = {};
        object.time = beat.start;
        object.type = 'beat';
        thirdArray.push(object);
      }
    } else if (beat.start < sections[3]) {
      if (randomize(averageLoudness, loudnesses[3])) {
        let object = {};
        object.time = beat.start;
        object.type = 'beat';
        fourthArray.push(object);
      }
    } else {
      return;
    }
  });
  return [firstArray, secondArray, thirdArray, fourthArray];
};
const trackController = (req, res) => {
  fetch('http://localhost:3000/spotify')
    .then(answer => answer.json())
    .then(data => {
      // console.log(typeof getBeats(data));
      res.status(200).send({ tracks: getBeats(data) });
    })
    .catch(console.log);
};

module.exports = trackController;
