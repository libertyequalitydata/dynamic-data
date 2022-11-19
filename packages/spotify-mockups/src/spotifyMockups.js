import {
    getRandomString,
    getRandomDateTime,
    pickRandomValue,
    getRandBool,
    getRandomInt,
    getRandomFloat,
    getRandomName,
    
  } from "@dynamic-data/utils";
  
  import MOCK from "@dynamic-data/spotify-data";
  
  const AlbumModel = {
    album_type: () => {
        return "compilation"
    },
    artists: (id) => {
        return [
            {
              external_urls: {
                spotify: `https://open.spotify.com/artist/` + id
              },
              href: `https://api.spotify.com/v1/artists/` + id,
              id: getRandomString(22),
              name: getRandomName(),
              type: "artist",
              uri: `spotify:artist:` + id 
            }
          ] 
    },
    copyrights: () => {
        let textObj = `© 2020 `;
        let typeObj = `C`;
        
      return {
          text: textObj + ArtistModel.name,
          type: typeObj 
        }
    },
    external_ids: () => {
        let upcObj = `00602435154916`;
        
      return {
          upc: upcObj
        }
    },
    external_urls: (id) => {
        return 'spotify:' `https://open.spotify.com/album/` + id
    },
    genres: () => {
        return []
    },
    href: (id) => {
        return `https://api.spotify.com/v1/albums/` + id
    },
    id: () => {
        return getRandomString(22)
    },
    images: () => {
        let heightObj = getRandomInt(64, 640);
        let widthObj = getRandomInt(64, 640);
        let urlObj = `https://i.scdn.co/image/ab67616d0000b2736c7e94cd8adf593532f7871f`;

      return {
          height: heightObj,
          width: widthObj,
          url: urlObj
        }
    },
    label: () => {
        return getRandomName()
    },
    name: () => {
        return "folklore: the escapism chapter"
    },
    popularity: () => {
        return getRandomInt(1,100)
    },
    release_date: () => {
        return getRandomDateTime()
    },
    release_date_precision: () => {
        return "day"
    },
    total_tracks: () => {
        return getRandomInt(1, 20)
    },
    tracks: () => {
        return TrackModel
    },
    type: () => {
        return "album"
    },
    uri: (id) => {
        return `spotify:album:` + id
     },
  };
  
  const ArtistModel = {
    external_urls: () => {
        return 'spotify:' `https://open.spotify.com/artist/` + id
    },
    followers: () => {
        let hrefObj = null;
        let totalObj = getRandomInt(2000, 99999999);

      return {
          href: hrefObj,  
          total: totalObj
        }
    },
    genres: () => {
        return [
            "dance pop",
            "latin",
            "miami hip hop",
            "pop",
            "pop rap"
          ]
    },
    href: () => {
        return `https://api.spotify.com/v1/artists/` + id
    },
    id: () => {
        return getRandomString(22)
    },
    images: () => {
        let heightObj = getRandomInt(64, 640);
        let widthObj = getRandomInt(64, 640);
        let urlObj = `https://i.scdn.co/image/ab67616d0000b2736c7e94cd8adf593532f7871f`;

      return {
          height: heightObj,
          width: widthObj,
          url: urlObj
        }
    },
    name: () => {
        return getRandomName()
    },
    popularity:() => {
        return getRandomInt(1,100)
    },
    type: () => {
        return "artist"
    },
    uri: () => {
        return `spotify:artist:` + id
    },
  }
  const TrackModel = {
    album: () => {
        return AlbumModel
    },
    artists: () => {
        return [

            {
              external_urls: {
                spotify: `https://open.spotify.com/artist/` + id
              },
              href: `https://api.spotify.com/v1/artists/` + id,
              id: getRandomString(22),
              name: getRandomName(),
              type: "artist",
              uri: `spotify:artist:` + id
            }
          ]
    },
    disc_number: () => {
        return getRandomInt(1, 20)
    },
    duration_ms: () => {
        return getRandomInt(1000, 100000)
    },
    explicit: () => {
        return getRandBool()
    },
    external_ids: () => {
        let isrcObj = `USUM72000001`;

      return {
          isrc: isrcObj
        }
    },
    external_urls: () => {
        return {spotify: `https://open.spotify.com/track/` + id}
    },
    href: () => {
        return `https://api.spotify.com/v1/tracks/` + id
    },
    id: () => {
        return getRandomString(22)
    },
    is_local: () => {
        return false
    },
    is_playable: () => {
        return true
    },
    linked_from: () => {
        return {
            external_urls: {
              spotify: `https://open.spotify.com/track/` + id
            },
            href: `https://api.spotify.com/v1/tracks/` + id,
            id: getRandomString(22),
            type: "track",
            uri: `spotify:track:` + id
        }
    },
    name: () => {
        return getRandomName()
    },
    popularity: () => {
        return getRandomInt(1,100)
    },
    preview_url: () => {
        return `https://p.scdn.co/mp3-preview/` + getRandomString(22)
    },
    track_number: () => {
        return getRandomInt(1, 20)
    },
    type: () => {
        return "track"
    },
    uri: () => {
        return `spotify:track:` + id
    },
  }

  const TrackAudioAnalysisModel = {
    meta : () => {
        return {
            analyzer_version: "4.0.0",
            platform: "Linux",
            detailed_status: "OK",
            status_code: 0,
            timestamp: 1598942400,
            analysis_time: 1.0,
            input_process: "libvorbisfile L+R 44100->22050"
        }
    },
    track: () => {
        return {
            num_samples: getRandomInt(5000,6585515),
            duration: 207.95985,
            sample_md5: "string",
            offset_seconds: 0,
            window_seconds: 0.02,
            analysis_sample_rate: 22050,
            analysis_channels: 2,
            end_of_fade_in: 0.0,
            start_of_fade_out: 0.0,
            loudness: -60.0,
            tempo: 120.0,
            tempo_confidence: getRandomFloat(0,1),
            time_signature: 4,
            time_signature_confidence: getRandomFloat(0,1),
            key: getRandomInt(1,9),
            key_confidence: getRandomFloat(0,1),
            mode: 0,
            mode_confidence: getRandomFloat(0,1),
            codestring: "string",
            code_version: 3.15,
            echoprintstring: "string",
            echoprint_version: 4.15,
            synchstring: "string",
            synch_version: 1,
            rhythmstring: "string",
            rhythm_version: 1
          }
    },
    bars: () => {
        return [
            {
              start: 0.49567,
              duration: 2.18749,
              confidence: getRandomFloat(0,1)
            }
          ]
    },
    beats: () => {
        return [
            {
              start: 0.49567,
              duration: 0.49567,
              confidence: getRandomFloat(0,1)
            }
          ]
    },
    sections: () => {
        return [
            {
              start: 0.0,
              duration: 6.97092,
              confidence: 1,
              loudness: -14.938,
              tempo: 113.178,
              tempo_confidence: getRandomFloat(0,1),
              key: getRandomInt(1,9),
              key_confidence: getRandomFloat(0,1),
              mode: -1,
              mode_confidence: getRandomFloat(0,1),
              time_signature: 4,
              time_signature_confidence: 1
            }
          ]
    },
    segments: () => {
        return [
            {
              start: 0.0,
              duration: 0.49567,
              confidence: getRandomFloat(0,1),
              loudness_start: -60.0,
              loudness_max_time: 0.07305,
              loudness_max: -60.0,
              loudness_end: 0,
              pitches: [
                0.212,
                0.141,
                0.294
              ],
              timbre: [
                42.115,
                64.373,
                -0.233
              ]
            }
          ]
    },
    tatums: () => {
        return [
            {
              start: 0.49567,
              duration: 2.18749,
              confidence: getRandomFloat(0,1)
            }
          ]
    } 
  }
  
  const TrackAudioFeaturesModel = {
    danceability: () => {
        return getRandomFloat(0,1)
    },
    energy: () => {
        return getRandomFloat(0,1)
    },
    key: () => {
        return getRandomInt(1,9)
    },
    loudness: () => {
        return getRandomFloat(-60,0)
    },
    mode: () => {
        return 1
    },
    speechiness: () => {
        return 0.103
    },
    acousticness: () => {
        return getRandomFloat(0,1)
    },
    instrumentalness: () => {
        return getRandomFloat(0,1)
    },
    liveness: () => {
        return 0.302
    },
    valence: () => {
        return getRandomFloat(0,1)
    },
    tempo: () => {
        return 114.944
    },
    type: () => {
        return "audio_features"
    },
    id: () => {
        return getRandomString(22)
    },
    uri: () => {
        return `spotify:track:` + id
    },
    track_href: () => {
        return `https://api.spotify.com/v1/tracks/` + id
    },
    analysis_url: () => {
        return `https://api.spotify.com/v1/audio-analysis/` + id
    },
    duration_ms: () => {
        return getRandomInt(5000,6585515)
    },
    time_signature: () => {
        return 4
    }
  }

  const UserProfileModel = {
    display_name: () => {
        return getRandomName()
    },
    external_urls: () => {
        return {
            spotify: `https://open.spotify.com/user/` + getRandomString(22)
        }
    },
    followers: () => {
        return {
            href: null,
            total: getRandomInt(1,1000000)

        } 
    },
    href: () => {
        return `https://api.spotify.com/v1/users/` + getRandomString(22)  
    },
    id: () => {
        return getRandomName()
    },  
    images: () => {
        return [
            {
              height: null,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: null
            }
          ]
    },
    type: () => {
        return "user"
    },
    uri: () => {
        return `spotify:user:` + getRandomString(22)
    }
  }

  const ShowModel = {
    available_markets: () => {
        return [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BZ",
          "CA",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KH",
          "KI",
          "KM",
          "KN",
          "KW",
          "LA",
          "LB",
          "LC",
          "LI",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "US",
          "UY",
          "UZ",
          "VC",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ]
    },
    description: () => {
        return getRandomString(22)
    },
    explicit: () => {
        return false
    },
    external_urls: () => {
        return {
            spotify: `https://open.spotify.com/show/` + getRandomString(22)
        }
    },
    href: () => {
        return `https://api.spotify.com/v1/shows/` + getRandomString(22)
    },
    id: () => {
        return getRandomString(22)
    },
    images: () => {
        return [
            {
              height: 640,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: 640
            },
            {
              height: 300,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: 300
            },
            {
              height: 64,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: 64
            }
          ]
    },
    is_externally_hosted: () => {
        return false
    },
    languages: () => {
        return [
            "en"
        ]
    },
    media_type: () => {
        return "audio"
    },
    name: () => {
        return getRandomString(22) + getRandomString(22)
    },
    publisher: () => {
        return getRandomString(22)
    },
    type: () => {
        return "show"
    },
    uri: () => {
        return `spotify:show:` + getRandomString(22)
    }
  }

  const EpisodeModel = {
    audio_preview_url: () => {
        return `https://p.scdn.co/mp3-preview/` + getRandomString(22)
    },
    description: () => {
        return getRandomString(50) 
    },
    duration_ms: () => {
        return getRandomInt(1000000)
    },
    explicit: () => {
        return false
    },
    external_urls: () => {
        return {
            spotify: `https://open.spotify.com/episode/` + getRandomString(22)
        }
    },
    href: () => {
        return `https://api.spotify.com/v1/episodes/` + getRandomString(22)
    },
    id: () => {
        return getRandomString(22)
    },
    images: () => {
        return [
            {
              height: 640,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: 640
            },
            {
              height: 300,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: 300
            },
            {
              height: 64,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: 64
            }
          ]
    },  
    is_externally_hosted: () => {
        return false
    },
    is_playable: () => {
        return true
    },
    language: () => {
        return "en"
    },
    name: () => {
        return getRandomString(22) + getRandomString(22)
    },
    release_date: () => {
        return getRandomDate()
    },
    release_date_precision: () => {
        return "day"
    },
    show: () => {
        return ShowModel
    },
    type: () => {
        return "episode"
    },
    uri: () => {
        return `spotify:episode:` + getRandomString(22)
    }
  }

  const PlaylistModel = {
    collaborative: () => {
        return false
    },
    description: () => {
        return getRandomString(22)
    },  
    external_urls: () => {
        return {
            spotify: `https://open.spotify.com/playlist/` + getRandomString(22)
        }
    },
    href: () => {
        return `https://api.spotify.com/v1/playlists/` + getRandomString(22)
    },
    id: () => {
        return getRandomString(22)
    },
    images: () => {
        return [
            {
              height: 640,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: 640
            },
            {
              height: 300,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: 300
            },
            {
              height: 64,
              url: `https://i.scdn.co/image/` + getRandomString(22),
              width: 64
            }
          ]
    },
    name: () => {
        return getRandomString(22)
    },
    owner: () => {
        return {
            display_name: getRandomString(22),
            external_urls: {
                spotify: `https://open.spotify.com/user/` + getRandomString(22)
            },
            href: `https://api.spotify.com/v1/users/` + getRandomString(22),
            id: getRandomName(),
            type: "user",
            uri: `spotify:user:` + id
        }
    },
    primary_color: () => {
        return null
    },
    public: () => {
        return true
    },
    snapshot_id: () => {
        return getRandomString(22)
    },
    tracks: () => {
        return {
            href: `https://api.spotify.com/v1/playlists/` + getRandomString(22) + `/tracks`,
            items: [
                {
                    added_at: getRandomDate(),
                    added_by: {
                        external_urls: {
                            spotify: `https://open.spotify.com/user/` + getRandomString(22)
                        },
                        href: `https://api.spotify.com/v1/users/` + getRandomString(22),
                        id: getRandomString(22),
                        type: "user",
                        uri: `spotify:user:` + getRandomString(22)
                    },
                    is_local: false,
                    primary_color: null,
                    track: {
                        TrackModel
                    },
                    video_thumbnail: {
                        url: null
                    }
                }
            ],
            limit: 100,
            next: null,
            offset: 0,
            previous: null,
            total: 1
        }
    },
    type: () => {
        return "playlist"
    },
    uri: () => {
        return `spotify:playlist:` + getRandomString(22)
    }
}

