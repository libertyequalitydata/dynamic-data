import {
    getRandomString,
    getRandomDateTime,
    pickRandomValue,
    getRandBool,
    getRandomInt,
    getRandomFloat,
    parseSecondsToString,
    
  } from "@dynamic-data/utils";
  
  import MOCK from "@dynamic-data/spotify-data";
  
  const AlbumModel = {
    album_type: () => {
        
    },
    copyrights: () => {
        
    },
    external_ids: () => {
        
    },
    external_urls: () => {
        
    },
    genres: () => {
        
    },
    href: () => {
        
    },
    id: () => {
        
    },
    images: () => {
        
    },
    label: () => {
        
    },
    name: () => {
        
    },
    popularity: () => {
        
    },
    release_date: () => {
        
    },
    release_date_precision: () => {
        
    },
    total_tracks: () => {
        
    },
    tracks: () => {

    },
    type: () => {
        
    },
    uri: () => {
        
    },
  };
  
  const ArtistModel = {
    external_urls: () => {

    },
    followers: () => {

    },
    genres: () => {

    },
    href: () => {

    },
    id: () => {

    },
    images: () => {

    },
    name: () => {

    },
    popularity:() => {

    },
    type: () => {

    },
    uri: () => {

    },
  }
  const TrackModel = {
    disc_number: () => {

    },
    duration_ms: () => {

    },
    explicit: () => {

    },
    external_urls: () => {

    },
    href: () => {

    },
    id: () => {

    },
    is_local: () => {

    },
    is_playable: () => {

    },
    name: () => {

    },
    preview_url: () => {

    },
    track_number: () => {

    },
    type: () => {

    },
    uri: () => {

    },
  }

  const dataModels = {
    Album: {
      data: MOCK.album,
      mockup: AlbumModel,
    }
  };
  
  export function getModelCSVHeader(dataModel) {
    return dataModels[dataModel].data[0].split("\t");
  };
  
  //To exec: getAlbumMockupData("SYNC","Album","2022-04-03")
  export function getAlbumMockupData(dataType, dataModel, dataDate) {
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
        "album_type",
        "artists",
        "copyrights",
        "external_ids",
        "external_urls",
        "genres",
        "href",
        "id",
        "images",
        "label",
        "name",
        "popularity",
        "release_date",
        "release_date_precision",
        "total_tracks",
        "tracks",
        "type",
        "uri"
    ].forEach((key, i) => {
      switch (key) {
        case "artist":
            [
                "external_urls",
                "href",
                "id",
                "name",
                "type",
                "uri"
            ].forEach((key2, i) => {
                switch(key2){
                    default:
                        mockupData[key2] = ArtistModel[key2]()
                        break
                }
            })
            break
        default:
            mockupData[key] = mockupModel[key]()
            break
      }
    });
  
    return mockupData;
  }