const utils = require('@dynamic-data/utils');

export const trackAudioFeatures = {
    danceability: utils.getRandomFloat(0,1),
    energy: utils.getRandomFloat(0,1),
    key: utils.getRandomInt(1,9),
    loudness: utils.getRandomFloat(-60,0),
    mode: 1,
    speechiness: 0.103,
    acousticness: utils.getRandomFloat(0,1),
    instrumentalness: utils.getRandomFloat(0,1),
    liveness: 0.302,
    valence: utils.getRandomFloat(0,1),
    tempo: 114.944,
    type: "audio_features",
    id: utils.getRandomString(22),
    uri: `spotify:track:${utils.getRandomString(22)}`,
    track_href: `https://api.spotify.com/v1/tracks/${utils.getRandomString(22)}`,
    analysis_url: `https://api.spotify.com/v1/audio-analysis/${utils.getRandomString(22)}`,
    duration_ms: 207960,
    time_signature: 4
  };