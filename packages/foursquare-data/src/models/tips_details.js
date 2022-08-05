const utils = require('@dynamic-data/utils');

const id = utils.getRandomString(24);
const address = utils.getRandomAddress('NY', 'New York').split(',');
const latlang = utils.getRandomLatLng(40.730610, -73.935242, 1000);
const word = utils.getRandomWord(1);

export const tips_details = {
  meta: {
    code: 200,
    requestId: utils.getRandomString(24)
  },
  response: {
    tip: {
      id: id,
      createdAt: 1404847799,
      text: utils.getRandomWord(utils.getRandomInt(5, 15)) + ".",
      type: "user",
      canonicalUrl: "https://foursquare.com/item/"+id,
      lang: "en",
      saves: {
        count: 1,
        groups: [],
        summary: "1 Save"
      },
      venue: {
        id: utils.getRandomString(24),
        name: utils.getRandomWord(2),
        location: {
          address: address[0],
          crossStreet: "btwn Delancey & Broome St",
          lat: latlang[0],
          lng: latlang[1]
        },
        venuePage: {
          id: utils.getRandomString(8)
        },
        categories: [
          {
            id: utils.getRandomString(24),
            name: word,
            pluralName: word,
            shortName: word,
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/"+utils.getRandomWord(2).split(' ').join('_')+"/"+word+"_",
              suffix: utils.pickRandomValue([".png", ".jpg", ".jpeg"])
            },
            primary: true
          }
        ]
      }
    }
  }
};