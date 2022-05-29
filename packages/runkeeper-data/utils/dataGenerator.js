const moment = require('moment')

// returns random integer within specified range
exports.getRandomInt = (max, min = 0) => {
  return Math.ceil(Math.random() * (max - min) + min);
}

// picks a random value from list
exports.pickRandomValue = (items) => {
  return items[Math.floor(Math.random() * items.length)];
}

// returns true or false at random
exports.getRandBool = () => {
  return this.pickRandomValue([true, false]);
}

// returns random float value within specified range
exports.getRandomFloat = (min, max) => {
  var val = this.getRandomInt(max, min).toString();

  if (this.getRandBool()) {
    val += `.${this.getRandomInt(99, 1)}`;
  }
  return parseFloat(val);
}

// returns a random date
exports.getRandomDateTime = (formatString) => {
  const dt = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  return moment(dt).format(formatString);
}

// returns a string
exports.getRandomString = (len) => {
  const possibleVal = "abcdefghijklmnopqrstuvwxyz0123456789";
  var randomString = '';
  for(var i = 0; i < len; i++) {
    randomString += possibleVal.charAt(Math.floor(Math.random() * possibleVal.length))
  }
  return randomString;
}

exports.parseSecondsToString = (val) => {
  var seconds = val%60;
  var minutes = Math.floor(val/60);
  var hours = 0;
  var outputString = '';
  if(minutes > 59) {
    hours = Math.floor(minutes/60);
    minutes = minutes%60;
  }
  if(hours > 0) {
    outputString = outputString + `${(hours > 9)? hours : `0${hours}`}:`;
  }
  outputString = outputString + `${(minutes > 9)? minutes : `0${minutes}`}:`;
  outputString = outputString + `${(seconds > 9)? Math.round(seconds) : `0${seconds}`}`;
  return outputString
}