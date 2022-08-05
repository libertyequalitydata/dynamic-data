const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
const count = utils.getRandomInt(3, 20);

var venueList = [];
for (var i = 0; i < count; i++) {
  const catName = utils.getRandomWord(2);
  const address = utils.getRandomAddress('NY', 'New York').split(',');
  const latlang = utils.getRandomLatLng(40.730610, -73.935242, 1000);
  venueList.push({
    id: id(),
    name: utils.getRandomWord(2),
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
        id: id(),
        name: catName,
        pluralName: catName,
        shortName: catName,
        icon: {
          prefix: "https://ss3.4sqi.net/img/categories_v2/"+ utils.getRandomWord(1) +"/"+ catName.split(" ").join("-") +"_",
          suffix: utils.pickRandomValue([".png", ".jpg", ".jpeg"])
        },
        primary: utils.getRandBool()
      }
    ]
  })
}

export const venues_nextVenues = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    nextVenues: {
      count: count,
      items: venueList
    }
  }
};