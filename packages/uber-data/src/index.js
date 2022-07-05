import { 
  products,
  productDetails,
  userInfo,
  savedPlaces,
  priceEstimates,
  timeEstimates,
  rideReceiptDetails,
  rideMapDetails,
  userHistory,
  rideDetails
} from './models';

const Data = {
  products,
  productDetails: () => productDetails('a1111c8c-c720-46c3-8534-2fcdd730040d'),
  userInfo,
  savedPlaces,
  priceEstimates,
  timeEstimates,
  rideReceiptDetails,
  rideMapDetails,
  userHistory,
  rideDetails
};

export default Data;