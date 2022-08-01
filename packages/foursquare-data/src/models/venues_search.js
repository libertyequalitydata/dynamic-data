const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
const name = utils.getRandomName();
const address = utils.getRandomAddress('NY', 'New York').split(',');
const latlang = utils.getRandomLatLng(40.730610, -73.935242, 1000);
const word = utils.getRandomWord(2);

export const venues_search = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    venues: [
      {
        id: id(),
        name: name[0],
        location: {
          address: address[0],
          crossStreet: "btwn Houston & Stanton St",
          lat: latlang[0],
          lng: latlang[1],
          labeledLatLngs: [
            {
              label: "display",
              lat: latlang[0],
              lng: latlang[1]
            }
          ],
          distance: utils.getRandomInt(5, 50),
          postalCode: address[2].split(' ')[2],
          cc: "US",
          city: "New York",
          state: "NY",
          country: "United States",
          formattedAddress: [
            address[0] + " (btwn Houston & Stanton St)",
            address[1] + "," + address[2],
            "United States"
          ]
        },
        categories: [
          {
            id: id(),
            name: word,
            pluralName: word,
            shortName: word,
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/"+utils.getRandomWord(2).split(' ').join('_')+"/" + word + "_",
              suffix: utils.pickRandomValue([".png", ".jpg", ".jpeg"])
            },
            primary: true
          }
        ],
        venuePage: {
          id: utils.getRandomInt(100000, 999999).toString()
        }
      }
    ]
  }
};