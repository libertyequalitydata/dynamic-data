const utils = require('@dynamic-data/utils');
const follower = utils.getRandomInt(2000, 99999999);

export const artist = {
    external_urls: {
      spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
    },
    followers: {
      href: null,
      total: follower
    },
    genres: [
      "dance pop",
      "latin",
      "miami hip hop",
      "pop",
      "pop rap"
    ],
    href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
    id: utils.getRandomString(22),
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab6761610000e5eb2dc40ac263ef07c16a95af4e",
        width: 640
      },
      {
        height: 320,
        url: "https://i.scdn.co/image/ab676161000051742dc40ac263ef07c16a95af4e",
        width: 320
      },
      {
        height: 160,
        url: "https://i.scdn.co/image/ab6761610000f1782dc40ac263ef07c16a95af4e",
        width: 160
      }
    ],
    name: utils.getRandomName(),
    popularity: utils.getRandomInt(1,100),
    type: "artist",
    uri: `spotify:artist:${utils.getRandomString(22)}`
  };