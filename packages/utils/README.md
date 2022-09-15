# `utils`

> Utility functions that provide generic faker functions for all packages

## Functions
### toIsoString
### getRandomInt
### getNewDate
### getSleepDate
### pickRandomValue
### getRandBool
### getRandomFloat
### getRandomDateTime
### getFurtherDateTime
### getRandomString
### parseSecondsToString
### getRandomAddress
### randomCountry
### getRandomName
### getRandomCarDetails
### getRandomLatLng
desc: **Gets a random UUID(Universally unique identifier)**
params: 
- NONE 

example return: 
```
E621E1F8-C36C-495A-93FC-0C247A3E6E5F
```

### getRandomWord
desc: **Gets a random Words**

params: 
-   len  (int) - length of the word

example return: 
```
aBUSUgsuasSk
```

### randomUUID
desc: **Gets a random UUID(Universally unique identifier)**
params: 
- NONE 

example return: 
```
E621E1F8-C36C-495A-93FC-0C247A3E6E5F
```

### randomCurrency
desc: **Gets a random international country**
- code - ISO code of currency
- symbol - symbol for the currency 
- end - whether the symbol appeared at the end or beginning of string
params: 
-   type  (string) - desired subset of currencies to search, e.g. SIMPLE WEST ISO-4217
-   find  (bool) - whether the entire data object is returned

example return: 
```
{
    code: "GBP",
    symbol: "£",
    end: false
}
```

### randomIntPhone
desc: **Either gets a random international phone number or random phone international prefix**

params: 
-   country (string) - country code of desired country, e.g. uk

example return: 
```
"44" or "+124512687413259"
```
### randomHexString
desc: **Gets a random hexadecimal string**

params: 
- opts :
    -   len (int) - length of the string
    -   upperCase (bool) - Whether the string uses uppercase characters or not

example return: 
```
ABC23D6
```

### randomLanguage
desc: **Gets a random language**
- name - English Name of Language
- ISO 639-1 - 2 letter code of language

params: 
- opts :
    -   full (bool) - whether the entire language record is returned
    -   code (string) - ISO codes that represent a language e.g. ISO 639-1

example return: 
```
{
      "ISO 639-1": "fr",
      "name": "French"
},
```

### getRandomTimeZone
desc: **Gets a random timezone**
- TimeZone Name
- Standard  Time UTC offset (hours and minutes)
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

## Usage
```
// CJS/Node

const {ActivitySummary} =require("@prifina/oura-data/mockups");
const {ActivitySummaryAsync} =require("@prifina/oura-data/mockups/ActivitySummaryAsync");
const OURA =require("@prifina/oura-data"); // All objects...

```

```
// ESM/React

import {ActivitySummary} from "@prifina/oura-data/mockups";
import {ActivitySummaryAsync} from "@prifina/oura-data/mockups/ActivitySummaryAsync";
import OURA from "@prifina/oura-data"; // All objects...

```
