import {
    toIsoString,
    getRandomInt,
    getNewDate,
    getSleepDate,
    randomUUID,
    randomCurrency,
    getRandBool,
    getRandomString,
    getRandomName,
    randomIntPhone,
    getRandomCarDetails,
    getRandomLatLng,
    getRandomAddress
  } from "@dynamic-data/utils";
  
  import MOCK from "@dynamic-data/uber-data";
import { priceEstimates } from "../../uber-data/src/mockups/priceEstimates";
  // https://app.swaggerhub.com/apis/DovOps/whoop-unofficial-api/2.0.1#/auth
  
const PriceEstimatesModel = {
    localized_display_name: (display_name) => {
        return display_name
    },
    distance: () => {
        return getRandomInt(99,999999)/100
    },
    display_name: () => {
        return getRandomString(10)
    },
    product_id: () => {
        return randomUUID()
    },
    high_estimate: (estimate,currency_code) => {
        if (estimate.includes("-")){
            let currency = randomCurrency("SIMPLE WEST ISO-4217",{code : currency_code})
            var a = estimate.split("-")[1]
            var replaced = a.replace(currency.symbol,"")
            return parseInt(replaced) 
        } else {
            return null
        }
    },
    low_estimate: (estimate,currency_code) => {
        if (estimate.includes("-")){
            let currency = randomCurrency("SIMPLE WEST ISO-4217",{code : currency_code})
            var a = estimate.split("-")[0]
            var replaced = a.replace(currency.symbol,"")
            return parseInt(replaced) 
        } else {
            return null
        }

    },
    duration: () => {
        return getRandomInt(0,18000)
    },
    estimate: (currency_code) => {
        switch(currency_code){
            case null:
                return "Metered"
            default:
                let currency = randomCurrency("SIMPLE WEST ISO-4217",{code : currency_code})
                
                switch(getRandomInt(0,2)){
                    case 1:
                        let float = getRandomInt(1000,5000)/100
                        return currency.symbol + float.toString()
                    case 2:
                        let start = getRandomInt(10,12)
                        let difference = getRandomInt(1,30)
                        return `${currency.symbol}${start.toString()}-${currency.symbol}${(start+difference).toString()}`
                }
                
        }
    },
    currency_code: () => {
        switch(getRandomInt(0,100)){
            case 1:
                return null
            default:
                return randomCurrency("SIMPLE WEST ISO-4217").code
        }
        
    }
    
}
const ProductDetailsModel = {
    upfront_fare_enabled: () => {
        return false
    },
    capacity: () => {
        return getRandomInt(0,10)
    },
    product_id: () => {
        return randomUUID()
    },
    image: () => {
        return "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-uberx.png"
    },
    cash_enabled: () => {
        return false
    },
    shared: () => {
        return getRandBool()
    },
    short_description: () => {
        return getRandomString(10)
    },
    display_name: () => {
        return getRandomString(10)
    },
    product_group: () => {
        return getRandomString(10)
    },
    description: () => {
        return getRandomString(20)
    },
    service_fees: () => {
        let final = []
        let number = getRandomInt(0,2)
        for (var i = 0; i<number;i++){
            final.push({
                "fee": getRandomInt(0,300)/100,
                "name": getRandomString(10)
            })
        }
        return final
    },
    cost_per_minute: () => {
        return getRandomInt(0, 200)/100
    },
    distance_unit: () => {
        let units = ["mile", "km"]
        return units[getRandomInt(0,units.length)-1]
    },
    minimum: () => {
        return getRandomInt(0, 1000)/100
    },
    cost_per_distance: () => {
        return getRandomInt(0, 200)/100
    },
    base: () => {
        return getRandomInt(0, 500)/100
    },
    cancellation_fee: () => {
        return getRandomInt(0, 500)/100
    },
    currency_code: () => {
        return randomCurrency("SIMPLE WEST ISO-4217").code
    }
}

