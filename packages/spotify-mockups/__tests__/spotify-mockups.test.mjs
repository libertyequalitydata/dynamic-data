'use strict';


const MOCK = require("@dynamic-data/spotify-data");

const {
    getAlbumMockupData,
    getArtistMockupData,
    getArtistRelatedArtistwMockupData,
    getArtistTopTracksMockupData,
    getShowsMockupData,
    getPlaylistMockupData,
    getTrackMockupData,
    getTrackAudioAnalysisMockupData,
    getTrackAudioFeaturesMockupData,
    getUserProfileMockupData,
    getEpisodeMockupData
} = require("../../spotify-mockups/src");


describe('spotify-data', () => {
    it('getAlbumMockupData', () => {
      const result = getAlbumMockupData(
        "SYNC",
        "AlbumModel",
        "2022-11-10"
      );
      expect(typeof result).toBe('object');
      expect(!Array.isArray(result)).toBeTruthy();
      expect(Object.keys(result).length).not.toBe(0);
    });
    it('getArtistMockupData', () => {
        const result = getArtistMockupData(
          "SYNC",
          "ArtistModel",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getArtistRelatedArtistwMockupData', () => {
        const result = getArtistRelatedArtistwMockupData(
          "SYNC",
          "ArtistRelatedArtistModel",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getArtistTopTracksMockupData', () => {
        const result = getArtistTopTracksMockupData(
          "SYNC",
          "ArtistTopTracksModel",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getShowsMockupData', () => {
        const result = getShowsMockupData(
          "SYNC",
          "ShowsModel",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getPlaylistMockupData', () => {
        const result = getPlaylistMockupData(
          "SYNC",
          "PlaylistModel",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getTrackMockupData', () => {
        const result = getTrackMockupData(
          "SYNC",
          "TrackModel",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getTrackAudioAnalysisMockupData', () => {
        const result = getTrackAudioAnalysisMockupData(
          "SYNC",
          "TrackAudioAnalysisModel",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getTrackAudioFeaturesMockupData', () => {
        const result = getTrackAudioFeaturesMockupData(
          "SYNC",
          "TrackAudioFeaturesModel",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getUserProfileMockupData', () => {
        const result = getUserProfileMockupData(
          "SYNC",
          "UserProfileModel",
          "2022-11-10"
        );
        console.log(result);
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getEpisodeMockupData', () => {
        const result = getEpisodeMockupData(
          "SYNC",
          "EpisodeModel",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
  }); 

