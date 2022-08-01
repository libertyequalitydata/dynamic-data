const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
let itemList = [];
for (let i = 0; i < utils.getRandomInt(5, 25); i++) {
  const name = utils.getRandomName();
  itemList.push({
    id: id(),
    createdAt: utils.getRandomDateTime(),
    text: utils.getRandomWord(utils.getRandomInt(10, 25)),
    type: "user",
    canonicalUrl: "https://foursquare.com/item/XYZ",
    photo: {
      id: id(),
      createdAt: utils.getRandomDateTime(),
      source: {
        name: "Foursquare Web",
        url: "https://foursquare.com"
      },
      prefix: "https://igx.4sqi.net/img/general/",
      suffix: "/"+ utils.getRandomString(45) +".jpg",
      width: 168,
      height: 168,
      user: {
        firstName: name[0],
        lastName: name[1],
        countryCode: "US"
      },
      visibility: utils.pickRandomValue(["private", "public"])
    },
    photourl: "https://igx.4sqi.net/img/general/original/"+ utils.getRandomString(45) +".jpg",
    lang: "en",
    likes: {
      count: utils.getRandomInt(0, 9999),
      groups: []
    },
    logView: utils.getRandBool(),
    agreeCount: utils.getRandomInt(0, 9999),
    disagreeCount: utils.getRandomInt(0, 99),
    todo: {
      count: utils.getRandomInt(0, 99)
    }
  })
}

export const venues_tips = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    tips: {
      count: utils.getRandomInt(1, 500),
      items: itemList
    }
  }
};