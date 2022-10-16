const utils = require('@dynamic-data/utils');

export const playlist = {
    collaborative: false,
    description: "A playlist for testing pourposes",
    external_urls: {
      spotify: `https://open.spotify.com/playlist/${utils.getRandomString(22)}`
    },
    followers: {
      href: null,
      total: utils.getRandomInt(1, 99999)
    },
    href: "https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n",
    id: utils.getRandomString(22),
    images: [
      {
        height: null,
        url: "https://i.scdn.co/image/ab67706c0000bebb8d0ce13d55f634e290f744ba",
        width: null
      }
    ],
    name: "Spotify Web API Testing playlist",
    owner: {
      display_name: "JMPerez²",
      external_urls: {
        spotify: "https://open.spotify.com/user/jmperezperez"
      },
      href: "https://api.spotify.com/v1/users/jmperezperez",
      id: "jmperezperez",
      type: "user",
      uri: "spotify:user:jmperezperez"
    },
    primary_color: null,
    public: true,
    snapshot_id: "MTgsZWFmNmZiNTIzYTg4ODM0OGQzZWQzOGI4NTdkNTJlMjU0OWFkYTUxMA==",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks?offset=0&limit=100&market=ES&locale=en-GB,en;q=0.9",
      items: [
        {
          added_at: "2015-01-15T12:39:22Z",
          added_by: {
            external_urls: {
              spotify: "https://open.spotify.com/user/jmperezperez"
            },
            href: "https://api.spotify.com/v1/users/jmperezperez",
            id: "jmperezperez",
            type: "user",
            uri: "spotify:user:jmperezperez"
          },
          is_local: false,
          primary_color: null,
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                  },
                  href: "https://api.spotify.com/v1/artists/5I8r2w4hf7OYp2cunjihxJ",
                  id: utils.getRandomString(22),
                  name: "Kularis",
                  type: "artist",
                  uri: `spotify:artist:${utils.getRandomString(22)}`
                }
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
              },
              href: "https://api.spotify.com/v1/albums/2pANdqPvxInB0YvcDiw4ko",
              id: utils.getRandomString(22),
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ab67616d0000b273ce6d0eef0c1ce77e5f95bbbc",
                  width: 640
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/ab67616d00001e02ce6d0eef0c1ce77e5f95bbbc",
                  width: 300
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/ab67616d00004851ce6d0eef0c1ce77e5f95bbbc",
                  width: 64
                }
              ],
              name: "Progressive Psy Trance Picks Vol.8",
              release_date: "2012-04-02",
              release_date_precision: "day",
              total_tracks: 20,
              type: "album",
              uri: `spotify:album:${utils.getRandomString(22)}`
            },
            artists: [
              {
                external_urls: {
                  spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                },
                href: "https://api.spotify.com/v1/artists/6eSdhw46riw2OUHgMwR8B5",
                id: utils.getRandomString(22),
                name: "Odiseo",
                type: "artist",
                uri: `spotify:artist:${utils.getRandomString(22)}`
              }
            ],
            disc_number: 1,
            duration_ms: 376000,
            episode: false,
            explicit: false,
            external_ids: {
              isrc: "DEKC41200989"
            },
            external_urls: {
              spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
            },
            href: "https://api.spotify.com/v1/tracks/4rzfv0JLZfVhOhbSQ8o5jZ",
            id: utils.getRandomString(22),
            is_local: false,
            is_playable: true,
            name: "Api",
            popularity: utils.getRandomInt(0,100),
            preview_url: "https://p.scdn.co/mp3-preview/c041e771812ae1aba8a431a4b6a8e1400b7751cf?cid=774b29d4f13844c495f206cafdad9c86",
            track: true,
            track_number: 10,
            type: "track",
            uri: `spotify:track:${utils.getRandomString(22)}`
          },
          video_thumbnail: {
            url: null
          }
        },
        {
          added_at: "2015-01-15T12:40:03Z",
          added_by: {
            external_urls: {
              spotify: "https://open.spotify.com/user/jmperezperez"
            },
            href: "https://api.spotify.com/v1/users/jmperezperez",
            id: "jmperezperez",
            type: "user",
            uri: "spotify:user:jmperezperez"
          },
          is_local: false,
          primary_color: null,
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                  },
                  href: "https://api.spotify.com/v1/artists/5VQE4WOzPu9h3HnGLuBoA6",
                  id: utils.getRandomString(22),
                  name: "Vlasta Marek",
                  type: "artist",
                  uri: `spotify:artist:${utils.getRandomString(22)}`
                }
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
              },
              href: "https://api.spotify.com/v1/albums/5Opp8ursJ6XoTTcqElvAJG",
              id: utils.getRandomString(22),
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ab67616d0000b273cf921f1b12eb4ecb99e1b4d4",
                  width: 640
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/ab67616d00001e02cf921f1b12eb4ecb99e1b4d4",
                  width: 300
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/ab67616d00004851cf921f1b12eb4ecb99e1b4d4",
                  width: 64
                }
              ],
              name: "Tibetan Bowls",
              release_date: "2000",
              release_date_precision: "year",
              total_tracks: 6,
              type: "album",
              uri: `spotify:album:${utils.getRandomString(22)}`
            },
            artists: [
              {
                external_urls: {
                  spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                },
                href: "https://api.spotify.com/v1/artists/5VQE4WOzPu9h3HnGLuBoA6",
                id: utils.getRandomString(22),
                name: "Vlasta Marek",
                type: "artist",
                uri: `spotify:artist:${utils.getRandomString(22)}`
              }
            ],
            disc_number: 1,
            duration_ms: 730066,
            episode: false,
            explicit: false,
            external_ids: {
              isrc: "NLA930601339"
            },
            external_urls: {
              spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
            },
            href: "https://api.spotify.com/v1/tracks/64IL0ZrOV7F6BDPm5fhfUa",
            id: utils.getRandomString(22),
            is_local: false,
            is_playable: true,
            "linked_from": {
              external_urls: {
                spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
              },
              href: "https://api.spotify.com/v1/tracks/5o3jMYOSbaVz3tkgwhELSV",
              id: utils.getRandomString(22),
              type: "track",
              uri: `spotify:track:${utils.getRandomString(22)}`
            },
            name: "Is",
            popularity: utils.getRandomInt(0,100),
            preview_url: "https://p.scdn.co/mp3-preview/c40175884feaa1277fe11990ee40764174cff220?cid=774b29d4f13844c495f206cafdad9c86",
            track: true,
            track_number: 2,
            type: "track",
            uri: `spotify:track:${utils.getRandomString(22)}`
          },
          video_thumbnail: {
            url: null
          }
        },
        {
          added_at: "2015-01-15T12:22:30Z",
          added_by: {
            external_urls: {
              spotify: "https://open.spotify.com/user/jmperezperez"
            },
            href: "https://api.spotify.com/v1/users/jmperezperez",
            id: "jmperezperez",
            type: "user",
            uri: "spotify:user:jmperezperez"
          },
          is_local: false,
          primary_color: null,
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                  },
                  href: "https://api.spotify.com/v1/artists/066X20Nz7iquqkkCW6Jxy6",
                  id: utils.getRandomString(22),
                  name: "LCD Soundsystem",
                  type: "artist",
                  uri: `spotify:artist:${utils.getRandomString(22)}`
                }
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
              },
              href: "https://api.spotify.com/v1/albums/4hnqM0JK4CM1phwfq1Ldyz",
              id: utils.getRandomString(22),
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ab67616d0000b273ee0d0dce888c6c8a70db6e8b",
                  width: 640
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/ab67616d00001e02ee0d0dce888c6c8a70db6e8b",
                  width: 300
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/ab67616d00004851ee0d0dce888c6c8a70db6e8b",
                  width: 64
                }
              ],
              name: "This Is Happening",
              release_date: "2010-05-17",
              release_date_precision: "day",
              total_tracks: 9,
              type: "album",
              uri: `spotify:album:${utils.getRandomString(22)}`
            },
            artists: [
              {
                external_urls: {
                  spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                },
                href: "https://api.spotify.com/v1/artists/066X20Nz7iquqkkCW6Jxy6",
                id: utils.getRandomString(22),
                name: "LCD Soundsystem",
                type: "artist",
                uri: `spotify:track:${utils.getRandomString(22)}`
              }
            ],
            disc_number: 1,
            duration_ms: 401440,
            episode: false,
            explicit: false,
            external_ids: {
              isrc: "US4GE1000022"
            },
            external_urls: {
              spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
            },
            href: "https://api.spotify.com/v1/tracks/4Cy0NHJ8Gh0xMdwyM9RkQm",
            id: utils.getRandomString(22),
            is_local: false,
            is_playable: true,
            name: "All I Want",
            popularity: utils.getRandomInt(0,100),
            preview_url: "https://p.scdn.co/mp3-preview/a06f6c66fd04f5875c6ee172152959850a121a60?cid=774b29d4f13844c495f206cafdad9c86",
            track: true,
            track_number: 4,
            type: "track",
            uri: `spotify:track:${utils.getRandomString(22)}`
          },
          video_thumbnail: {
            url: null
          }
        },
        {
          added_at: "2015-01-15T12:40:35Z",
          added_by: {
            external_urls: {
              spotify: "https://open.spotify.com/user/jmperezperez"
            },
            href: "https://api.spotify.com/v1/users/jmperezperez",
            id: "jmperezperez",
            type: "user",
            uri: "spotify:user:jmperezperez"
          },
          is_local: false,
          primary_color: null,
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                  },
                  href: "https://api.spotify.com/v1/artists/272ArH9SUAlslQqsSgPJA2",
                  id: utils.getRandomString(22),
                  name: "Glenn Horiuchi Trio",
                  type: "artist",
                  uri: `spotify:artist:${utils.getRandomString(22)}`
                }
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
              },
              href: "https://api.spotify.com/v1/albums/2usKFntxa98WHMcyW6xJBz",
              id: utils.getRandomString(22),
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ab67616d0000b2738b7447ac3daa1da18811cf7b",
                  width: 640
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/ab67616d00001e028b7447ac3daa1da18811cf7b",
                  width: 300
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/ab67616d000048518b7447ac3daa1da18811cf7b",
                  width: 64
                }
              ],
              name: "Glenn Horiuchi Trio / Gelenn Horiuchi Quartet: Mercy / Jump Start / Endpoints / Curl Out / Earthworks / Mind Probe / Null Set / Another Space (A)",
              release_date: "2011-04-01",
              release_date_precision: "day",
              total_tracks: 8,
              type: "album",
              uri: `spotify:album:${utils.getRandomString(22)}`
            },
            artists: [
              {
                external_urls: {
                  spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                },
                href: "https://api.spotify.com/v1/artists/272ArH9SUAlslQqsSgPJA2",
                id: utils.getRandomString(22),
                name: "Glenn Horiuchi Trio",
                type: "artist",
                uri: `spotify:artist:${utils.getRandomString(22)}`
              }
            ],
            disc_number: 1,
            duration_ms: 358760,
            episode: false,
            explicit: false,
            external_ids: {
              isrc: "USB8U1025969"
            },
            external_urls: {
              spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
            },
            href: "https://api.spotify.com/v1/tracks/6hvFrZNocdt2FcKGCSY5NI",
            id: utils.getRandomString(22),
            is_local: false,
            is_playable: true,
            name: "Endpoints",
            popularity: utils.getRandomInt(0,100),
            preview_url: "https://p.scdn.co/mp3-preview/f15a2ae83d0e8b076a51d11ce9b347037cb26a7a?cid=774b29d4f13844c495f206cafdad9c86",
            track: true,
            track_number: 2,
            type: "track",
            uri: `spotify:track:${utils.getRandomString(22)}`
          },
          video_thumbnail: {
            url: null
          }
        },
        {
          added_at: "2015-01-15T12:41:10Z",
          added_by: {
            external_urls: {
              spotify: "https://open.spotify.com/user/jmperezperez"
            },
            href: "https://api.spotify.com/v1/users/jmperezperez",
            id: "jmperezperez",
            type: "user",
            uri: "spotify:user:jmperezperez"
          },
          is_local: false,
          primary_color: null,
          track: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                  },
                  href: "https://api.spotify.com/v1/artists/2KftmGt9sk1yLjsAoloC3M",
                  id: utils.getRandomString(22),
                  name: "Zucchero",
                  type: "artist",
                  uri: `spotify:artist:${utils.getRandomString(22)}`
                }
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/${utils.getRandomString(22)}`
              },
              href: "https://api.spotify.com/v1/albums/0RxtWmjDExug0K5PZhhttP",
              id: utils.getRandomString(22),
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ab67616d0000b27301812d836e6c7f949eb81e35",
                  width: 640
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/ab67616d00001e0201812d836e6c7f949eb81e35",
                  width: 300
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/ab67616d0000485101812d836e6c7f949eb81e35",
                  width: 64
                }
              ],
              name: "All The Best",
              release_date: "2007-01-01",
              release_date_precision: "day",
              total_tracks: 18,
              type: "album",
              uri: `spotify:album:${utils.getRandomString(22)}`
            },
            artists: [
              {
                external_urls: {
                  spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
                },
                href: "https://api.spotify.com/v1/artists/2KftmGt9sk1yLjsAoloC3M",
                id: utils.getRandomString(22),
                name: "Zucchero",
                type: "artist",
                uri: `spotify:artist:${utils.getRandomString(22)}`
              }
            ],
            disc_number: 1,
            duration_ms: 176066,
            episode: false,
            explicit: false,
            external_ids: {
              isrc: "ITUM70701043"
            },
            external_urls: {
              spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
            },
            href: "https://api.spotify.com/v1/tracks/6dWqHAuGLmsjvUxOe9S2t6",
            id: utils.getRandomString(22),
            is_local: false,
            is_playable: true,
            "linked_from": {
              external_urls: {
                spotify: `https://open.spotify.com/track/${utils.getRandomString(22)}`
              },
              href: "https://api.spotify.com/v1/tracks/2E2znCPaS8anQe21GLxcvJ",
              id: utils.getRandomString(22),
              type: "track",
              uri: `spotify:track:${utils.getRandomString(22)}`
            },
            name: "You Are So Beautiful",
            popularity: utils.getRandomInt(0,100),
            preview_url: null,
            track: true,
            track_number: 18,
            type: "track",
            uri: `spotify:track:${utils.getRandomString(22)}`
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
      total: 5
    },
    type: "playlist",
    uri: `spotify:playlist:${utils.getRandomString(22)}`
  };