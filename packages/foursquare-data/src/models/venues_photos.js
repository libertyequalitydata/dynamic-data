const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
const name = utils.getRandomName();

export const venues_photos = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    photos: {
      count: 1,
      items: [
        {
          id: id(),
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
          checkin: {
            id: id(),
            createdAt: utils.getRandomDateTime(),
            type: "checkin",
            timeZoneOffset: 1 - utils.getRandomInt(30, 400)
          },
          visibility: utils.pickRandomValue(["private", "public"])
        }
      ],
      dupesRemoved: 0
    }
  }
};