'use strict';

import MOCK from "@dynamic-data/spotify-data";
import { album,
    artist,
    artistRelatedArtists,
    artistTopTracks,
    shows,
    playlist,
    track,
    trackAudioAnalysis,
    trackAudioFeatures,
    userProfile,
    episode } from "@dynamic-data/spotify-data/mockups";

describe('@dynamic-data/spotify-data', () => {
    it("Mockup datamodels from default", () => {
        console.log("MOCK ", MOCK);
        expect(typeof MOCK).toBe("object");
        expect(!Array.isArray(MOCK)).toBeTruthy();
        expect(Object.keys(MOCK).length).not.toBe(0);
      });
    it('check if album of type object', () => {
        expect(typeof album).toBe('object');
        expect(!Array.isArray(album)).toBeTruthy();
        expect(Object.keys(album).length).not.toBe(0);
    });
    it('check if artist of type object', () => {
        expect(typeof artist).toBe('object');
        expect(!Array.isArray(artist)).toBeTruthy();
        expect(Object.keys(artist).length).not.toBe(0);
    });
    it('check if artistRelatedArtists of type object', () => {
        expect(typeof artistRelatedArtists).toBe('object');
        expect(!Array.isArray(artistRelatedArtists)).toBeTruthy();
        expect(Object.keys(artistRelatedArtists).length).not.toBe(0);
    });
    it('check if artistRelatedArtists of type object', () => {
        expect(typeof artistTopTracks).toBe('object');
        expect(!Array.isArray(artistTopTracks)).toBeTruthy();
        expect(Object.keys(artistTopTracks).length).not.toBe(0);
    });
    it('check if artistRelatedArtists of type object', () => {
        expect(typeof shows).toBe('object');
        expect(!Array.isArray(shows)).toBeTruthy();
        expect(Object.keys(shows).length).not.toBe(0);
    });
    it('check if artistRelatedArtists of type object', () => {
        expect(typeof playlist).toBe('object');
        expect(!Array.isArray(playlist)).toBeTruthy();
        expect(Object.keys(playlist).length).not.toBe(0);
    });
    it('check if artistRelatedArtists of type object', () => {
        expect(typeof track).toBe('object');
        expect(!Array.isArray(track)).toBeTruthy();
        expect(Object.keys(track).length).not.toBe(0);
    });
    it('check if artistRelatedArtists of type object', () => {
        expect(typeof trackAudioAnalysis).toBe('object');
        expect(!Array.isArray(trackAudioAnalysis)).toBeTruthy();
        expect(Object.keys(trackAudioAnalysis).length).not.toBe(0);
    });
    it('check if artistRelatedArtists of type object', () => {
        expect(typeof trackAudioFeatures).toBe('object');
        expect(!Array.isArray(trackAudioFeatures)).toBeTruthy();
        expect(Object.keys(trackAudioFeatures).length).not.toBe(0);
    });
    it('check if artistRelatedArtists of type object', () => {
        expect(typeof userProfile).toBe('object');
        expect(!Array.isArray(userProfile)).toBeTruthy();
        expect(Object.keys(userProfile).length).not.toBe(0);
    });
    it('check if artistRelatedArtists of type object', () => {
        expect(typeof episode).toBe('object');
        expect(!Array.isArray(episode)).toBeTruthy();
        expect(Object.keys(episode).length).not.toBe(0);
    });
});