const ArtistRelatedArtistsModel = {
    
    artists: () => {
        let artists = [] 
        let no_of_artists = getRandomInt(10)

        for (let i = 0; i < no_of_artists; i++) {
            artists.push(ArtistModel)
        }
        return artists
    }
}
 
const ArtistTopTracksModel = {
    tracks: () => {
        let tracks = []
        let no_of_tracks = getRandomInt(10)

        for (let i = 0; i < no_of_tracks; i++) {
            tracks.push(TrackModel)
        }
        return tracks
    }
}

const dataModels = {
    Album: {
      data: MOCK.album,
      mockup: AlbumModel,
    },
    Artist: {
      data: MOCK.artist,
      mockup: ArtistModel,
    },
    Track : {
      data: MOCK.track,
      mockup: TrackModel,
    },
    Show: {
      data: MOCK.show,
      mockup: ShowModel,
    },
    Episode: {
      data: MOCK.episode,
      mockup: EpisodeModel,
    },
    Playlist: {
      data: MOCK.playlist,
      mockup: PlaylistModel,
    },
    TrackAudioAnalysis: {
      data: MOCK.trackAudioAnalysis,
      mockup: TrackAudioAnalysisModel,
    },
    TrackAudioFeatures: {
      data: MOCK.trackAudioFeatures,
      mockup: TrackAudioFeaturesModel,
    },
    User: {
      data: MOCK.userProfile,
      mockup: UserProfileModel,
    },
    ArtistRelatedArtists: {
      data: MOCK.artistRelatedArtists,
      mockup: ArtistRelatedArtistsModel,
    },
    ArtistTopTracks: {
      data: MOCK.artistTopTracks,
      mockup: ArtistTopTracksModel,
    },

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
        case "album_type":
          mockupData[key] = mockupModel[key]();
          break;
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
                        mockupData[key2] = mockupModel[key2]();
                        break;
                }
            })
            break;
        case "copyrights":
                [
                    "text",
                    "type"
                ].forEach((key2, i) => {
                    switch(key2){
                        default:
                            mockupData[key2] = mockupModel[key2]();
                            break;
                    }
                })
              break;
        case "external_ids":
            [
                "upc"
            ].forEach((key2, i) => {
                switch(key2){
                    default:
                        mockupData[key2] = mockupModel[key2]();
                        break;
                }
            })
            break;
        case "external_urls":
            [
                "spotify"
            ].forEach((key2, i) => {
                switch(key2){
                    default:
                        mockupData[key2] = mockupModel[key2]();
                        break;
                }
            })
            break;
        case "genres":
            mockupData[key] = mockupModel[key]();
            break;
        case "href":
            mockupData[key] = mockupModel[key]();
            break;
        case "id":
            mockupData[key] = mockupModel[key]();
            break;
        case "images":
            [
                "height",
                "url",
                "width"
            ].forEach((key2, i) => {
                switch(key2){
                    default:
                        mockupData[key2] = mockupModel[key2]();
                        break;
                }
            })
            break;
        case "label":
            mockupData[key] = mockupModel[key]();
            break;
        case "name":
            mockupData[key] = mockupModel[key]();
            break;
        case "popularity":
            mockupData[key] = mockupModel[key]();
            break;
        case "release_date":
            mockupData[key] = mockupModel[key]();
            break;
        case "release_date_precision":
            mockupData[key] = mockupModel[key]();
            break;
        case "total_tracks":
            mockupData[key] = mockupModel[key]();
            break;
        case "tracks":
            [
                "href",
                "items",
                "limit",
                "next",
                "offset",
                "previous",
                "total"
            ].forEach((key2, i) => {
                switch(key2){
                    case "href":
                        mockupData[key2] = mockupModel[key2]();
                        break;
                    case "items":
                        mockupData[key2] = AlbumModel[key2]();
                        break;
                    case "limit":
                        mockupData[key2] = mockupModel[key2]();
                        break;
                    case "next":
                        mockupData[key2] = mockupModel[key2]();
                        break;
                    case "offset":
                        mockupData[key2] = mockupModel[key2]();
                        break;
                    case "previous":
                        mockupData[key2] = mockupModel[key2]();
                        break;
                    case "total":
                        mockupData[key2] = mockupModel[key2]();
                        break;

                }
            })
            break;
        case "type":
            mockupData[key] = mockupModel[key]();
            break;
        case "uri":
            mockupData[key] = mockupModel[key]();
            break;
        default:
          mockupData[key] = mockupModel[key]();
          break;

      }
    });
    return mockupData;
  }

  
  export function getArtistMockupData(dataType, dataModel, dataDate) {
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
        "external_urls",
        "followers",
        "genres",
        "href",
        "id",
        "images",
        "name",
        "popularity",
        "type",
        "uri"
    ].forEach((key, i) => {
      switch (key) {
        case "external_urls":
            [
                "spotify"
            ].forEach((key2, i) => {
                switch(key2){
                    default:
                        mockupData[key2] = mockupModel[key2]();
                        break;
                }
            })
            break;
        case "followers":
            [
                "href",
                "total" 
            ].forEach((key2, i) => {
                switch(key2){
                    default:
                        mockupData[key2] = mockupModel[key2]();
                        break;
                } 
            })
            break;
        case "genres":
            mockupData[key] = mockupModel[key]();
            break;
        case "href":
            mockupData[key] = mockupModel[key]();
            break;
        case "id":
            mockupData[key] = mockupModel[key]();
            break;
        case "images":
            [
                "height",
                "url",
                "width"
            ].forEach((key2, i) => {
                switch(key2){
                    default:
                        mockupData[key2] = mockupModel[key2]();
                        break;
                }
            })
            break;
        case "name":
            mockupData[key] = mockupModel[key]();
            break;
        case "popularity":
            mockupData[key] = mockupModel[key]();
            break;  
        case "type":
            mockupData[key] = mockupModel[key]();
            break;
        case "uri":
            mockupData[key] = mockupModel[key]();
            break;
        default:
            mockupData[key] = mockupModel[key]()
            break
      }
    });

    return mockupData;
  }

  export function getTrackMockupData(dataType, dataModel, dataDate) {
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
        "album",
        "artists",
        "disc_number",
        "duration_ms",
        "explicit",
        "external_ids",
        "external_urls",
        "href",
        "id",
        "is_local",
        "is_playable",
        "linked_from",
        "name",
        "popularity",
        "preview_url",
        "track_number",
        "type",
        "uri"
      ].forEach((key, i) => {
        switch (key) {
          case "album":
            [
              "album_type",
              "artists",
              "available_markets",
              "external_urls",
              "href",
              "id",
              "images",
              "name",
              "release_date",
              "release_date_precision",
              "total_tracks",
              "type",
              "uri"
            ].forEach((key2, i) => {
              switch (key2) {
                case "album_type":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "artists":
                  [
                    "external_urls",
                    "href",
                    "id",
                    "name",
                    "type",
                    "uri"
                  ].forEach((key3, i) => {
                    switch (key3) {
                      case "external_urls":
                        [
                          "spotify"
                        ].forEach((key4, i) => {
                          switch (key4) {
                            default:
                              mockupData[key4] = mockupModel[key4]();
                              break;
                          }
                        })
                        break;
                      case "href":
                        mockupData[key3] = mockupModel[key3]();
                        break;
                      case "id":
                        mockupData[key3] = mockupModel[key3]();
                        break;
                      case "name":
                        mockupData[key3] = mockupModel[key3]();
                        break;
                      case "type":
                        mockupData[key3] = mockupModel[key3]();
                        break;
                      case "uri":
                        mockupData[key3] = mockupModel[key3]();
                        break;
                      default:
                        mockupData[key3] = mockupModel[key3]();
                        break;
                    }
                  })
                  break;
                case "available_markets":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "external_urls":
                  [
                    "spotify"
                  ].forEach((key3, i) => {
                    switch (key3) {
                      default:
                        mockupData[key3] = mockupModel[key3]();
                        break;
                    }
                  })
                  break;
                case "href":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "id":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "images":
                  [
                    "height",
                    "url",
                    "width"
                  ].forEach((key3, i) => {
                    switch (key3) {
                      default:
                        mockupData[key3] = mockupModel[key3]();
                        break;
                    }
                  })
                  break;
                case "name":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "release_date":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "release_date_precision":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "total_tracks":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "type":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "uri":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                default:
                  mockupData[key2] = mockupModel[key2]();
                  break;
              }
            })
            break;
          case "artists":
            [
              "external_urls",
              "href",
              "id",
              "name",
              "type",
              "uri"
            ].forEach((key2, i) => {
              switch (key2) {
                case "external_urls":
                  [
                    "spotify"
                  ].forEach((key3, i) => {
                    switch (key3) {
                      default:
                        mockupData[key3] = mockupModel[key3]();
                        break;
                    }
                  })
                  break;
                case "href":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "id":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "name":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "type":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "uri":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                default:
                  mockupData[key2] = mockupModel[key2]();
                  break;
              }
            })
            break;
          case "disc_number":
            mockupData[key] = mockupModel[key]();
            break;
          case "duration_ms":
            mockupData[key] = mockupModel[key]();
            break;
          case "explicit":
            mockupData[key] = mockupModel[key]();
            break;
          case "external_ids":
            [
              "isrc"
            ].forEach((key2, i) => {
              switch (key2) {
                default:
                  mockupData[key2] = mockupModel[key2]();
                  break;
              }
            })
            break;
          case "external_urls":
            [
              "spotify"
            ].forEach((key2, i) => {
              switch (key2) {
                default:
                  mockupData[key2] = mockupModel[key2]();
                  break;
              }
            })
            break;
          case "href":
            mockupData[key] = mockupModel[key]();
            break;
          case "id":
            mockupData[key] = mockupModel[key]();
            break;
          case "is_local":
            mockupData[key] = mockupModel[key]();
            break;
          case "is_playable":
            mockupData[key] = mockupModel[key]();
            break;
          case "linked_from":
            [
              "external_urls",
              "href",
              "id",
              "type",
              "uri"
            ].forEach((key2, i) => {
              switch (key2) {
                case "external_urls":
                  [
                    "spotify"
                  ].forEach((key3, i) => {
                    switch (key3) {
                      default:
                        mockupData[key3] = mockupModel[key3]();
                        break;
                    }
                  })
                  break;
                case "href":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "id":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "type":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                case "uri":
                  mockupData[key2] = mockupModel[key2]();
                  break;
                default:
                  mockupData[key2] = mockupModel[key2]();
                  break;
              }
            })
          break;
          case "name":
            mockupData[key] = mockupModel[key]();
            break;
          case "popularity":
            mockupData[key] = mockupModel[key]();
            break;
          case "preview_url":
            mockupData[key] = mockupModel[key]();
            break;
          case "track_number":
            mockupData[key] = mockupModel[key]();
            break;
          case "type":
            mockupData[key] = mockupModel[key]();
            break;
          case "uri":
            mockupData[key] = mockupModel[key]();
            break;
          default:
            mockupData[key] = mockupModel[key]();
            break;

          }
        });
     
     return mockupData;
  }

