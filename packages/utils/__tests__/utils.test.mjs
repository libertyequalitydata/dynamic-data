import {
  getRandomInt,
  getSleepDate,
  pickRandomValue,
  getRandBool,
  getRandomFloat,
  getRandomDateTime,
  getRandomString,
  parseSecondsToString,
  getRandomAddress,
  getRandomName,
  getRandomCarDetails,

  MersenneTwister,
  convertToInt} from "@dynamic-data/utils";

describe("utils", () => {
// test.todo("needs tests");
it('getRandomInt', () => {
  const min = 5;
  const max = 10;
  const val = getRandomInt(min, max);
  
  // checking if value is an integer and within range
  expect(typeof val).toBe('number');
  expect(val%1).toBe(0);
  expect(val).toBeGreaterThan(4);
  expect(val).toBeLessThan(11);
});
it("getSleepDate", () => {
  const result = getSleepDate("2022-04-03", 22, 3);
  // console.log(typeof result);
  //expect(typeof result).toEqual("number");
});
it("pickRandomValue", () => {
  const myList = ['a', 'b', 'c', 'd'];
  const myChoice = pickRandomValue(myList);
  expect(typeof myChoice).toBe('string');
  expect(myList).toContain(myChoice);
});
it('getRandBool', () => {
  // checking if value is of type boolean
  expect(typeof getRandBool()).toBe('boolean');
});
it('getRandomFloat', () => {
  const min = 5;
  const max = 6;
  const val = getRandomFloat(min, max);
  
  // checking if value is a float and within range
  expect(typeof val).toBe('number');
  expect(val).toBeGreaterThan(4);
  expect(val).toBeLessThan(7);
});
it('getRandomDate', () => {
  const strFormat = "YYYY-MM-DD";
  const val = getRandomDateTime(strFormat);

  // checking if date is of type string
  expect(typeof val).toBe('string');
  expect(val.length).toBe(strFormat.length);
});
it('getRandomString', () => {
  const len = 12;
  const val = getRandomString(len);

  // checking if value is of type string
  expect(typeof val).toBe('string');
  expect(val.length).toBe(len);
});
it('parseSecondsToString', () => {
  const sec = 12345;
  const val = parseSecondsToString(sec);

  // checking if time in seconds returns converted string
  expect(typeof val).toBe('string');
  expect(val.length).toBe(8);
  expect(val).toBe('03:25:45');
});
it('address', () => {
  const address = getRandomAddress();

  // checking if value is of type string
  expect(typeof address).toBe('object');
});
it('getRandomName', () => {
  const name = getRandomName();
  // checking if value is of type string
  expect(typeof name[0]).toBe('string');
  expect(typeof name[1]).toBe('string');
});
it('getRandomVehicle', () => {
  const car = getRandomCarDetails();

  // checking if value is of type object
  expect(typeof car).toBe('object');
  expect(!Array.isArray(car)).toBeTruthy();
  expect(Object.keys(car).length).not.toBe(0);
});
it('MersenneTwister', () => {
  var randGen = new MersenneTwister()
  var random = randGen.random()
  // checking if value is of type object
  expect(typeof random).toBe('number');
  expect(random).toBeGreaterThan(0);
  expect(random).toBeLessThan(1);
});
it('MersenneTwister Range', () => {
  var randGen = new MersenneTwister()
  var randomDouble = randGen.random()
  var randomInt = convertToInt(randomDouble, 1,10)
  // checking if value is of type object
  expect(typeof randomInt).toBe('number');
  expect(randomInt).toBeGreaterThan(0);
  expect(randomInt).toBeLessThan(11);
});
});
