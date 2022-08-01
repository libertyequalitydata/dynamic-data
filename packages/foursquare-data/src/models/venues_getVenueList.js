const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);

const listedCount = utils.getRandomInt(1, 99999);
var listedItems = [];
for (var i = 0; i < utils.getRandomInt(1, 5); i++) {
  const listedTitleName = utils.getRandomWord(utils.getRandomInt(5, 20));
  const listedName = utils.getRandomName();
  const listedNameAlt = utils.getRandomName();
  listedItems.push({
    id: id(),
    name: listedTitleName,
    description: utils.getRandomWord(utils.getRandomInt(5, 40)),
    type: "others",
    user: {
      firstName: listedName[0],
      lastName: listedName[1],
      countryCode: "US"
    },
    editable: utils.getRandBool(),
    public: utils.getRandBool(),
    collaborative: utils.getRandBool(),
    url: "/boke/list/" + listedTitleName,
    canonicalUrl: "https://foursquare.com/boke/list/" + listedTitleName,
    createdAt: utils.getRandomDateTime(),
    updatedAt: utils.getRandomDateTime(),
    photo: {
      id: id(),
      createdAt: utils.getRandomDateTime(),
      prefix: "https://igx.4sqi.net/img/general/",
      suffix: "/"+ utils.getRandomString(45) +".jpg",
      width: 325,
      height: 487,
      user: {
        firstName: listedNameAlt[0],
        lastName: listedNameAlt[1],
        countryCode: "US"
      },
      visibility: utils.pickRandomValue(["public", "private"])
    },
    followers: {
      count: utils.getRandomInt(1, 99999)
    },
    listItems: {
      count: utils.getRandomInt(1, 99999),
      items: [
        {
          id: id(),
          createdAt: utils.getRandomDateTime(),
          photo: {
            id: id(),
            createdAt: utils.getRandomDateTime(),
            prefix: "https://igx.4sqi.net/img/general/",
            suffix: "/"+ utils.getRandomString(45) +".jpg",
            width: 720,
            height: 532,
            visibility: utils.pickRandomValue(["public", "private"])
          }
        }
      ]
    }
  })
}

export const venues_getVenueList = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    lists: {
      count: listedCount,
      groups: [
        {
          type: "others",
          name: "Lists from other people",
          count: listedCount,
          items: listedItems
        }
      ]
    }
  }
};