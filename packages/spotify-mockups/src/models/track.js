const utils = require('@dynamic-data/utils');
const artist_id = utils.getRandomString(22);
const track_id = utils.getRandomString(22);

export const track = {
    album: {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: `https://open.spotify.com/artist/${artist_id}`
          },
          href: `https://api.spotify.com/v1/artists/${artist_id}`,
          id: artist_id,
          name: utils.getRandomName(),
          type: "artist",
          uri: `spotify:artist:${artist_id}`
        }
      ],
      external_urls: {
        spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
      },
      href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
      id: utils.getRandomString(22),
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
          width: 640
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e027359994525d219f64872d3b1",
          width: 300
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048517359994525d219f64872d3b1",
          width: 64
        }
      ],
      name: "Cut To The Feeling",
      release_date:"2017-05-26",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: `spotify:album:${utils.getRandomString(22)}`
    },
    artists: [
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${artist_id}`
        },
        href: `https://api.spotify.com/v1/artists/${artist_id}`,
        id: artist_id,
        name: utils.getRandomName(),
        type: "artist",
        uri: `spotify:artist:${artist_id}`
      }
    ],
    disc_number: 1,
    duration_ms: 207959,
    explicit: false,
    external_ids: {
      isrc: "USUM71703861"
    },
    external_urls: {
      spotify: `https://open.spotify.com/track/${track_id}`
    },
    href: `https://api.spotify.com/v1/tracks/${track_id}`,
    id: track_id,
    is_local: false,
    is_playable: true,
    linked_from: {
      external_urls: {
        spotify: `https://open.spotify.com/track/${track_id}`
      },
      href: `https://api.spotify.com/v1/tracks/${track_id}`,
      id: track_id,
      type: "track",
      uri: `spotify:track:${track_id}`
    },
    name: "Cut To The Feeling",
    popularity: utils.getRandomInt(1,100),
    preview_url: null,
    track_number: 1,
    type: "track",
    uri: `spotify:track:${track_id}`
  };