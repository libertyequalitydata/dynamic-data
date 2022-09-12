const utils = require('@dynamic-data/utils');

export const artistTopTracks = {
    tracks: [
      {
        album: {
          album_type: "album",
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
            external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2731dc7483a9fcfce54822a2f19",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e021dc7483a9fcfce54822a2f19",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048511dc7483a9fcfce54822a2f19",
              width: 64
            }
          ],
          name: "Planet Pit (Deluxe Version)",
          release_date: "2011-06-17",
          release_date_precision: "day",
          total_tracks: 16,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 252306,
        explicit: false,
        external_ids: {
          isrc: "USJAY1100032"
        },
        external_urls: {
          spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "Give Me Everything (feat. Ne-Yo, Afrojack & Nayer)",
        popularity: utils.getRandomInt(1,100),
        preview_url: "https://p.scdn.co/mp3-preview/bc3ab974555f9136cdbc25a003b55f93ca4b3c78?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 2,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      },
      {
        album: {
          album_type: "album",
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
          external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273f2486b438645e97b523e4f90",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02f2486b438645e97b523e4f90",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851f2486b438645e97b523e4f90",
              width: 64
            }
          ],
          name: "Global Warming: Meltdown (Deluxe Version)",
          release_date: "2012",
          release_date_precision: "year",
          total_tracks: 17,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 204160,
        explicit: false,
        external_ids: {
          isrc: "USRC11301695"
        },
        external_urls: {
          spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "Timber (feat. Ke$ha)",
        popularity: utils.getRandomInt(1,100),
        preview_url: "https://p.scdn.co/mp3-preview/9c744f3343092c3b52930c6010e0b4b9b8d93765?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 13,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      },
      {
        album: {
          album_type: "album",
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
          external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2731e340d1480e7bb29a45e3bd7",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048511e340d1480e7bb29a45e3bd7",
              width: 64
            }
          ],
          name: "Globalization",
          release_date: "2014-11-21",
          release_date_precision: "day",
          total_tracks: 11,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 229360,
        explicit: true,
        external_ids: {
          isrc: "USRC11402647"
        },
        external_urls: {
          spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "Time of Our Lives",
        popularity: utils.getRandomInt(1,100),
        preview_url: "https://p.scdn.co/mp3-preview/98acede443c4437c1b0feed4e9aa5b6265dd35dd?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 4,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      },
      {
        album: {
          album_type: "album",
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
          external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273f2486b438645e97b523e4f90",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02f2486b438645e97b523e4f90",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851f2486b438645e97b523e4f90",
              width: 64
            }
          ],
          name: "Global Warming: Meltdown (Deluxe Version)",
          release_date: "2012",
          release_date_precision: "year",
          total_tracks: 17,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 229506,
        explicit: false,
        external_ids: {
          isrc: "USRC11201328"
        },
        external_urls: {
          spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "Feel This Moment (feat. Christina Aguilera)",
        popularity: utils.getRandomInt(1,100),
        preview_url: "https://p.scdn.co/mp3-preview/8b78b1deb7ce65198ab1e3eeb913a97eff5fb1da?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 3,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      },
      {
        album: {
          album_type: "album",
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
          external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2731dc7483a9fcfce54822a2f19",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e021dc7483a9fcfce54822a2f19",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048511dc7483a9fcfce54822a2f19",
              width: 64
            }
          ],
          name: "Planet Pit (Deluxe Version)",
          release_date: "2011-06-17",
          release_date_precision: "day",
          total_tracks: 16,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 227280,
        explicit: false,
        external_ids: {
          isrc: "USJAY1100015"
        },
        external_urls: {
          spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "International Love (feat. Chris Brown)",
        popularity: utils.getRandomInt(1,100),
        preview_url: "https://p.scdn.co/mp3-preview/fb03867ab24e82ece63bcf8a2778ae3b241f064d?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 8,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      },
      {
        album: {
          album_type: "album",
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
          external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2731e340d1480e7bb29a45e3bd7",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048511e340d1480e7bb29a45e3bd7",
              width: 64
            }
          ],
          name: "Globalization",
          release_date: "2014-11-21",
          release_date_precision: "day",
          total_tracks: 11,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 236200,
        explicit: false,
        external_ids: {
          isrc: "USRC11401783"
        },
        external_urls: {
          spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "Fireball (feat. John Ryan)",
        popularity: utils.getRandomInt(1,100),
        preview_url: "https://p.scdn.co/mp3-preview/219b404f7af11f1e6f9952d856284fa8053dcfb5?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 3,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      },
      {
        album: {
          album_type: "album",
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
          external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b27342b84b2b0aa47bc162b29522",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e0242b84b2b0aa47bc162b29522",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d0000485142b84b2b0aa47bc162b29522",
              width: 64
            }
          ],
          name: "LEGENDADDY",
          release_date: "2022-03-25",
          release_date_precision: "day",
          total_tracks: 19,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 154493,
        explicit: true,
        external_ids: {
          isrc: "USUG12201728"
        },
        external_urls: {
          spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "HOT",
        popularity: utils.getRandomInt(1,100),
        preview_url: null,
        track_number: 14,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      },
      {
        album: {
          album_type: "album",
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
          external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273a511f69870fa68e7ba78c099",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02a511f69870fa68e7ba78c099",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851a511f69870fa68e7ba78c099",
              width: 64
            }
          ],
          name: "Pitbull Starring In Rebelution",
          release_date: "2009-08-27",
          release_date_precision: "day",
          total_tracks: 14,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 237600,
        explicit: false,
        external_ids: {
          isrc: "USJAY0900063"
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0OPyDgTRuIdCJ9B4bYSths"
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "Hotel Room Service",
        popularity: utils.getRandomInt(1,100),
        preview_url: "https://p.scdn.co/mp3-preview/342c08b5550f8ea9c83673df3afd3d9a96934b3d?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 8,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      },
      {
        album: {
          album_type: "album",
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
          external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2731dc7483a9fcfce54822a2f19",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e021dc7483a9fcfce54822a2f19",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048511dc7483a9fcfce54822a2f19",
              width: 64
            }
          ],
          name: "Planet Pit (Deluxe Version)",
          release_date: "2011-06-17",
          release_date_precision: "day",
          total_tracks: 16,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 234453,
        explicit: false,
        external_ids: {
          isrc: "USJAY1000153"
        },
        external_urls: {
          spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "Hey Baby (Drop It to the Floor) (feat. T-Pain)",
        popularity: utils.getRandomInt(1,100),
        preview_url: "https://p.scdn.co/mp3-preview/bccf42f49e65f845cfb6fbe6551eb7f44fb051e7?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 4,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      },
      {
        album: {
          album_type: "album",
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
          external_urls: {
            spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
          },
          href: `https://api.spotify.com/v1/albums/${utils.getRandomString(22)}`,
          id: utils.getRandomString(22),
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2731e340d1480e7bb29a45e3bd7",
              width: 640
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7",
              width: 300
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048511e340d1480e7bb29a45e3bd7",
              width: 64
            }
          ],
          name: "Globalization",
          release_date: "2014-11-21",
          release_date_precision: "day",
          total_tracks: 11,
          type: "album",
          uri: `spotify:album:${utils.getRandomString(22)}`
        },
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
        duration_ms: 222520,
        explicit: false,
        external_ids: {
          isrc: "USRC11400285"
        },
        external_urls: {
          spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
        },
        href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        is_local: false,
        is_playable: true,
        name: "We Are One (Ole Ola) [The Official 2014 FIFA World Cup Song] (feat. Jennifer Lopez & Claudia Leitte)",
        popularity: utils.getRandomInt(1,100),
        preview_url: "https://p.scdn.co/mp3-preview/faa5543826cbcfc6a14dd09ab8108bccbb13e8df?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 11,
        type: "track",
        uri: `spotify:track:${utils.getRandomString(22)}`
      }
    ]
  };