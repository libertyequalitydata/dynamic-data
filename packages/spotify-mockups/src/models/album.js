const utils = require('@dynamic-data/utils');

const track_id = utils.getRandomString(22);
const track_duration = utils.getRandomInt(148906, 308906);

export const album = {
    album_type: "compilation",
    artists: [
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        name: utils.getRandomName(),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      }
    ],
    copyrights: [
      {
        text: `© 2020 ${utils.getRandomName()}`,
        type: "C"
      },
      {
        text: `℗ 2020 ${utils.getRandomName()}`,
        type: "P"
      }
    ],
    external_ids: {
      upc: "00602435154916"
    },
    external_urls: {
      "spotify": `https://open.spotify.com/album/${utils.getRandomString(22)}`
    },
    genres: [],
    href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
    id: utils.getRandomString(22),
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736c7e94cd8adf593532f7871f",
        width: 640
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026c7e94cd8adf593532f7871f",
        width: 300
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516c7e94cd8adf593532f7871f",
        width: 64
      }
    ],
    label: utils.getRandomName(),
    name: "folklore: the escapism chapter",
    popularity: utils.getRandomInt(1,100),
    release_date: "2020-08-21",
    release_date_precision: "day",
    total_tracks: 6,
    tracks: {
      href: "https://api.spotify.com/v1/albums/0UYykkGEPRrLfarEeclJQ7/tracks?offset=0&limit=50&market=US&locale=en-GB,en;q=0.9",
      items: [
        {
          artists: [
            {
              external_urls: {
                spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
              },
              href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
              id: utils.getRandomString(22),
              name: utils.getRandomName(),
              type: "artist",
              uri: `spotify:artist:${utils.getRandomString(22)}`
            }
          ],
          disc_number: 1,
          duration_ms: track_duration,
          explicit: false,
          external_urls: {
            spotify: `https://open.spotify.com/track/${track_id}`
          },
          href: `https://api.spotify.com/v1/tracks/${track_id}`,
          id: track_id,
          is_local: false,
          is_playable: true,
          name: "the lakes",
          preview_url: null,
          track_number: 1,
          type: "track",
          uri: `spotify:track:${track_id}`
        },
        {
          artists: [
            {
                external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                    },
                    href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
                    id: utils.getRandomString(22),
                    name: utils.getRandomName(),
                    type: "artist",
                    uri: `spotify:artist:${utils.getRandomString(22)}`
                }
          ],
          disc_number: 1,
          duration_ms: track_duration,
          explicit: false,
          external_urls: {
            spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          is_local: false,
          is_playable: true,
          name: "seven",
          preview_url: null,
          track_number: 2,
          type: "track",
          uri: `spotify:track:${utils.getRandomString(22)}`
        },
        {
          artists: [
            {
                external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                  },
                  href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
                  id: utils.getRandomString(22),
                  name: utils.getRandomName(),
                  type: "artist",
                  uri: `spotify:artist:${utils.getRandomString(22)}`
                }
          ],
          disc_number: 1,
          duration_ms: track_duration,
          explicit: false,
          external_urls: {
            spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          is_local: false,
          is_playable: true,
          name: "epiphany",
          preview_url: null,
          track_number: 3,
          type: "track",
          uri: `spotify:track:${utils.getRandomString(22)}`
        },
        {
          artists: [
            {
                external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                  },
                  href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
                  id: utils.getRandomString(22),
                  name: utils.getRandomName(),
                  type: "artist",
                  uri: `spotify:artist:${utils.getRandomString(22)}`
                }
          ],
          disc_number: 1,
          duration_ms: track_duration,
          explicit: false,
          external_urls: {
            spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          is_local: false,
          is_playable: true,
          name: "cardigan",
          preview_url: null,
          track_number: 4,
          type: "track",
          uri: `spotify:track:${utils.getRandomString(22)}`
        },
        {
          artists: [
            {
                external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                  },
                  href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
                  id: utils.getRandomString(22),
                  name: utils.getRandomName(),
                  type: "artist",
                  uri: `spotify:artist:${utils.getRandomString(22)}`
                }
          ],
          disc_number: 1,
          duration_ms: track_duration,
          explicit: false,
          external_urls: {
            spotify:`https://open.spotify.com/track/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          is_local: false,
          is_playable: true,
          name: "mirrorball",
          preview_url: null,
          track_number: 5,
          type: "track",
          uri: `spotify:track:${utils.getRandomString(22)}`
        },
        {
          artists: [
            {
                external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                  },
                  href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
                  id: utils.getRandomString(22),
                  name: utils.getRandomName(),
                  type: "artist",
                  uri: `spotify:artist:${utils.getRandomString(22)}`
                },
            {
              external_urls: {
                spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
              },
              href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
              id: utils.getRandomString(22),
              name: utils.getRandomName(),
              type: "artist",
              uri: `spotify:artist:${utils.getRandomString(22)}`
            }
          ],
          disc_number: 1,
          duration_ms: track_duration,
          explicit: false,
          external_urls: {
            spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          is_local: false,
          is_playable: true,
          name: "exile",
          preview_url: null,
          track_number: 6,
          type: "track",
          uri: `spotify:track:${utils.getRandomString(22)}`
        }
      ],
      limit: utils.getRandomInt(10,70),
      next: null,
      offset: 0,
      previous: null,
      total: 6
    },
    type: "album",
    uri: `spotify:album:${utils.getRandomString(22)}`
  };