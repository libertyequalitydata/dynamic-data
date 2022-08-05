const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
var categoryList = [];

for (var i = 0; i < utils.getRandomInt(1, 15); i++) {
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

export const venues_categories = {
  meta: {
    code: 200,
    requestId: id()
  },
  notifications: [
    {
      item: {
        unreadCount: utils.getRandomInt(1, 15)
      },
      type: "notificationTray"
    }
  ],
  response: {
    categories: categoryList
  }
};