export function getUserProfileMockupData(dataType, dataModel, dataDate) {

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
    "display_name",
    "external_urls",
    "followers",
    "href",
    "id",
    "images",
    "type",
    "uri"
  ].forEach((key, i) => {
    switch (key) {
      case "display_name":
        mockupData[key] = mockupModel[key]();
        break;
      case "external_urls":
        [
          "spotify"
        ].forEach((key2, i) => {
          switch (key2) {
            default:
              mockupData[key2] = mockupModel[key2]();
              break;
          }
        })
        break;
      case "followers":
        [
          "href",
          "total"
        ].forEach((key2, i) => {
          switch (key2) {
            case "href":
              mockupData[key2] = mockupModel[key2]();
              break;
            case "total":
              mockupData[key2] = mockupModel[key2]();
              break;
            default:
              mockupData[key2] = mockupModel[key2]();
              break;
          }
        })
        break;
      case "href":
        mockupData[key] = mockupModel[key]();
        break;
      case "id":
        mockupData[key] = mockupModel[key]();
        break;
      case "images":
        [
          "height",
          "url",
          "width"
        ].forEach((key2, i) => {
          switch (key2) {
            case "height":
              mockupData[key2] = mockupModel[key2]();
              break;
            case "url":
              mockupData[key2] = mockupModel[key2]();
              break;
            case "width":
              mockupData[key2] = mockupModel[key2]();
              break;
            default:
              mockupData[key2] = mockupModel[key2]();
              break;
          }
        })
        break;
      case "type":
        mockupData[key] = mockupModel[key]();
        break;
      case "uri":
        mockupData[key] = mockupModel[key]();
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
      }
    });

  return mockupData;

}

