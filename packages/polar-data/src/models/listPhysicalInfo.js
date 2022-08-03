const utils = require('@dynamic-data/utils');

const id = utils.getRandomInt(10, 99999);
let phyicalList = [];
for (let i = 0; i < utils.getRandomInt(1, 50); i++) {
  phyicalList.push(`https://www.polaraccesslink.com/v3/users/${id}/physical-information-transactions/${utils.getRandomInt(10, 99)}/physical-informations/${utils.getRandomInt(10, 999)}`);
}

export const listPhysicalInfo = {
  "physical-informations": phyicalList
};