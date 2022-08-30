const {
  getRandomString,
  getRandomName,
  getRandomWord,
  getRandomInt,
  getRandomDateTime,
  pickRandomValue,
} = require("@dynamic-data/utils");

const address = utils.getRandomAddress();
const latlang = utils.getRandomLatLng();
const word = utils.getRandomWord(1);

export const photos_details = {
  meta: {
    code: 200,
    requestId: getRandomString(24)
  },
  response: {
    photo: {
      id: getRandomString(24),
      createdAt: getRandomDateTime(),
      source: {
        name: "Instagram",
        url: "http://instagram.com"
      },
      prefix: "https://igx.4sqi.net/img/general/",
      suffix: `/1022386_${getRandomString(43)}.jpg`,
      width: 612,
      height: 612,
      user: {
        firstName: getRandomName(),
        lastName: getRandomName(),
        countryCode: "US"
      },
      visibility: pickRandomValue(["private", "public"]),
      venue: {
        id: getRandomString(24),
        name: getRandomString(getRandomInt(15, 100)),
        contact: {},
        location: {
          address: address[0],
          crossStreet: "btwn E 80th & E 84th St",
          lat: latlang[0],
          lng: latlang[1],
          postalCode: address[1],
          cc: "US",
          city: "New York",
          state: "NY",
          country: "United States",
          formattedAddress: [
            address[0] + " (btwn E 80th & E 84th St)",
            address[1] + "," + 
            "United States"
          ]
        },
        categories: [
          {
            id: getRandomString(24),
            name: word,
            pluralName: word,
            shortName: word,
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/"+getRandomWord(2).split(' ').join('_')+"/" + word + "_",
              suffix: pickRandomValue([".png", ".jpg", ".jpeg"])
            },
            primary: true
          }
        ]
      }
    }
  }
};