export function getTrackAudioFeaturesMockupData(dataType, dataModel, dataDate) {

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
    "danceability",
    "energy",
    "key",
    "loudness",
    "mode",
    "speechiness",
    "acousticness",
    "instrumentalness",
    "liveness",
    "valence",
    "tempo",
    "type",
    "id",
    "uri",
    "track_href",
    "analysis_url", 
    "duration_ms",
    "time_signature"
  ].forEach((key, i) => {
    switch (key) {
      case "danceability":
        mockupData[key] = mockupModel[key]();
        break;
      case "energy":
        mockupData[key] = mockupModel[key]();
        break;
      case "key":
        mockupData[key] = mockupModel[key]();
        break;
      case "loudness":
        mockupData[key] = mockupModel[key]();
        break;
      case "mode":
        mockupData[key] = mockupModel[key]();
        break;
      case "speechiness":
        mockupData[key] = mockupModel[key]();
        break;
      case "acousticness":
        mockupData[key] = mockupModel[key]();
        break;
      case "instrumentalness":
        mockupData[key] = mockupModel[key]();
        break;
      case "liveness":
        mockupData[key] = mockupModel[key]();
        break;
      case "valence":
        mockupData[key] = mockupModel[key]();
        break;
      case "tempo":
        mockupData[key] = mockupModel[key]();
        break;
      case "type":
        mockupData[key] = mockupModel[key]();
        break;
      case "id":
        mockupData[key] = mockupModel[key]();
        break;
      case "uri":
        mockupData[key] = mockupModel[key]();
        break;
      case "track_href":
        mockupData[key] = mockupModel[key]();
        break;
      case "analysis_url":
        mockupData[key] = mockupModel[key]();
        break;
      case "duration_ms":
        mockupData[key] = mockupModel[key]();
        break;
      case "time_signature":
        mockupData[key] = mockupModel[key]();
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
      }
  });

  return mockupData;
}

