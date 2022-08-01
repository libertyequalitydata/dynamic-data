const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
const count = utils.getRandomInt(5, 15);
let venueList = [];
for (let i = 0; i < count; i++) {
  const address = utils.getRandomAddress('NY', 'New York').split(',');
  const latlang = utils.getRandomLatLng(40.730610, -73.935242, 1000);

  let categoryList = [];
  for (let j = 0; j < utils.getRandomInt(1, 5); j++) {
    const name = utils.getRandomWord(2);
    categoryList.push({
      id: id(),
      name: name,
      pluralName: name,
      shortName: name,
      icon: {
        prefix: "https://ss3.4sqi.net/img/categories_v2/"+ utils.getRandomWord(1) +"/"+ name.split(" ").join("-") +"_",
        suffix: utils.pickRandomValue([".png", ".jpg", ".jpeg"])
      }
    })
  }

  venueList.push({
    id: id(),
    name: address[0],
    location: {
      address: address[0],
      crossStreet: "btwn Mott & Elizabeth St",
      city: "New York",
      state: "NY",
      postalCode: address[2].split(' ')[2],
      country: "US",
      lat: latlang[0],
      lng: latlang[1],
      distance: utils.getRandomInt(50, 400)
    },
    categories: categoryList,
    hasPerk: utils.getRandBool()
  })
}

export const venues_suggestSearch = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    minivenues: venueList
  }
};