
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
  return Math.floor(Math.random() * (max - min + 1) + min);
  /*
  Math.ceil((Math.random() * (max - min)) + min); // Whole number between min + 1 and max
  */
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

export function getRandomTime(startHour, rangeHour) {
  const secs = getRandomInt(0, 59).toString().padStart(2, "0");
  const mins = getRandomInt(0, 59).toString().padStart(2, "0");
  const endHour = Math.min(startHour + rangeHour, 24);
  const hours = getRandomInt(startHour, endHour).toString().padStart(2, "0");
  return hours + ":" + mins + ":" + secs;
}

export function getSleepDate(sleepDate, startHour, rangeHour) {
  const mins = getRandomInt(0, 59).toString().padStart(2, "0");
  const hours = getRandomInt(0, rangeHour);
  // console.log(sleepDate, startHour, hours, mins);
  //const sleepDateTime=new Date(sleepDate+"T"+(startHour+hours).toString().padStart(2,"0")+":"+mins);
  let sleepDateTime = new Date(
    sleepDate + "T" + startHour.toString().padStart(2, "0") + ":" + mins
  );

  // console.log(sleepDateTime);

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
export function getRandomDateTime(formatString = null) {
  let finalDate = new Date(0);
  let maxMonthDate = new Date(0);
  finalDate.setFullYear(getRandomInt(2020, 2050));
  finalDate.setMonth(getRandomInt(0, 11));
  finalDate.setDate(1)
  maxMonthDate = finalDate
  maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
  maxMonthDate.setDate(0)
  finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
  finalDate.setHours(getRandomInt(0, 23), getRandomInt(0, 59), getRandomInt(0, 59), getRandomInt(0, 999))
  var hours = finalDate.getHours()
  var minutes = finalDate.getMinutes()
  var seconds = finalDate.getSeconds()
  if (hours < 10) hours = `0${hours}`
  if (minutes < 10) minutes = `0${hours}`
  if (seconds < 10) seconds = `0${hours}`
  var date = finalDate.getDate()
  if (date < 10) date = `0${date}`
  var month = finalDate.getMonth() + 1
  if (month < 10) month = `0${month}`


  switch (formatString) {
    case "YYYY-MM-DD":
      return `${finalDate.getFullYear()}-${month}-${date}`
    case "YYYY-MM-DDThh:mm:ss.000Z":
      return `${finalDate.getFullYear()}-${month}-${date}T${hours}:${minutes}:${seconds}.000Z`
    case "YYYY-DD-MMThh:mm:ss.000Z":
      return `${finalDate.getFullYear()}-${date}-${month}T${hours}:${minutes}:${seconds}.000Z`
    case "YYYY-MM-DDThh:mm:ss":
      return `${finalDate.getFullYear()}-${month}-${date}T${hours}:${minutes}:${seconds}`
    default:
      return finalDate.getTime()
  }
}

export function getFurtherDateTime(date, formatString = null) {
  var modifiedDate = new Date(date.split("T")[0])

  modifiedDate.setHours(date.split("T")[1].split(":")[0])
  modifiedDate.setMinutes(date.split("T")[1].split(":")[1])
  modifiedDate.setSeconds(date.split("T")[1].split(":")[2].split(".")[0])
  modifiedDate.setTime(modifiedDate.getTime() + getRandomInt(0,999999))
  
  var hours = modifiedDate.getHours()
  var minutes = modifiedDate.getMinutes()
  var seconds = modifiedDate.getSeconds()
  if (hours < 10) hours = `0${hours}`
  if (minutes < 10) minutes = `0${hours}`
  if (seconds < 10) seconds = `0${hours}`
  var date = modifiedDate.getDate()
  if (date < 10) date = `0${date}`
  var month = modifiedDate.getMonth() + 1
  if (month < 10) month = `0${month}`

  switch (formatString) {
    case "YYYY-MM-DD":
      return `${modifiedDate.getFullYear()}-${month}-${date}`
    case "YYYY-MM-DDThh:mm:ss.000Z":
      return `${modifiedDate.getFullYear()}-${month}-${date}T${hours}:${minutes}:${seconds}.000Z`
    case "YYYY-MM-DDThh:mm:ss":
      return `${modifiedDate.getFullYear()}-${month}-${date}T${hours}:${minutes}:${seconds}`
    default:
      return modifiedDate.getTime()
  }
}

// returns a string
export function getRandomString(len) {
  const possibleVal = "abcdefghijklmnopqrstuvwxyz0123456789";
  var randomString = '';
  for (var i = 0; i < len; i++) {
    randomString += possibleVal.charAt(Math.floor(Math.random() * possibleVal.length))
  }
  return randomString;
}

// converts time in seconds to string HH:MM:SS
export function parseSecondsToString(val) {
  var seconds = Math.round(val % 60);
  var minutes = Math.floor(val / 60);
  var hours = 0;
  var outputString = '';
  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
  }
  if (hours > 0) {
    outputString = outputString + `${(hours > 9) ? hours : `0${hours}`}:`;
  }
  outputString = outputString + `${(minutes > 9) ? minutes : `0${minutes}`}:`;
  outputString = outputString + `${(seconds > 9) ? seconds : `0${seconds}`}`;
  return outputString
}

