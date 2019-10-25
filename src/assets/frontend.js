const response = {
  track: [
    [{ time: 2.329, type: 'beat' }, { time: 3.329, type: 'bar' }, { time: 5.2345, type: 'bar'}], //segment
    [{ time: 6.329, type: 'beat' }, { time: 8.329, type: 'bar' }, { time: 9.329, type: 'bar'}], //segment
    [{ time: 20.329, type: 'beat' }, { time: 21.329, type: 'bar' }, { time: 23.329, type: 'bar'}],
    [{ time: 24.329, type: 'beat' }, { time: 25.329, type: 'bar' }, { time: 26.329, type: 'bar'}],
  ],
};
response.track.forEach(segment => {
  segment.forEach(item => {
    if(item.type === 'bar') {

    }
  })
});
