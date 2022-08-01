const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
const count = utils.getRandomInt(5, 9999);

export const venues_likes = {
  meta: {
    code: 200,
    requestId: id()
  },
  notifications: [
    {
      item: {
        unreadCount: utils.getRandomInt(0, 100)
      },
      type: "notificationTray"
    }
  ],
  response: {
    like: false,
    likes: {
      count: count,
      groups: [
        {
          count: count,
          items: [],
          type: "others"
        }
      ],
      summary: count.toString() + " Likes"
    }
  }
};