export function getTrackAudioAnalysisMockupData(dataType, dataModel, dataDate) {
  
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
      "meta",
      "track",
      "bars",
      "beats",
      "sections",
      "segments",
      "tatums"
    
    ].forEach((key, i) => {
      switch (key) {
        case "meta":
          [
            "analyzer_version",
            "platform",
            "detailed_status",
            "status_code",
            "timestamp",
            "analysis_time",
            "input_process"
          ].forEach((key2, i) => {
            switch (key2) {
              case "analyzer_version":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "platform":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "detailed_status":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "status_code":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "timestamp":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "analysis_time":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "input_process":
                mockupData[key2] = mockupModel[key2]();
                break;
              default:
                mockupData[key2] = mockupModel[key2]();
                break;
            }
          })
          break;
        case "track":
          [
            "num_samples",
            "duration",
            "sample_md5",
            "offset_seconds",
            "window_seconds",
            "analysis_sample_rate",
            "analysis_channels",
            "end_of_fade_in",
            "start_of_fade_out",
            "loudness",
            "tempo",
            "tempo_confidence",
            "time_signature",
            "time_signature_confidence",
            "key",
            "key_confidence",
            "mode",
            "mode_confidence",
            "codestring",
            "code_version",
            "echoprintstring",
            "echoprint_version",
            "synchstring",
            "synch_version",
            "rhythmstring",
            "rhythm_version"
          ].forEach((key2, i) => {
            switch (key2) {
              case "num_samples":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "duration":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "sample_md5":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "offset_seconds":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "window_seconds":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "analysis_sample_rate":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "analysis_channels":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "end_of_fade_in":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "start_of_fade_out":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "loudness":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "tempo":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "tempo_confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "time_signature":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "time_signature_confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "key":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "key_confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "mode":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "mode_confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "codestring":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "code_version":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "echoprintstring":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "echoprint_version":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "synchstring":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "synch_version":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "rhythmstring":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "rhythm_version":
                mockupData[key2] = mockupModel[key2]();
                break;
              default:
                mockupData[key2] = mockupModel[key2]();
                break;
            }
          })
          break;

        case "bars":
          [
            "start",
            "duration",
            "confidence"
          ].forEach((key2, i) => {
            switch (key2) {
              case "start":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "duration":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              default:
                mockupData[key2] = mockupModel[key2]();
                break;
            }
          })
          break;
          
        case "beats":
          [
            "start",
            "duration",
            "confidence"
          ].forEach((key2, i) => {
            switch (key2) {
              case "start":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "duration":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              default:
                mockupData[key2] = mockupModel[key2]();
                break;
            }
          })
          break;
        case "sections":
          [
            "start",
            "duration",
            "confidence",
            "loudness",
            "tempo",
            "tempo_confidence",
            "key",
            "key_confidence",
            "mode",
            "mode_confidence",
            "time_signature",
            "time_signature_confidence"
          ].forEach((key2, i) => {
            switch (key2) {
              case "start":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "duration":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "loudness":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "tempo":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "tempo_confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "key":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "key_confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "mode":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "mode_confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "time_signature":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "time_signature_confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              default:
                mockupData[key2] = mockupModel[key2]();
                break;
            }
          })
          
        case "segments":
          [
            "start",
            "duration",
            "confidence",
            "loudness_start",
            "loudness_max_time",
            "loudness_max",
            "loudness_end",
            "pitches",
            "timbre",
          ].forEach((key2, i) => {
            switch (key2) {
              case "start":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "duration":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "confidence":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "loudness_start":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "loudness_max_time":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "loudness_max":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "loudness_end":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "pitches":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "timbre":
                mockupData[key2] = mockupModel[key2]();
                break;
              default:
                mockupData[key2] = mockupModel[key2]();
                break;
            }
          })

        case "tatums":
          [
            "start",
            "duration",
            "confidence"
          ].forEach((key2, i) => {
            switch (key2) {
              case "start":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "duration":
                mockupData[key2] = mockupModel[key2]();
                break;
              case "confidence":
                mockupData[key2] = mockupModel[key2]();
                break;

              default:
                mockupData[key2] = mockupModel[key2]();
                break;
            }
          })
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
        }
    });
  
    return mockupData;
}

