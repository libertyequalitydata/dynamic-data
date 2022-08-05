const utils = require('@dynamic-data/utils');

export const getWebhook = {
  data: {
    id: utils.getRandomString(8),
    events: "EXERCISE, SLEEP",
    url: "https://myapp.example.com/acl_webhook"
  }
};