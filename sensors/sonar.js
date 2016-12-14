let Sonar = require('raspi-sonar').Sonar;
let sonarPin = new Sonar(29);

sonarPin.read(function(duration) {
  let distance = 343.0 * duration / 1000000 * .5;
  console.log('duration: ' + duration + ' distance: ' + distance + 'm');
});
