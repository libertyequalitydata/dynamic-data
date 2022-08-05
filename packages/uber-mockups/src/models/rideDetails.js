const utils = require('@dynamic-data/utils');
import { products } from "./products";

const ride_type = utils.pickRandomValue(products.products);
const generateId = () => {return `${utils.getRandomString(8)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(12)}`};
const car = utils.getRandomCarDetails();
const pickup_addr = utils.getRandomAddress('NY', 'New York');
const dropoff_addr = utils.getRandomAddress('NY', 'New York');

export const rideDetails = {
  product_id: ride_type.product_id,
  request_id: generateId(),
  status: "accepted",
  surge_multiplier: 1,
  shared: false,
  driver: {
    phone_number: "+14155550000",
    sms_number: "+14155550000",
    rating: utils.getRandomFloat(3, 5),
    picture_url: "https://d1w2poirtb3as9.cloudfront.net/img.jpeg",
    name: utils.getRandomName()[0]
  },
  vehicle: {
    make: car.make,
    model: car.model,
    license_plate: car.license,
    picture_url: "https://d1w2poirtb3as9.cloudfront.net/car.jpeg"
  },
  location: {
    latitude: 40.7128463,
    longitude: -73.9352484,
    bearing: 328
  },
  pickup: {
    alias: "work",
    latitude: 40.7128463,
    longitude: -73.9352484,
    name: pickup_addr.split(',')[0],
    address: pickup_addr,
    eta: utils.getRandomInt(1, 10)
  },
  destination: {
    alias: "home",
    latitude: 40.7128463,
    longitude: -73.9352484,
    name: dropoff_addr.split(',')[0],
    address: dropoff_addr,
    eta: utils.getRandomInt(5, 30)
  },
  waypoints: [
    {
      rider_id: null,
      latitude: 40.7128463,
      type: "pickup",
      longitude: -73.9352484
    },
    {
      rider_id: null,
      latitude: 40.7128463,
      type: "dropoff",
      longitude: -73.9352484
    }
  ],
  riders: [
    {
      rider_id: `${utils.getRandomString(6)}_${utils.getRandomString(11)}`,
      first_name: utils.getRandomName()[0],
      me: true
    }
  ]
};