'use strict';

import {getPhotoDetailsMockupData,
  getTipDetailsMockupData,
  getVenuesDetailsMockupData,
  getVenuesCategoriesMockupData,
  getVenueRecommendationsMockupData,
  getVenueListMockupData,
  getVenueHoursMockupData,
  getVenueLikesMockupData,
  getNextVenueMockupData,
  getVenuePhotosMockupData,
  getVenuesSearchMockupData,
  getSimilarVenuesMockupData,
  getVenueSuggestionsMockupData,
  getVenueTipsMockupData,
  getVenueTrendingMockupData} from "@dynamic-data/foursquare-mockups"

describe('@dynamic-data/foursquare-mockups', () => {
  
  it("getPhotoDetailsMockupData", () => {
    const result = getPhotoDetailsMockupData (
      "SYNC",
      "PhotoDetails",
      "2022-04-03"
    );
    // console.log("getPhotoDetailsMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getTipDetailsMockupData", () => {
    const result = getTipDetailsMockupData (
      "SYNC",
      "TipDetails",
      "2022-04-03"
    );
    // console.log("getTipDetailsMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenuesDetailsMockupData", () => {
    const result = getVenuesDetailsMockupData (
      "SYNC",
      "VenuesDetails",
      "2022-04-03"
    );
    // console.log("getVenuesDetailsMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenuesCategoriesMockupData", () => {
    const result = getVenuesCategoriesMockupData (
      "SYNC",
      "VenuesCategories",
      "2022-04-03"
    );
    // console.log("getVenuesCategoriesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenueRecommendationsMockupData", () => {
    const result = getVenueRecommendationsMockupData (
      "SYNC",
      "VenueRecommendations",
      "2022-04-03"
    );
    // console.log("getVenueRecommendationsMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenueListMockupData", () => {
    const result = getVenueListMockupData (
      "SYNC",
      "VenueList",
      "2022-04-03"
    );
    // console.log("getVenueListMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenueHoursMockupData", () => {
    const result = getVenueHoursMockupData (
      "SYNC",
      "VenueHours",
      "2022-04-03"
    );
    // console.log("getVenueHoursMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenueLikesMockupData", () => {
    const result = getVenueLikesMockupData (
      "SYNC",
      "VenueLikes",
      "2022-04-03"
    );
    // console.log("getVenueLikesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getNextVenueMockupData", () => {
    const result = getNextVenueMockupData (
      "SYNC",
      "NextVenues",
      "2022-04-03"
    );
    // console.log("getNextVenueMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenuePhotosMockupData", () => {
    const result = getVenuePhotosMockupData (
      "SYNC",
      "VenuePhotos",
      "2022-04-03"
    );
    // console.log("getVenuePhotosMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenuesSearchMockupData", () => {
    const result = getVenuesSearchMockupData (
      "SYNC",
      "VenuesSearch",
      "2022-04-03"
    );
    // console.log("getVenuesSearchMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  // });
  })
  it("getSimilarVenuesMockupData", () => {
    const result = getSimilarVenuesMockupData (
      "SYNC",
      "SimilarVenues",
      "2022-04-03"
    );
    // console.log("getSimilarVenuesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenueSuggestionsMockupData", () => {
    const result = getVenueSuggestionsMockupData (
      "SYNC",
      "VenueSuggestions",
      "2022-04-03"
    );
    // console.log("getVenueSuggestionsMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenueTipsMockupData", () => {
    const result = getVenueTipsMockupData (
      "SYNC",
      "VenueTips",
      "2022-04-03"
    );
    // console.log("getVenueTipsMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getVenueTrendingMockupData", () => {
    const result = getVenueTrendingMockupData (
      "SYNC",
      "VenueTrending",
      "2022-04-03"
    );
    // console.log("getVenueTrendingMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
});