export function getRandomAddress() {
  const postalCode = () => {
    let characters = "0123456789"
    let string = ""
    for (var i = 0; i < 5; i++) {
      string += characters.charAt(Math.floor(Math.random() *
        characters.length));
    }
    return string
  }

  return {
    streetNumber: getRandomInt(0, 99).toString(),
    streetName: getRandomString(getRandomInt(5, 10)),
    area: getRandomString(getRandomInt(5, 10)),
    city: getRandomString(getRandomInt(5, 10)),
    county: getRandomString(getRandomInt(5, 10)),
    postalCode: postalCode(),
    country: randomCountry({ full: true, alpha: 2 }),
  }

}
/**
 * Gets a random country
 * @param {Object} [opts = {full:false, alpha:2}] - The optional parameters for the fetching of the random country.
 * @param {boolean} [opts.full = false] - Whether the country code (US) or full name (United States of America), or both are returned.
 * @param {number} [opts.alpha = 2] - Whether ISO 3166-1 Alpha-2 (2 character code) or ISO 3166-1 Alpha-3 (3 character code is returned). ISO 3166-1 Alpha-3 allows for the representation of more places.
 * @return A random country code, full name or both.
 */
export function randomCountry(opts = {}) {
  const params = Object.assign({
    full: false,
    alpha: 2
  }, opts);
  let country = {}
  switch (params.alpha) {
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
      country = countries3[getRandomInt(0, countries3.length) - 1]
      switch (params.full) {
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
      country = countries2[getRandomInt(0, countries2.length) - 1]
      switch (params.full) {
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
  let length = getRandomInt(7, 15)
  string += characters.charAt(Math.floor(Math.random() *
    characters.length)).toUpperCase();
  for (var i = 1; i < length; i++) {
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
  let index = getRandomInt(0, car.length) - 1
  let license = ""
  let characters = "0123456789ABCDEFGHJKLMNPRSTUVWXYZ"
  for (var i = 0; i < 7; i++) {
    license += characters.charAt(Math.floor(Math.random() *
      characters.length));
  }
  return {
    make: car[index]["make"],
    model: car[index]["models"][getRandomInt(0, car[index]["models"].length) - 1],
    license: license
  }
}

export function getRandomLatLng() {
  // [Latitude, Longnitude]
  return [(((getRandomInt(0, 1800001) - 1) / 10000) - 90), (((getRandomInt(0, 3600001) - 1) / 10000) - 180)]
}

export function getRandomWord(len) {
  let string = ""
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = 0; i < len; i++) {
    string += characters.charAt(Math.floor(Math.random() *
      characters.length));
  }
  return string
}

export function randomUUID() {
  let string = ""
  let characters = "0123456789abcdef"
  for (var i = 0; i < 32; i++) {
    string += characters.charAt(Math.floor(Math.random() *
      characters.length));
    switch (i) {
      case 7:
      case 11:
      case 15:
      case 19:
        string += "-"
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
  switch (find) {
    case null:
      break
    default:
      if (find.hasOwnProperty('code')) {
        for (var i = 0; i < allCurrencies.length; i++) {
          if (allCurrencies[i].code === find.code) {
            return allCurrencies[i]
          }
        }
        return null
      } else if (find.hasOwnProperty('symbol')) {
        for (var i = 0; i < allCurrencies.length; i++) {
          if (allCurrencies[i].symbol === find.symbol) {
            return allCurrencies[i]
          }
        }
        return null
      }
  }
  switch (type) {

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
      return simepleWestcurrencies[getRandomInt(0, simepleWestcurrencies.length) - 1]
    case "ISO-4217":
      return allCurrencies[getRandomInt(0, allCurrencies.length) - 1]
    default:
      return "USD"
  }
}

export function randomIntPhone(country = null) {
  switch (country) {
    case null:
      let string = "+"

      for (var i = 0; i < 15; i++) {
        string += (getRandomInt(0, 10) - 1).toString()
      }
      return string
    default:
      let numbers = new Map()
      numbers.set("uk", "44")
      numbers.set("usa", "1")
      return numbers.get(country)
  }
}
export function randomHexString(opts = {
  len,
  upperCase: false
}) {
  let string = ""
  let characters = "0123456789abcdef"
  for (var i = 0; i < opts.len; i++) {
    switch (opts.upperCase) {
      case true:
        string += characters.charAt(Math.floor(Math.random() *
          characters.length)).toUpperCase();
        break
      case false:
        string += characters.charAt(Math.floor(Math.random() *
          characters.length));
        break
    }
  }
  return string
}

export function randomLanguage(opts) {
  const params = Object.assign({
    full: false,
    code: "ISO 639-1"
  }, opts);
  let languages = [
    {
      "ISO 639-1": "en",
      "name": "English"
    },
    {
      "ISO 639-1": "es",
      "name": "Spanish"
    },
    {
      "ISO 639-1": "de",
      "name": "German"
    },
    {
      "ISO 639-1": "fr",
      "name": "French"
    },
  ]
  let language = languages[getRandomInt(0, languages.length) - 1]
  let final = {}
  if (params.full) {
    final["name"] = language["name"]
    switch (params.code) {
      default:
        final["code"] = language["ISO 639-1"]
        break
    }
  } else {
    switch (params.code) {
      default:
        final = language["ISO 639-1"]
        break
    }
  }


  return final
}

export function getRandomTimeZone() {
  const timeZones = [
    {
      "TZ_NAME": "America/New_York",
      "STD": "-05:00",
      "DST": "-04:00",
      "OFFSET": {
        "STD": -300,
        "DST": -240
      },
      "CC": "US",
      "ABBRV": {
        "STD": "EST",
        "DST": "EDT"
      }
    },
    {
      "TZ_NAME": "Europe/London",
      "STD": "±00:00",
      "DST": "+01:00",
      "OFFSET": {
        "STD": 0,
        "DST": 60
      },
      "CC": ["GB", "GG", "IM", "JE"],
      "ABBRV": {
        "STD": "GMT",
        "DST": "BST"
      }
    },
    {
      "TZ_NAME": "Japan",
      "STD": "+09:00",
      "DST": null,
      "OFFSET": +540,
      "CC": "JP",
      "ABBRV": {
        "STD": "JST",
        "DST": null
      }
    },
  ]
  return pickRandomValue(timeZones)

}

export function getAverage(array) {
  return array.reduce((a, b) => a + b) / array.length;
} 