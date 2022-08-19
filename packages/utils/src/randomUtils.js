
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

export function getRandomAddress() {
  const zipCode = () => {
    let characters = "0123456789"
    let string = ""
    for (var i = 0; i<5; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  }


  let array =  [getRandomString(getRandomInt(15,20))]
  array.push(zipCode)

  return array
}

export function getRandomName() {
  let string = ""
  let characters = "abcdefghijklmnopqrstuvwxyz"
  let length = getRandomInt(7,15)
  string += characters.charAt(Math.floor(Math.random() * 
    characters.length)).toUpperCase();
  for (var i = 1; i<length; i++){
    string += characters.charAt(Math.floor(Math.random() * 
    characters.length));
  }
  return string
}

export function getRandomCarDetails() {
  const car = [
    {
      "make": "BMW",
      "models": [
        "X1 xDrive28i",
        "X3 M",
        "X4 M40i",
        "530i xDrive Sedan",
        "330i Sedan",
        "330e Sedan",
        "840i xDrive Coupe",
        "M4 Competition Coupe",
        "430i xDrive Convertible"
      ]
    }, {
      "make": "Ferrari",
      "models": [
        "812 GTS",
        "296 GTB",
        "SF90 Stradale",
        "SF90 Spider",
        "F8 Tributo",
        "F8 Spider",
        "Roma",
        "Portofino M"
      ]
    }, {
      "make": "Lamborghini",
      "models": [
        "Aventador",
        "Huracan",
        "Urus"
      ]
    }
  ]
  let index = getRandomInt(0,car.length)-1
  let license = ""
  let characters = "0123456789ABCDEFGHJKLMNPRSTUVWXYZ"
  for (var i = 0; i<7; i++){
    license += characters.charAt(Math.floor(Math.random() * 
    characters.length));
  }
  return {
    make: car[index]["make"],
    model: car[index]["models"][getRandomInt(0,car[index]["models"].length)-1],
    license: license
  }
}

export function getRandomLatLng() {
  return [(((getRandomInt(0,1800001)-1)/10000)-90),(((getRandomInt(0,3600001)-1)/10000)-180)]
}

export function getRandomWord(len) {
  let string = ""
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = 0; i<len; i++){
    string += characters.charAt(Math.floor(Math.random() * 
    characters.length));
  }
  return string
}