const RideDetailsModel = {
    product_id: () => {
        return randomUUID()
    },
    request_id: () => {
        return randomUUID()
    },
    status: () => {
        let statuses = ["processing", "no_drivers_available", "accepted", "arriving", "in_progress", "driver_canceled", "rider_canceled", "completed"]
        return statuses[getRandomInt(0,statuses.length)-1]
    },
    surge_multiplier: () => {
        return getRandomInt(0,200)/100
    },
    shared: () => {
        return getRandBool()
    },
    driver: () => {
        return {
            "phone_number": randomIntPhone(),
            "sms_number": randomIntPhone(),
            "rating": getRandomInt(0,5),
            "picture_url": "https:\/\/d1w2poirtb3as9.cloudfront.net\/img.jpeg",
            "name": getRandomName()
          }
    },
    vehicle: () => {
        let car = getRandomCarDetails()
        return {
            "make": car.make,
            "model": car.model,
            "license_plate": car.license,
            "picture_url": "https:\/\/d1w2poirtb3as9.cloudfront.net\/car.jpeg"
        }
          
    },
    location: () => {
        let location = getRandomLatLng()
        return {
            "latitude": location[0],
            "longitude": location[1],
            "bearing": getRandomInt(0,360)-1
          }
    },
    pickup: (status) => {
        let location = getRandomLatLng()
        let address = getRandomAddress()
        let eta = null
        switch(status){
            case "accepted":
            case "arriving":
                eta = getRandomInt(0,60)
        }
        let alias = ["work", "home", null]
        return {
            "alias": alias[getRandomInt(0, alias.length)-1],
            "latitude": location[0],
            "longitude": location[1],
            "name": `${address["streetNumber"]} ${address["streetName"]}`,
            "address": `${address["streetNumber"]} ${address["streetName"]}, ${address["city"]}, ${address["county"]}, ${address["postalCode"]}, ${address["country"]}`,
            "eta": eta
          }
    },
    destination: (status) => {
        let location = getRandomLatLng()
        let address = getRandomAddress()
        let eta = null
        switch(status){
            case "in_progress":
                eta = getRandomInt(0,60)
        }
        let alias = ["work", "home", null]
        return {
            "alias": alias[getRandomInt(0, alias.length)-1],
            "latitude": location[0],
            "longitude": location[1],
            "name": `${address["streetNumber"]} ${address["streetName"]}`,
            "address": `${address["streetNumber"]} ${address["streetName"]}, ${address["city"]}, ${address["county"]}, ${address["postalCode"]}, ${address["country"]}`,
            "eta": eta
          }
    },
    waypoints: (rider_id) => {
        let types = ["dropoff", "pickup"]
        let location = getRandomLatLng()
        return {
            "rider_id":rider_id,
            "latitude":location[0],
            "type":types[getRandomInt(0,types.length)-1],
            "longitude":location[1],
         }
    },
    riders: (me) => {
        let riderID = getRandomString(18)
        switch(me){
            case false:
                switch(getRandomInt(0,10)){
                    case 1:
                        riderID = null
                }
        }
        return {
            "rider_id":riderID,
            "first_name":getRandomName(),
            "me": me
        }
    }

}
const RideMapDetailsModel = {
    request_id: () => {
        return randomUUID()
    },
    href: () => {
        return "https://trip.uber.com/abc123"
    }
}
const RideReceiptDetailsModel = {
    request_id: () => {
        return randomUUID()
    },
    subtotal: (total_fare, total_charged,currency_code) => {
        let currency = randomCurrency("SIMPLE WEST ISO-4217",{code : currency_code})
        let ammount = parseFloat(total_fare.replace(currency.symbol,""))
        ammount += parseFloat(total_charged.replace(currency.symbol,""))
        return `${currency.symbol}${ammount.toFixed(2)}`
    },
    total_charged: (currency_code) => {
        let currency = randomCurrency("SIMPLE WEST ISO-4217",{code : currency_code})
        let ammount = getRandomInt(0,10000)/100
        return `${currency.symbol}${ammount}`
    },
    total_owed: () => {
        return null
    },
    total_fare: (currency_code) => {
        let currency = randomCurrency("SIMPLE WEST ISO-4217",{code : currency_code})
        let ammount = getRandomInt(0,10000)/100
        return `${currency.symbol}${ammount}`
    },
    currency_code: () => {
        return randomCurrency("SIMPLE WEST ISO-4217").code
    },
    charge_adjustments: () => {
        return []
    },
    duration: () => {
        let hours = getRandomInt(0,24)-1
        let minutes = getRandomInt(0,60)-1
        let seconds = getRandomInt(0,60)-1
        if(hours<10){
            hours = `0${hours}`
        }
        if(minutes<10){
            minutes = `0${minutes}`
        }
        if(seconds<10){
            seconds = `0${seconds}`
        }
        return `${hours}:${minutes}:${seconds}`
    },
    distance: () => {
        return getRandomInt(0,100000)/100
    },
    distance_label: () => {
        let labels = ["miles"]
        return labels[getRandomInt(0,labels.length)-1]
    },
    
}
const SavedPlacesModel = {
    address: () => {
        let address = getRandomAddress()
        return `${address["streetNumber"]} ${address["streetName"]}, ${address["city"]}, ${address["county"]}, ${address["postalCode"]}, ${address["country"]}`
    }
}
const TimeEstimatesModel = {
    localized_display_name: (display_name) => {
        return display_name
    },
    estimate:() => {
        return getRandomInt(10,600)
    },
    display_name: () => {
        return getRandomString(5,10)
    },
    product_id: () => {
        return randomUUID()
    }
}

