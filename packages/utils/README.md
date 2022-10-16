
<div  align="center">
<h1>UTILS</h1>
<p>Utility functions that provide generic faker functions for all packages
<br/>
These functions should be used and expanded as much as possible when developing the dynamic data fakers
</p>
</div>
<hr/>

### Table of Contents
 - [Usage](#usage)
 - [Functions](#functions)
	 - [toIsoString(date)](#toisostring)
	 - [getRandomInt(min, max)](#getrandomint)
	 - [getNewDate(dStr, days, format)](#getnewdate)
	 - [getRandomTime(startHour, rangeHour)](#getrandomtime)
	 - [getSleepDate(sleepDate, startHour, rangeHour)](#getsleepdate)
	 - [pickRandomValue(items)](#pickrandomvalue)
	 - [getRandBool()](#getrandbool)
	 - [getRandomFloat(min, max)](#getrandomfloat)
	 - [getRandomDateTime(formatString = null)](#getrandomdatetime)
	 - [getFurtherDateTime(date, formatString = null)](#getfurtherdatetime)
	 - [getRandomString(len)](#getrandomstring)
	 - [parseSecondsToString(val)](#parsesecondstostring)
	 - [getRandomAddress()](#getrandomaddress)
	 - [randomCountry(opts = {})](#randomcountry)
	 - [getRandomName()](#getrandomname)
	 - [getRandomCarDetails()](#getrandomcardetails)
	 - [getRandomLatLng()](#getrandomlatlng)
	 - [getRandomWord(len)](#getrandomword)
	 - [randomUUID()](#randomuuid)
	 - [randomCurrency(type, find = null)](#randomcurrency)
	 - [randomIntPhone(country = null)](#randomintphone)
	 - [randomHexString(opts)](#randomhexstring)
	 - [randomLanguage(opts)](#randomlanguage)
	 - [getRandomTimeZone()](#getrandomtimezone)
	 - [getAverage(array)](#getaverage)

  

## Usage

```

// CJS/Node

const {getRandomTimeZone} =require("@dynamic-data/utils");

const UTILS =require("@dynamic-data/utils"); // All objects...

const timezone = getRandomTimeZone()

const timezone2 = UTILS.getRandomTimeZone()

```

  

```

// ESM/React

import {getRandomTimeZone} from "@dynamic-data/utils";

import UTILS from "@dynamic-data/utils"; // All objects...

const timezone = getRandomTimeZone()

const timezone2 = UTILS.getRandomTimeZone()

```

## Functions

### toIsoString

desc: **returns a given date in an ISO format**

  

params:

- date - the date to return as an ISO string

  

example return:

```

2022-04-21T12:42:51+5:00

```

  <hr/>

### getRandomInt

desc: **returns a random Integer between 2 values**

  

params:

- min - minimum integer to be returned

- max - maximum integer to be returned

  

example return:

```

4562

```

  <hr/>

### getNewDate

desc: **returns a date a set amount of days into the future**

  

params:

- dStr - Base date to find a date in the future from

- days - amount of days to be added to the date

- format - the format to return the date as

  

example return:

```

2022-04-21T12:42:51+5:00

```

  <hr/>
  
### getRandomTime

desc: **gets a random 24-hour timestamp**

  

params:

- startHour - Start hour to find a timestamp from

- rangeHour- Maximum amount of hours that can be added to startHour to find a timestamp between

  

example return:

```

12:42:51

```

  <hr/>
  
### getSleepDate

desc: **returns a date-time a couple of hours ahead to represent the end of a sleep period**

  

params:

- sleepDate - date of the beginning of the sleep period

- startHour - start hour of the sleep period

- rangeHour - maximum amount of hours the sleep period could last for

  

example return:

```

2022-04-21T12:42:51+5:00

```
<hr/>
  

### pickRandomValue

desc: **returns a random value from an array**

  

params:

- items - the array of items to pick a random value from

  

example return:

```

item1

```
<hr/>
  

### getRandBool

desc: **returns a random boolean value**

  

params:

- NONE

  

example return:

```

true

```
<hr/>
  

### getRandomFloat

desc: **returns a random float number with 1-2 decimal places**

  

params:

- min - minimum number in the range

- max - maximum number in the range

  

example return:

```

12.5

```
<hr/>
  

### getRandomDateTime

desc: **returns a random date-time**

  

params:

- formatString - string format for the data to be returned as, e.g. YYYY-MM-DDThh:mm:ss

  

example return:

```

2022-04-21T12:42:51

```
<hr/>
  

### getFurtherDateTime

desc: **returns a date-time further than the one provided**

  

params:

- date - original date to get a new date further from

- formatString - string format for the data to be returned as, e.g. YYYY-MM-DDThh:mm:ss

  

example return:

```

2022-04-21T12:42:51

```
<hr/>
  

### getRandomString

desc: **returns a random string**

  

params:

- len - length of the string to be returned, e.g. SIMPLE WEST ISO-4217

  

example return:

```

sdaf6789dafs9678adfs

```
<hr/>
  

### parseSecondsToString

desc: **converts time in seconds to string HH:MM:SS**

  

params:

- val - the length of time (in seconds) to be converted into HH:MM:SS format

  

example return:

```

12:05:35

```
<hr/>
  

### getRandomAddress

desc: **Generates a random address**

  

params:

- NONE

  

example return:

```

{

"streetNumber": "15",

"streetName": "sjcuiuashd",

"area": "jfjhklafds",

"city": "pofdsios",

"county": "jkfdshjdf",

"postalCode": "79854",

"country": {

"code": "GB",

"full": "United Kingdom of Great Britain and Northern Ireland"

}

}

```
<hr/>
  

### randomCountry

desc: **Fetches a random country and country code**

  

params:

- opts

- full (bool) - whether the full name of the country is returned

- alpha (int) - which alpha code of ISO-3166 is watned

  

example return:

```

{

"code": "GBR",

"full": "United Kingdom of Great Britain and Northern Ireland"

}

```
<hr/>
  

### getRandomName

desc: **Generates a random Name**

  

params:

- NONE

  

example return:

```

Alex

```
<hr/>
  

### getRandomCarDetails

desc: **Gets some random car details (make and model)**

  

params:

- NONE

  

example return:

```

{

"make": "Ferrari"

"model": "812 GTS"

}

```
<hr/>
  

### getRandomLatLng

desc: **Gets a random pair of Latitude Longitude values**

  

params:

- NONE

  

example return:

```

[36.5168, 84.9176]

```
<hr/>
  

### getRandomWord

desc: **Gets a random Words**

  

params:

- len (int) - length of the word

  

example return:

```

aBUSUgsuasSk

```
<hr/>
  

### randomUUID

desc: **Gets a random UUID(Universally unique identifier)**

  

params:

- NONE

  

example return:

```

E621E1F8-C36C-495A-93FC-0C247A3E6E5F

```
<hr/>
  

### randomCurrency

desc: **Gets a random international country**

- code - ISO code of currency

- symbol - symbol for the currency

- end - whether the symbol appeared at the end or beginning of string

  

params:

- type (string) - desired subset of currencies to search, e.g. SIMPLE WEST ISO-4217

- find (bool) - whether the entire data object is returned

  

example return:

```

{

code: "GBP",

symbol: "£",

end: false

}

```

  <hr/>

### randomIntPhone

desc: **Either gets a random international phone number or random phone international prefix**

  

params:

- country (string) - country code of desired country, e.g. uk

  

example return:

```

"44" or "+124512687413259"

```
<hr/>

### randomHexString

desc: **Gets a random hexadecimal string**

  

params:

- opts :

- len (int) - length of the string

- upperCase (bool) - Whether the string uses uppercase characters or not

  

example return:

```

ABC23D6

```
<hr/>
  

### randomLanguage

desc: **Gets a random language**

- name - English Name of Language

- ISO 639-1 - 2 letter code of language

  

params:

- opts :

- full (bool) - whether the entire language record is returned

- code (string) - ISO codes that represent a language e.g. ISO 639-1

  

example return:

```

{

"ISO 639-1": "fr",

"name": "French"

},

```
<hr/>
  

### getRandomTimeZone

desc: **Gets a random timezone**

- TimeZone Name

- Standard Time UTC offset (hours and minutes)

- Daylight Saving Time UTC offset (hours and minutes)

- Country Codes associated with TimeZone

- Time zone abbreviations

  

params:

- NONE

  

example return:

```

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

}

```
<hr/>

### getAverage

desc: **Calculates the average value in an array of numeric values**

  

params:

- array - the array of numeric values to calculate the average of

  

example return:

```

50.6

```
<hr/>
