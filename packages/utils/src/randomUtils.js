const { faker } = require('@faker-js/faker');
const moment = require('moment');

export function toIsoString(date) {
  var tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? "+" : "-",
    pad = function (num) {
      var norm = Math.floor(Math.abs(num));
      return (norm < 10 ? "0" : "") + norm;
    };

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    dif +
    pad(tzo / 60) +
    ":" +
    pad(tzo % 60)
  );
}

export function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export function getNewDate(dStr, days, format) {
  const currentDate = new Date(dStr);
  const dateTS = currentDate.setDate(currentDate.getDate() + days);
  switch (format) {
    case "ISO-UTC":
      return new Date(dateTS).toISOString();
    case "ISO-LOCAL":
      return toIsoString(new Date(dateTS));
    case "DATE":
      return new Date(dateTS).toISOString().split("T")[0];
    case "TS":
      return dateTS;
  }
  return null;
}
export function getSleepDate(sleepDate, startHour, rangeHour) {
  const mins = getRandomInt(0, 59).toString().padStart(2, "0");
  const hours = getRandomInt(0, rangeHour);
  console.log(sleepDate, startHour, hours, mins);
  //const sleepDateTime=new Date(sleepDate+"T"+(startHour+hours).toString().padStart(2,"0")+":"+mins);
  let sleepDateTime = new Date(
    sleepDate + "T" + startHour.toString().padStart(2, "0") + ":" + mins
  );

  console.log(sleepDateTime);

  return toIsoString(new Date(sleepDateTime.getTime() + hours * 60 * 1000));
}

// picks a random value from list
export function pickRandomValue(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// returns true or false at random
export function getRandBool() {
  return pickRandomValue([true, false]);
}

// returns random float value within specified range
export function getRandomFloat(min, max) {
  var val = getRandomInt(min, max).toString();
  if (getRandBool()) {
    val += `.${getRandomInt(1, 99)}`;
  }
  return parseFloat(val);
}

// returns a random date
export function getRandomDateTime(formatString) {
  const dt = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  if(formatString) {
    return moment(dt).format(formatString);
  } else {
    return dt.getTime()
  }
}

// returns a string
export function getRandomString(len) {
  const possibleVal = "abcdefghijklmnopqrstuvwxyz0123456789";
  var randomString = '';
  for(var i = 0; i < len; i++) {
    randomString += possibleVal.charAt(Math.floor(Math.random() * possibleVal.length))
  }
  return randomString;
}

// converts time in seconds to string HH:MM:SS
export function parseSecondsToString(val) {
  var seconds = Math.round(val%60);
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
  outputString = outputString + `${(seconds > 9)? seconds : `0${seconds}`}`;
  return outputString
}

export function getRandomAddress(state = false, city = false) {
  const adr = faker.address;
  const address_state = state? state : adr.stateAbbr();
  const zip = adr.zipCodeByState(address_state).split('-')[0];
  return `${adr.streetAddress()}, ${city? city : adr.cityName()}, ${address_state} ${zip}`
}

export function getRandomName() {
  return [faker.name.firstName(), faker.name.lastName()];
}

export function getRandomCarDetails() {
  const car = faker.vehicle.vehicle().split(' ');
  return {
    make: car[0],
    model: car.slice(1, car.length).join(" "),
    license: faker.vehicle.vrm()
  }
}

export function getRandomLatLng(est_lat, est_lng, radius) {
  return faker.address.nearbyGPSCoordinate([est_lat, est_lng], radius, false);
}

export function getRandomWord(len) {
  return faker.random.words(len);
}