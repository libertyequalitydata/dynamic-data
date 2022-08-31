
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
    return dt.getTime()
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
  const postalCode = () => {
    let characters = "0123456789"
    let string = ""
    for (var i = 0; i<5; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  }

  return {
    streetNumber: getRandomInt(0,99).toString(),
    streetName: getRandomString(getRandomInt(5,10)),
    area: getRandomString(getRandomInt(5,10)),
    city: getRandomString(getRandomInt(5,10)),
    county: getRandomString(getRandomInt(5,10)),
    postalCode: postalCode(),
    country: randomCountry({full: true, alpha: 2}),
  }

}

export function randomCountry(opts = {
  full : false,
  alpha: 2
}) {
  let country = {}
  switch(opts.alpha){
    case 3:
      let countries3 = [
        {
          code: "GBR",
          full: "United Kingdom of Great Britain and Northern Ireland"
        },
        {
          code: "USA",
          full: "United States of America"
        },
      ]
      country = countries3[getRandomInt(0,countries3.length)-1]
      switch(opts.full){
        case false:
          return country["code"]
        case true:
          return country["full"]
        default:
          return country
      }
    default:
      let countries2 = [
        {
          code: "GB",
          full: "United Kingdom of Great Britain and Northern Ireland"
        },
        {
          code: "US",
          full: "United States of America"
        },
      ]
      country = countries2[getRandomInt(0,countries2.length)-1]
      switch(opts.full){
        case false:
          return country["code"]
        case true:
          return country["full"]
        default:
          return country
      }

  }

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

export function randomUUID() {
  let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
}

export function randomCurrency(type, find = null) {
  //Needs to be completed
  let allCurrencies = [
    {
      code: "AED",
      symbol: "د.إ",
      end: true
    },
    {
      code: "AFN",
      symbol: "؋",
      end: null
    },
    {
      code: "ALL",
      symbol: null,
      end: null
    },
    {
      code: "AMD",
      symbol: "֏",
      end: true
    },
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BOV",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHE",
    "CHF",
    "CHW",
    "CLF",
    "CLP",
    "COP",
    "COU",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    {
      code: "EUR",
      symbol: "€",
      end: false
    },
    "FJD",
    "FKP",
    {
      code: "GBP",
      symbol: "£",
      end: false
    },
    "GEL",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MXV",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "RON",
    "RSD",
    "CNY",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SLE",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TZS",
    "UAH",
    "UGX",
    {
      code: "USD",
      symbol: "$",
      end: false
    },
    "USN",
    "UYI",
    "UYU",
    "UYW",
    "UZS",
    "VED",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XCD",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"
  ]
  switch (find){
    case null:
      break
    default:
      if (find.hasOwnProperty('code')){
        for (var i = 0; i <allCurrencies.length; i++){
          if (allCurrencies[i].code === find.code){
            return allCurrencies[i]
          }
        }
        return null
      } else if (find.hasOwnProperty('symbol')){
        for (var i = 0; i <allCurrencies.length; i++){
          if (allCurrencies[i].symbol === find.symbol){
            return allCurrencies[i]
          }
        }
        return null
      }
  }
  switch(type){

    case "SIMPLE WEST ISO-4217":
      let simepleWestcurrencies = [
        {
          code: "GBP",
          symbol: "£",
          end: false
        },
        {
          code: "USD",
          symbol: "$",
          end: false
        },
        {
          code: "EUR",
          symbol: "€",
          end: false
        },
      ]
      return simepleWestcurrencies[getRandomInt(0,simepleWestcurrencies.length)-1]
    case "ISO-4217":
      return allCurrencies[getRandomInt(0,allCurrencies.length)-1]
    default:
      return "USD"
  }
}

export function randomIntPhone(country = null){
  switch(country){
    case null:
      let string = "+"

      for (var i = 0; i<15; i++){
        string += (getRandomInt(0,10)-1).toString()
      }
      return string
    default:
      let numbers = new Map()
      numbers.set("uk", "44")
      numbers.set("usa", "1")
      return numbers.get(country)
  }
}