'use strict';


import MOCK from "@dynamic-data/spotify-data";

import {
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
} from "@dynamic-data/spotify-mockups";


describe('spotify-mockups', () => {
    it('getAlbumMockupData', () => {
      const result = getAlbumMockupData(
        "SYNC",
        "Album",
        "2022-11-10"
      );
      expect(typeof result).toBe('object');
      expect(!Array.isArray(result)).toBeTruthy();
      expect(Object.keys(result).length).not.toBe(0);
    });
    it('getArtistMockupData', () => {
        const result = getArtistMockupData(
          "SYNC",
          "Artist",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getArtistRelatedArtistwMockupData', () => {
        const result = getArtistRelatedArtistwMockupData(
          "SYNC",
          "ArtistRelatedArtists",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getArtistTopTracksMockupData', () => {
        const result = getArtistTopTracksMockupData(
          "SYNC",
          "ArtistTopTracks",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getShowsMockupData', () => {
        const result = getShowsMockupData(
          "SYNC",
          "Show",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getPlaylistMockupData', () => {
        const result = getPlaylistMockupData(
          "SYNC",
          "Playlist",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getTrackMockupData', () => {
        const result = getTrackMockupData(
          "SYNC",
          "Track",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getTrackAudioAnalysisMockupData', () => {
        const result = getTrackAudioAnalysisMockupData(
          "SYNC",
          "TrackAudioAnalysis",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getTrackAudioFeaturesMockupData', () => {
        const result = getTrackAudioFeaturesMockupData(
          "SYNC",
          "TrackAudioFeatures",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getUserProfileMockupData', () => {
        const result = getUserProfileMockupData(
          "SYNC",
          "User",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
      it('getEpisodeMockupData', () => {
        const result = getEpisodeMockupData(
          "SYNC",
          "Episode",
          "2022-11-10"
        );
        expect(typeof result).toBe('object');
        expect(!Array.isArray(result)).toBeTruthy();
        expect(Object.keys(result).length).not.toBe(0);
      });
  }); 

