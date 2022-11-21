// Endpoint => GET => https://api.spotify.com/v1/artists/{id}
// Parameters:
// =============================================================================================================
// | Name                 | Type  | Description                                                                |
// =============================================================================================================
// | id                   | string | The Spotify ID of the album.                                     |
// -------------------------------------------------------------------------------------------------------------
// | market               | string | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.|
// -------------------------------------------------------------------------------------------------------------


export const album = {
    album_type: "compilation",
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
        },
        href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
        id: "06HL4z0CvFAxyc27GXpf02",
        name: "Taylor Swift",
        type: "artist",
        uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02"
      }
    ],
    copyrights: [
      {
        text: "© 2020 Taylor Swift",
        type: "C"
      },
      {
        text: "℗ 2020 Taylor Swift",
        type: "P"
      }
    ],
    external_ids: {
      upc: "00602435154916"
    },
    external_urls: {
      spotify: "https://open.spotify.com/album/0UYykkGEPRrLfarEeclJQ7"
    },
    genres: [],
    href: "https://api.spotify.com/v1/albums/0UYykkGEPRrLfarEeclJQ7",
    id: "0UYykkGEPRrLfarEeclJQ7",
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
    label: "Taylor Swift",
    name: "folklore: the escapism chapter",
    popularity: 42,
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
                spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
              },
              href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
              id: "06HL4z0CvFAxyc27GXpf02",
              name: "Taylor Swift",
              type: "artist",
              uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02"
            }
          ],
          disc_number: 1,
          duration_ms: 211813,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/65YnIFKuwUCLIqMHAP8TAm"
          },
          href: "https://api.spotify.com/v1/tracks/65YnIFKuwUCLIqMHAP8TAm",
          id: "65YnIFKuwUCLIqMHAP8TAm",
          is_local: false,
          is_playable: true,
          name: "the lakes",
          preview_url: null,
          track_number: 1,
          type: "track",
          uri: "spotify:track:65YnIFKuwUCLIqMHAP8TAm"
        },
        {
          artists: [
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
              },
              href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
              id: "06HL4z0CvFAxyc27GXpf02",
              name: "Taylor Swift",
              type: "artist",
              uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02"
            }
          ],
          disc_number: 1,
          duration_ms: 208906,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/3SQ1kXxEYB2EXgIjFFhw2D"
          },
          href: "https://api.spotify.com/v1/tracks/3SQ1kXxEYB2EXgIjFFhw2D",
          id: "3SQ1kXxEYB2EXgIjFFhw2D",
          is_local: false,
          is_playable: true,
          name: "seven",
          preview_url: null,
          track_number: 2,
          type: "track",
          uri: "spotify:track:3SQ1kXxEYB2EXgIjFFhw2D"
        },
        {
          artists: [
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
              },
              href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
              id: "06HL4z0CvFAxyc27GXpf02",
              name: "Taylor Swift",
              type: "artist",
              uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02"
            }
          ],
          disc_number: 1,
          duration_ms: 289746,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/3NlFi71hwXnUbGlOVzlPvq"
          },
          href: "https://api.spotify.com/v1/tracks/3NlFi71hwXnUbGlOVzlPvq",
          id: "3NlFi71hwXnUbGlOVzlPvq",
          is_local: false,
          is_playable: true,
          name: "epiphany",
          preview_url: null,
          track_number: 3,
          type: "track",
          uri: "spotify:track:3NlFi71hwXnUbGlOVzlPvq"
        },
        {
          artists: [
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
              },
              href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
              id: "06HL4z0CvFAxyc27GXpf02",
              name: "Taylor Swift",
              type: "artist",
              uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02"
            }
          ],
          disc_number: 1,
          duration_ms: 239560,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/0M3xBZF1DDTsTUs7uUF7LR"
          },
          href: "https://api.spotify.com/v1/tracks/0M3xBZF1DDTsTUs7uUF7LR",
          id: "0M3xBZF1DDTsTUs7uUF7LR",
          is_local: false,
          is_playable: true,
          name: "cardigan",
          preview_url: null,
          track_number: 4,
          type: "track",
          uri: "spotify:track:0M3xBZF1DDTsTUs7uUF7LR"
        },
        {
          artists: [
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
              },
              href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
              id: "06HL4z0CvFAxyc27GXpf02",
              name: "Taylor Swift",
              type: "artist",
              uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02"
            }
          ],
          disc_number: 1,
          duration_ms: 208973,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/27jYaWciMSwJqIUbrMRFNU"
          },
          href: "https://api.spotify.com/v1/tracks/27jYaWciMSwJqIUbrMRFNU",
          id: "27jYaWciMSwJqIUbrMRFNU",
          is_local: false,
          is_playable: true,
          name: "mirrorball",
          preview_url: null,
          track_number: 5,
          type: "track",
          uri: "spotify:track:27jYaWciMSwJqIUbrMRFNU"
        },
        {
          artists: [
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
              },
              href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
              id: "06HL4z0CvFAxyc27GXpf02",
              name: "Taylor Swift",
              type: "artist",
              uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02"
            },
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/4LEiUm1SRbFMgfqnQTwUbQ"
              },
              href: "https://api.spotify.com/v1/artists/4LEiUm1SRbFMgfqnQTwUbQ",
              id: "4LEiUm1SRbFMgfqnQTwUbQ",
              name: "Bon Iver",
              type: "artist",
              uri: "spotify:artist:4LEiUm1SRbFMgfqnQTwUbQ"
            }
          ],
          disc_number: 1,
          duration_ms: 285640,
          explicit: false,
          external_urls: {
            spotify: "https://open.spotify.com/track/1MFRapRpkXLhgMplU0CM76"
          },
          href: "https://api.spotify.com/v1/tracks/1MFRapRpkXLhgMplU0CM76",
          id: "1MFRapRpkXLhgMplU0CM76",
          is_local: false,
          is_playable: true,
          name: "exile",
          preview_url: null,
          track_number: 6,
          type: "track",
          uri: "spotify:track:1MFRapRpkXLhgMplU0CM76"
        }
      ],
      limit: 50,
      next: null,
      offset: 0,
      previous: null,
      total: 6
    },
    type: "album",
    uri: "spotify:album:0UYykkGEPRrLfarEeclJQ7"
  };