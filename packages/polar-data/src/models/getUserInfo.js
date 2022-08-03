const utils = require('@dynamic-data/utils');

const name = utils.getRandomName();
const gender = utils.pickRandomValue(["MALE", "FEMALE"]);
const height = gender == "MALE"? utils.getRandomInt(150, 190) : utils.getRandomInt(140, 180);
const weight = gender == "MALE"? utils.getRandomInt(60, 100) : utils.getRandomInt(50, 90);

export const getUserInfo = {
  "polar-user-id": utils.getRandomInt(1000000, 99999999),
  "member-id": utils.getRandomString(8),
  "registration-date": utils.getRandomDateTime('YYYY-MM-DDThh:mm:ss.000'),
  "first-name": name[0],
  "last-name": name[1],
  birthdate: utils.getRandomDateTime("YYYY-MM-DD"),
  gender: gender,
  weight: weight,
  height: height,
  "extra-info": [
    {
      value: utils.getRandomInt(0, 6).toString(),
      index: 0,
      name: "number-of-children"
    }
  ]
};