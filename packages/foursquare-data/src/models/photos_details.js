const utils = require('@dynamic-data/utils');

const name = utils.getRandomName();
const address = utils.getRandomAddress('NY', 'New York').split(',');
const latlang = utils.getRandomLatLng(40.730610, -73.935242, 1000);
const word = utils.getRandomWord(1);

export const photos_details = {
  meta: {
    code: 200,
    requestId: utils.getRandomString(24)
  },
  response: {
    photo: {
      id: utils.getRandomString(24),
      createdAt: utils.getRandomDateTime(),
      source: {
        name: "Instagram",
        url: "http://instagram.com"
      },
      prefix: "https://igx.4sqi.net/img/general/",
      suffix: `/1022386_${utils.getRandomString(43)}.jpg`,
      width: 612,
      height: 612,
      user: {
        firstName: name[0],
        lastName: name[1],
        countryCode: "US"
      },
      visibility: utils.pickRandomValue(["private", "public"]),
      venue: {
        id: utils.getRandomString(24),
        name: utils.getRandomString(utils.getRandomInt(15, 100)),
        contact: {},
        location: {
          address: address[0],
          crossStreet: "btwn E 80th & E 84th St",
          lat: latlang[0],
          lng: latlang[1],
          postalCode: address[2].split(' ')[2],
          cc: "US",
          city: "New York",
          state: "NY",
          country: "United States",
          formattedAddress: [
            address[0] + " (btwn E 80th & E 84th St)",
            address[1] + "," + address[2],
            "United States"
          ]
        },
        categories: [
          {
            id: utils.getRandomString(24),
            name: word,
            pluralName: word,
            shortName: word,
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/"+utils.getRandomWord(2).split(' ').join('_')+"/" + word + "_",
              suffix: utils.pickRandomValue([".png", ".jpg", ".jpeg"])
            },
            primary: true
          }
        ]
      }
    }
  }
};