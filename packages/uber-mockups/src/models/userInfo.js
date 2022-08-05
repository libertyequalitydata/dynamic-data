const utils = require('@dynamic-data/utils');

export const userInfo = {
  uuid: `${utils.getRandomString(8)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(12)}`,
  rider_id: `${utils.getRandomString(66)}-${utils.getRandomString(17)}-${utils.getRandomString(45)}==`,
  picture: "https://d1w2poirtb3as9.cloudfront.net/f3be498cb0bbf570aa3d.jpeg",
  first_name: "Uber",
  last_name: utils.getRandomString(10),
  email: `${utils.getRandomString(10)}@gmail.com`,
  mobile_verified: true,
  promo_code: `uber${utils.getRandomString(6)}`
};