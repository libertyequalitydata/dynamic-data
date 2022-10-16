const utils = require('@dynamic-data/utils');
const follower = utils.getRandomInt(0, 999999);

export const userProfile = {
    display_name: utils.getRandomName(),
    external_urls: {
      spotify: `https://open.spotify.com/user/${utils.getRandomName()}`
    },
    followers: {
      href: null,
      total: follower
    },
    href: `https://api.spotify.com/v1/users/${utils.getRandomName()}`,
    id: utils.getRandomName(),
    images: [],
    type: "user",
    uri: `spotify:user:${utils.getRandomName()}`

};