export function getShowsMockupData(dataType, dataModel, dataDate){
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
      'available_markets',
      'copyright',
      'description',
      'episodes',
      'is_externally_hosted',
      'languages',
      'media_type',
      'name',
      'publisher',
      'type',
      'uri'
    ].forEach((key, i) => {
      switch (key) {
        case "available_markets":
          mockupData[key] = mockupModel[key]();
          break;
        case "copyright":
          mockupData[key] = mockupModel[key]();
          break;
        case "description":
          mockupData[key] = mockupModel[key]();
          break;
        case "episodes":
          mockupData[key] = mockupModel[key]();
          break;
        case "is_externally_hosted":
          mockupData[key] = mockupModel[key]();
          break;
        case "languages":
          mockupData[key] = mockupModel[key]();
          break;
        case "media_type":
          mockupData[key] = mockupModel[key]();
          break;
        case "name":
          mockupData[key] = mockupModel[key]();
          break;
        case "publisher":
          mockupData[key] = mockupModel[key]();
          break;
        case "type":
          mockupData[key] = mockupModel[key]();
          break;
        case "uri":
          mockupData[key] = mockupModel[key]();
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
    return mockupData;
}

export function getPlaylistMockupData(dataType, dataModel, dataDate){
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
      'collaborative',
      'description',
      'external_urls',
      'followers',
      'href',
      'id',
      'images',
      'name',
      'owner',
      'primary_color',
      'public',
      'snapshot_id',
      'tracks',
      'type',
      'uri'
    ].forEach((key, i) => {
      switch (key) {
        case "collaborative":
          mockupData[key] = mockupModel[key]();
          break;
        case "description":
          mockupData[key] = mockupModel[key]();
          break;
        case "external_urls":
          mockupData[key] = mockupModel[key]();
          break;
        case "followers":
          mockupData[key] = mockupModel[key]();
          break;
        case "href":
          mockupData[key] = mockupModel[key]();
          break;
        case "id":
          mockupData[key] = mockupModel[key]();
          break;
        case "images":
          mockupData[key] = mockupModel[key]();
          break;
        case "name":
          mockupData[key] = mockupModel[key]();
          break;
        case "owner":
          mockupData[key] = mockupModel[key]();
          break;
        case "primary_color":
          mockupData[key] = mockupModel[key]();
          break;
        case "public":
          mockupData[key] = mockupModel[key]();
          break;
        case "snapshot_id":
          mockupData[key] = mockupModel[key]();
          break;
        case "tracks":
          mockupData[key] = mockupModel[key]();
          break;
        case "type":
          mockupData[key] = mockupModel[key]();
          break;
        case "uri":
          mockupData[key] = mockupModel[key]();
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
    return mockupData;
}

export function getEpisodeMockupData(dataType, dataModel, dataDate){
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
      'audio_preview_url',
      'description',
      'duration_ms',
      'explicit',
      'external_urls',
      'href',
      'id',
      'images',
      'is_externally_hosted',
      'is_playable',
      'language',
      'languages',
      'name',
      'release_date',
      'release_date_precision',
      'show',
      'type',
      'uri'
    ].forEach((key, i) => {
      switch (key) {
        case "audio_preview_url":
          mockupData[key] = mockupModel[key]();
          break;
        case "description":
          mockupData[key] = mockupModel[key]();
          break;
        case "duration_ms":
          mockupData[key] = mockupModel[key]();
          break;
        case "explicit":
          mockupData[key] = mockupModel[key]();
          break;
        case "external_urls":
          mockupData[key] = mockupModel[key]();
          break;
        case "href":
          mockupData[key] = mockupModel[key]();
          break;
        case "id":
          mockupData[key] = mockupModel[key]();
          break;
        case "images":
          mockupData[key] = mockupModel[key]();
          break;
        case "is_externally_hosted":
          mockupData[key] = mockupModel[key]();
          break;
        case "is_playable":
          mockupData[key] = mockupModel[key]();
          break;
        case "language":
          mockupData[key] = mockupModel[key]();
          break;
        case "languages":
          mockupData[key] = mockupModel[key]();
          break;
        case "name":
          mockupData[key] = mockupModel[key]();
          break;
        case "release_date":
          mockupData[key] = mockupModel[key]();
          break;
        case "release_date_precision":
          mockupData[key] = mockupModel[key]();
          break;
        case "show":
          mockupData[key] = mockupModel[key]();
          break;
        case "type":
          mockupData[key] = mockupModel[key]();
          break;
        case "uri":
          mockupData[key] = mockupModel[key]();
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
    return mockupData;
}

export function getArtistRelatedArtistwMockupData(dataType, dataModel, dataDate){
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
      'artists'
    ].forEach((key, i) => {
      switch (key) {
        case "artists":
          mockupData[key] = mockupModel[key]();
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
    return mockupData;
}

export function getArtistTopTracksMockupData(dataType, dataModel, dataDate){
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
      'tracks'
    ].forEach((key, i) => {
      switch (key) {
        case "tracks":
          mockupData[key] = mockupModel[key]();
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
    return mockupData;
}