const PaymentMethodsModel ={
    payment_methods: () =>{
        let types = [
            {
                Type: "airtel_money",
                format: null
            },
            {
                Type: "alipay",
                format: ["***23","ga***@uber.com"]
            },
            {
                Type: "apple_pay",
                format:  "***23"
            },
            {
                Type: "american_express",
                format: "***23"
            },
            {
                Type: "android_pay",
                format: null
            },
            {
                Type: "baidu_wallet",
                format: "***23"
            },
            {
                Type: "business_account",
                format: "BusinessName"
            },
            {
                Type: "family_account",
                format: "FamilyName"
            },
            {
                Type: "cash",
                format: null
            },
            {
                Type: "discover",
                format: "***23"
            },
            {
                Type: "jcb",
                format: "***23"
            },
            {
                Type: "lianlian",
                format: "***23"
            },
            {
                Type: "maestro",
                format: "***23"
            },
            {
                Type: "mastercard",
                format: "***23"
            },
            {
                Type: "paypal",
                format: "ga***@uber.com"
            },
            {
                Type: "paytm",
                format: null
            },
            {
                Type: "ucharge",
                format: null
            },
            {
                Type: "upi",
                format: null
            },
            {
                Type: "unionpay",
                format: "***23"
            },
            {
                Type: "unknown",
                format: null
            },
            {
                Type: "visa",
                format: "***23"
            },
            {
                Type: "zaakpay",
                format: null
            }
        ]
        let method = types[getRandomInt(0,types.length)-1]
        let format = ""
        switch(method.format){
            case null:
                format = null
                break
            case "***23":
                format = `***${getRandomInt(9,99).toString()}`
                break
            case "ga***@uber.com":
                format = `${getRandomString(2)}***@${getRandomString(getRandomInt(3,7))}.com`
                break
            case "FamilyName":
                format = getRandomName()
                break
            case "BusinessName":
                format = getRandomString(getRandomInt(5,15))
                break
        }
        return {
            payment_method_id: randomUUID(),
            type: method.Type,
            description: format,
          }
    }
}

