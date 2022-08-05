const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
const neLatLang = utils.getRandomLatLng(40.730610, -73.935242, 1000);
const swLatLang = utils.getRandomLatLng(40.730610, -73.935242, 1000);
const headerLocation = utils.pickRandomValue(["Upper", "Lower", "Downtown"]) + utils.pickRandomValue(["East", "West"]) + "Side";
const address = utils.getRandomAddress('NY', 'New York').split(',');
const addrLatLang = utils.getRandomLatLng(40.730610, -73.935242, 1000);

var categoryList = [];
for (var i = 0; i < utils.getRandomInt(1, 5); i++) {
  const word = utils.getRandomWord(utils.getRandomInt(1, 3));
  categoryList.push({
    categories: [],
    icon: {
      prefix: "https://ss3.4sqi.net/img/categories_v2/"+utils.getRandomWord(2).split(' ').join('_')+"/default_",
      suffix: utils.pickRandomValue([".png", ".jpg", ".jpeg"])
    },
    id: id(),
    name: word,
    pluralName: word,
    shortName: word
  })
}

export const venues_getRecommendations = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    warning: {
      text: "There aren't a lot of results near you. Try something more general, reset your filters, or expand the search area."
    },
    suggestedRadius: 600,
    headerLocation: headerLocation,
    headerFullLocation: headerLocation + ", New York",
    headerLocationGranularity: "neighborhood",
    totalResults: utils.getRandomInt(50, 400),
    suggestedBounds: {
      ne: {
        lat: neLatLang[0],
        lng: neLatLang[1]
      },
      sw: {
        lat: swLatLang[0],
        lng: swLatLang[1]
      }
    },
    groups: [
      {
        type: "Recommended Places",
        name: "recommended",
        items: [
          {
            reasons: {
              count: utils.getRandomInt(0, 100),
              items: [
                {
                  summary: "This spot is popular",
                  type: "general",
                  reasonName: "globalInteractionReason"
                }
              ]
            },
            venue: {
              id: id(),
              name: utils.getRandomWord(4),
              location: {
                address: address[0],
                crossStreet: "btwn Allen & Orchard St",
                lat: addrLatLang[0],
                lng: addrLatLang[1],
                labeledLatLngs: [
                  {
                    label: "display",
                    lat: addrLatLang[0],
                    lng: addrLatLang[1]
                  }
                ],
                distance: utils.getRandomInt(20, 300),
                postalCode: address[2].split(' ')[2],
                cc: "US",
                city: "New York",
                state: "NY",
                country: "United States",
                formattedAddress: [
                  address[0] + " (btwn Allen & Orchard St)",
                  address[1] + "," + address[2],
                  "United States"
                ]
              },
              categories: categoryList,
              popularityByGeo: 0.9999983845502491,
              venuePage: {
                id: "77298563"
              }
            }
          }
        ]
      }
    ]
  }
};