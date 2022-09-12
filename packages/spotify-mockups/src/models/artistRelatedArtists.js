const utils = require('@dynamic-data/utils');

export const artistRelatedArtists = {
    artists: [
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "miami hip hop",
          "pop",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb655ca8f3196953554b479452",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174655ca8f3196953554b479452",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178655ca8f3196953554b479452",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "pop",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb153171480a6f22912253b9f1",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174153171480a6f22912253b9f1",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178153171480a6f22912253b9f1",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "pop",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebc9ab8da6f7a3ce02f0b16fd8",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174c9ab8da6f7a3ce02f0b16fd8",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178c9ab8da6f7a3ce02f0b16fd8",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 675,
            url: "https://i.scdn.co/image/2d75f5222d8a92d5e12419ae3e5238261f943df6",
            width: 1000
          },
          {
            height: 432,
            url: "https://i.scdn.co/image/a91b72640d92fa70bfc7556d38114b3f010c5cc5",
            width: 640
          },
          {
            height: 135,
            url: "https://i.scdn.co/image/9b592e53e0ae00516c65580a254113bc7d0933e2",
            width: 200
          },
          {
            height: 43,
            url: "https://i.scdn.co/image/e7a7f70dc456d6844e2c15b44c4ff1853aac54f8",
            width: 64
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "pop",
          "pop rap",
          "post-teen pop"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb654972693e0efed3f3f4d090",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174654972693e0efed3f3f4d090",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178654972693e0efed3f3f4d090",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "miami hip hop",
          "pop",
          "post-teen pop",
          "urban contemporary"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb5d853b34ef123ce2da768c95",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051745d853b34ef123ce2da768c95",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1785d853b34ef123ce2da768c95",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "asian american hip hop",
          "dance pop",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb6f288ea7bd44c142791dc7cd",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051746f288ea7bd44c142791dc7cd",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1786f288ea7bd44c142791dc7cd",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "atl hip hop",
          "dance pop",
          "hip hop",
          "pop",
          "pop rap",
          "rap",
          "southern hip hop"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb8c518d4a4e60eff246453b0a",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051748c518d4a4e60eff246453b0a",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1788c518d4a4e60eff246453b0a",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "dancehall",
          "pop",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb60c3e9abe7327c0097738f22",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517460c3e9abe7327c0097738f22",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17860c3e9abe7327c0097738f22",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "pop",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebb34222b3d3fa6411434640da",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174b34222b3d3fa6411434640da",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178b34222b3d3fa6411434640da",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "hip hop",
          "hip pop",
          "pop",
          "pop rap",
          "urban contemporary"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb2ec030557b0529c01639529b",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051742ec030557b0529c01639529b",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1782ec030557b0529c01639529b",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "pop dance",
          "pop rap",
          "tropical house"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebbe38428c93058d49e48021ed",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174be38428c93058d49e48021ed",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178be38428c93058d49e48021ed",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "electropop",
          "pop",
          "post-teen pop"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174f271138f95fbe8188d909d50",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178f271138f95fbe8188d909d50",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "german dance",
          "pop house",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebe8f01811498596bb1088e1d5",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174e8f01811498596bb1088e1d5",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178e8f01811498596bb1088e1d5",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "norwegian hip hop",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebaee04f651b61ca7d91b73d64",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174aee04f651b61ca7d91b73d64",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178aee04f651b61ca7d91b73d64",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "edm",
          "pop",
          "pop rap"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb736f168bd2851c1e1523a12e",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174736f168bd2851c1e1523a12e",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178736f168bd2851c1e1523a12e",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "pop",
          "post-teen pop",
          "urban contemporary"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb1fd1c6d465e03a904d63c9b5",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051741fd1c6d465e03a904d63c9b5",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1781fd1c6d465e03a904d63c9b5",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "electro latino",
          "latin",
          "latin pop",
          "reggaeton",
          "trap latino"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb874c860c7fea4f5c97d4e6d9",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174874c860c7fea4f5c97d4e6d9",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178874c860c7fea4f5c97d4e6d9",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "atl hip hop",
          "crunk",
          "dance pop",
          "dirty south rap",
          "old school atlanta hip hop",
          "pop rap",
          "southern hip hop"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eba12641edfc4ffbbdf58f7d15",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174a12641edfc4ffbbdf58f7d15",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178a12641edfc4ffbbdf58f7d15",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      },
      {
        external_urls: {
          spotify: `https://open.spotify.com/artist/${utils.getRandomString(22)}`
        },
        followers: {
          href: null,
          total: utils.getRandomInt(2000, 99999999)
        },
        genres: [
          "dance pop",
          "edm",
          "electro house",
          "moombahton",
          "pop",
          "pop dance",
          "pop rap",
          "tropical house"
        ],
        href: `https://api.spotify.com/v1/artists/${utils.getRandomString(22)}`,
        id: utils.getRandomString(22),
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb133f44ab343b35c715a4ac97",
            width: 640
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174133f44ab343b35c715a4ac97",
            width: 320
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178133f44ab343b35c715a4ac97",
            width: 160
          }
        ],
        name: utils.getRandomName(),
        popularity: utils.getRandomInt(1,100),
        type: "artist",
        uri: `spotify:artist:${utils.getRandomString(22)}`
      }
    ]
  };