const UserInfoModel = {
    picture: () => {
        return "https://d1w2poirtb3as9.cloudfront.net/f3be498cb0bbf570aa3d.jpeg"
    },
    first_name: () => {
        return getRandomName()
    },
    last_name: () => {
        return getRandomName()
    },
    uuid: () => {
        return randomUUID()
    },
    rider_id: () => {
        return getRandomString(132)
    },
    email: () => {
        return `${getRandomString(getRandomInt(3,7))}@${getRandomString(getRandomInt(3,7))}.com`
    },
    mobile_verified: () => {
        return getRandBool()
    },
    promo_code: () => {
        return getRandomString(10)
    }
}
  const dataModels = {
    PriceEstimates: {
        data: MOCK.priceEstimates,
        mockup: PriceEstimatesModel
    },
    ProductDetails: {
        data: MOCK.productDetails,
        mockup: ProductDetailsModel
    },
    Products: {
        data: MOCK.products,
        mockup: ProductDetailsModel
    },
    RideDetails: {
        data: MOCK.rideDetails,
        mockup: RideDetailsModel
    },
    RideMapDetails: {
        data: MOCK.rideMapDetails,
        mockup: RideMapDetailsModel
    },
    RideReceiptDetails: {
        data: MOCK.rideReceiptDetails,
        mockup: RideReceiptDetailsModel
    },
    SavedPlaces: {
        data: MOCK.savedPlaces,
        mockup: SavedPlacesModel
    },
    TimeEstimates: {
        data: MOCK.timeEstimates,
        mockup: TimeEstimatesModel
    },
    PaymentMethods: {
        data: MOCK.paymentMethods,
        mockup: PaymentMethodsModel
    },
    UserInfo: {
        data: MOCK.userInfo,
        mockup: UserInfoModel
    },
  };
  
  export function getModelCSVHeader(dataModel) {
    return dataModels[dataModel].data[0].split("\t");
  }
  
  export function getPriceEstimatesMockupData(dataType, dataModel, dataDate) {
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    mockupData["prices"].forEach((priceEstimate)=>{
        [
            "distance",
            "display_name",
            "product_id",
            "duration",
            "currency_code",
            "estimate",
            "localized_display_name",
            "high_estimate",
            "low_estimate"
            ].forEach((key, i) => {
            switch (key) {
                case "estimate":
                    priceEstimate[key] = mockupModel[key](priceEstimate["currency_code"]);
                    break;
                case "localized_display_name":
                    priceEstimate[key] = mockupModel[key](priceEstimate["display_name"]);
                    break;
                case "high_estimate":
                case "low_estimate":
                    priceEstimate[key] = mockupModel[key](priceEstimate["estimate"],priceEstimate["currency_code"]);
                    break;
                default:
                    priceEstimate[key] = mockupModel[key]();
                    break;
            }
            });
    })
    

   
  
    return mockupData;
  }
  export function getProductDetails(dataType, dataModel, dataDate) {
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    [
        "upfront_fare_enabled",
        "capacity",
        "product_id",
        "price_details",
        "image",
        "cash_enabled",
        "shared",
        "short_description",
        "display_name",
        "product_group",
        "description"
        ].forEach((key, i) => {
        switch (key) {
            case "price_details":
                switch(getRandomInt(0,100)){
                    case 1:
                        mockupData[key] = null;
                        break
                    default:
                        [
                            "service_fees",
                            "cost_per_minute",
                            "distance_unit",
                            "minimum",
                            "cost_per_distance",
                            "base",
                            "cancellation_fee",
                            "currency_code"
                        ].forEach((key2, i2)=>{
                            switch(key2){
                                default:
                                    mockupData[key][key2] = mockupModel[key2]();
                                    break;
                            }
                        })
                        break
                }

                break;
            default:
                mockupData[key] = mockupModel[key]();
                break;
        }
        });
    

   
  
    return mockupData;
  }
  export function getProducts(dataType, dataModel, dataDate) {
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    mockupData["products"] = [mockupData["products"][0]]
    mockupData["products"].forEach((product)=>{
        [
            "upfront_fare_enabled",
            "capacity",
            "product_id",
            "price_details",
            "image",
            "cash_enabled",
            "shared",
            "short_description",
            "display_name",
            "product_group",
            "description"
            ].forEach((key, i) => {
            switch (key) {
                case "price_details":
                    switch(getRandomInt(0,100)){
                        case 1:
                            product[key] = null;
                            break
                        default:
                            [
                                "service_fees",
                                "cost_per_minute",
                                "distance_unit",
                                "minimum",
                                "cost_per_distance",
                                "base",
                                "cancellation_fee",
                                "currency_code"
                            ].forEach((key2, i2)=>{
                                switch(key2){
                                    default:
                                        product[key][key2] = mockupModel[key2]();
                                        break;
                                }
                            })
                            break
                    }
    
                    break;
                default:
                    product[key] = mockupModel[key]();
                    break;
            }
            });
    })

    

   
  
    return mockupData;
  }
  export function getRideDetails(dataType, dataModel, dataDate) { //Improvements: Have the ride details make more sense, e.g. a 60 minute ride is reflected in the change of latitude and longitude
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    [
        "product_id",
        "request_id",
        "status",
        "surge_multiplier",
        "shared",
        "driver",
        "vehicle",
        "location",
        "pickup",
        "destination",
        "riders",
        "waypoints"
        ].forEach((key, i) => {
        switch (key) {
            case "vehicle":
            case "driver":
            case "location":
            case "surge_multiplier":
                switch (mockupData["status"]){
                    case "completed":
                    case "no_drivers_available":
                    case "driver_canceled":
                    case "rider_canceled":
                        mockupData[key] = null
                        break
                    default:
                        mockupData[key] = mockupModel[key]();
                        break
                }
                break;
            case "waypoints":
                switch (mockupData["status"]){
                    case "completed":
                    case "no_drivers_available":
                    case "driver_canceled":
                    case "rider_canceled":
                        mockupData[key] = null
                        break
                    default:
                        mockupData[key] = [mockupData[key][0]]
                        for (var index = 0; index<mockupData[key].length;index++){
                            mockupData[key][index] = mockupModel[key](mockupData["riders"][getRandomInt(0,mockupData["riders"].length)-1]["rider_id"]);
                        }
                        break
                        
                }
                break;
            case "riders":
                switch (mockupData["status"]){
                    case "completed":
                    case "no_drivers_available":
                    case "driver_canceled":
                    case "rider_canceled":
                        mockupData[key] = null
                        break
                    default:
                        mockupData[key] = [mockupData[key][0]]
                        for (var index = 0; index<mockupData[key].length;index++){
                            switch(index){
                                case 0:
                                    mockupData[key][index] = mockupModel[key](true);
                                    break
                                default:
                                    mockupData[key][index] = mockupModel[key](false);
                                    break
                            }
                        }
                        
                }
                break;
            case "pickup":
            case "destination":
                switch (mockupData["status"]){
                    case "completed":
                    case "no_drivers_available":
                    case "driver_canceled":
                    case "rider_canceled":
                        mockupData[key] = null
                        break
                    default:
                        mockupData[key] = mockupModel[key](mockupData["status"]);
                        break
                }
                break;
            default:
                mockupData[key] = mockupModel[key]();
                break;
        }
        });

    

   
  
    return mockupData;
  }
  export function getRideMapDetails(dataType, dataModel, dataDate) {
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    [
        "request_id",
        "href"
        ].forEach((key, i) => {
        switch (key) {
            default:
                mockupData[key] = mockupModel[key]();
                break;
        }
        });
    

   
  
    return mockupData;
  }
  export function getRideReceiptDetails(dataType, dataModel, dataDate) {
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    [
        "request_id",
        "currency_code",
        "total_charged",
        "total_owed",
        "total_fare",
        "charge_adjustments",
        "duration",
        "distance",
        "distance_label",
        "subtotal",
        ].forEach((key, i) => {
        switch (key) {
            case "total_charged":
            case "total_fare":
                mockupData[key] = mockupModel[key](mockupData["currency_code"]);
                break;
            case "subtotal":
                mockupData[key] = mockupModel[key](mockupData["total_fare"],mockupData["total_charged"],mockupData["currency_code"]);
                break;
            default:
                mockupData[key] = mockupModel[key]();
                break;
        }
        });
    

   
  
    return mockupData;
  }
  export function getSavedPlaces(dataType, dataModel, dataDate) {
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    [
        "address",
        ].forEach((key, i) => {
        switch (key) {
            default:
                mockupData[key] = mockupModel[key]();
                break;
        }
        });
    

   
  
    return mockupData;
  }
  export function getTimeEstimates(dataType, dataModel, dataDate) {
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    mockupData["times"] = [mockupData["times"][0]]
    mockupData["times"].forEach(time=>{
        [
            "estimate",
            "display_name",
            "localized_display_name",
            "product_id"
            ].forEach((key, i) => {
            switch (key) {
                case "localized_display_name":
                    time[key] = mockupModel[key](time["display_name"]);
                    break;
                default:
                    time[key] = mockupModel[key]();
                    break;
            }
            });
    })
  
  
    return mockupData;
  }
  export function getPaymentMethods(dataType, dataModel, dataDate) {
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    mockupData["payment_methods"] = [mockupData["payment_methods"][0]]
    for (var i = 0; i<mockupData["payment_methods"].length;i++){
        mockupData["payment_methods"][i] = mockupModel["payment_methods"]()
    }
    mockupData["last_used"] = mockupData["payment_methods"][getRandomInt(0,mockupData["payment_methods"].length)-1]["payment_method_id"]
    return mockupData;
  }
  export function getUserInfo(dataType, dataModel, dataDate) {
    let mockupData = {};
    const mockupModel = dataModels[dataModel].mockup;
    if (dataType === "SYNC") {
      mockupData = dataModels[dataModel].data;
    }
    if (dataType === "ASYNC") {
      const mockupDataRow = dataModels[dataModel].data[1].split("\t");
      const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
    }
    [
        "picture",
        "first_name",
        "last_name",
        "uuid",
        "rider_id",
        "email",
        "mobile_verified",
        "promo_code",

    ].forEach((key, i) => {
    switch (key) {
        default:
            mockupData[key] = mockupModel[key]();
            break;
    }
    });
  
  
    return mockupData;
  }
  