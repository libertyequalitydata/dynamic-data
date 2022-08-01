//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/twitch-data";
import { 
  AllStreamTags,
  AutoModSettings,
  BannedUsers,
  BitsLeaderboard,
  BlockedTerms,
  BroadcasterSubscriptions,
  Categories,
  ChannelChatBadges,
  ChannelEditors,
  ChannelEmotes,
  ChannelInformation,
  ChannelStreamSchedule,
  ChannelTeams,
  Channels,
  ChatSettings,
  Cheermotes,
  Clips,
  CreatorGoals,
  CustomReward,
  CustomRewardRedemption,
  EmoteSets,
  ExtensionAnalytics,
  ExtensionLiveChannels,
  ExtensionTransactions,
  Extensions,
  FollowedStreams,
  GameAnalytics,
  Games,
  GlobalChatBadges,
  GlobalEmotes,
  HypeTrainEvents,
  Moderators,
  Polls,
  Predictions,
  ReleasedExtensions,
  SoundtrackCurrentTrack,
  SoundtrackPlaylist,
  SoundtrackPlaylists,
  StreamKey,
  StreamTags,
  Streams,
  StreamsMarkers,
  Teams,
  TopGames,
  UserActiveExtensions,
  UserBlockList,
  UserExtensions,
  UserSubscription,
  Users,
  UsersFollows,
  Videos
 }from "@dynamic-data/twitch-data";
 
describe("Twitch", () => {
   //test.todo("needs tests");
   it("All mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof MOCK).toBe("object");
  });
  it("Expanded mockup datamodels from default", () => {
    console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));

    expect(typeof MOCK).toBe("object");
  });
  it("AllStreamTags datamodels from default", () => {
    console.log("AllStreamTags ", JSON.stringify(AllStreamTags, undefined, 2));

    expect(typeof AllStreamTags).toBe("object");
  });
  it("AutoModSettings datamodels from default", () => {
    console.log("AutoModSettings ", JSON.stringify(AutoModSettings, undefined, 2));

    expect(typeof AutoModSettings).toBe("object");
  });
  it("BannedUsers datamodels from default", () => {
    console.log("BannedUsers ", JSON.stringify(BannedUsers, undefined, 2));

    expect(typeof BannedUsers).toBe("object");
  });
  it("BannedUsers datamodels from default", () => {
    console.log("BannedUsers ", JSON.stringify(BannedUsers, undefined, 2));

    expect(typeof BannedUsers).toBe("object");
  });
  it("BitsLeaderboard datamodels from default", () => {
    console.log("BitsLeaderboard ", JSON.stringify(BitsLeaderboard, undefined, 2));

    expect(typeof BitsLeaderboard).toBe("object");
  });
  it("BlockedTerms datamodels from default", () => {
    console.log("BlockedTerms ", JSON.stringify(BlockedTerms, undefined, 2));

    expect(typeof BlockedTerms).toBe("object");
  });
  it("BroadcasterSubscriptions datamodels from default", () => {
    console.log("BroadcasterSubscriptions ", JSON.stringify(BroadcasterSubscriptions, undefined, 2));

    expect(typeof BroadcasterSubscriptions).toBe("object");
  });
  it("Categories datamodels from default", () => {
    console.log("Categories ", JSON.stringify(Categories, undefined, 2));

    expect(typeof Categories).toBe("object");
  });
  it("ChannelChatBadges datamodels from default", () => {
    console.log("ChannelChatBadges ", JSON.stringify(ChannelChatBadges, undefined, 2));

    expect(typeof ChannelChatBadges).toBe("object");
  });
  it("ChannelEditors datamodels from default", () => {
    console.log("ChannelEditors ", JSON.stringify(ChannelEditors, undefined, 2));

    expect(typeof ChannelEditors).toBe("object");
  });
  it("ChannelEmotes datamodels from default", () => {
    console.log("ChannelEmotes ", JSON.stringify(ChannelEmotes, undefined, 2));

    expect(typeof ChannelEmotes).toBe("object");
  });
  it("ChannelInformation datamodels from default", () => {
    console.log("ChannelInformation ", JSON.stringify(ChannelInformation, undefined, 2));

    expect(typeof ChannelInformation).toBe("object");
  });
  it("ChannelStreamSchedule datamodels from default", () => {
    console.log("ChannelStreamSchedule ", JSON.stringify(ChannelStreamSchedule, undefined, 2));

    expect(typeof ChannelStreamSchedule).toBe("object");
  });
  it("ChannelTeams datamodels from default", () => {
    console.log("ChannelTeams ", JSON.stringify(ChannelTeams, undefined, 2));

    expect(typeof ChannelTeams).toBe("object");
  });
  it("Channels datamodels from default", () => {
    console.log("Channels ", JSON.stringify(Channels, undefined, 2));

    expect(typeof Channels).toBe("object");
  });
  it("ChatSettings datamodels from default", () => {
    console.log("ChatSettings ", JSON.stringify(ChatSettings, undefined, 2));

    expect(typeof ChatSettings).toBe("object");
  });
  it("Cheermotes datamodels from default", () => {
    console.log("Cheermotes ", JSON.stringify(Cheermotes, undefined, 2));

    expect(typeof Cheermotes).toBe("object");
  });
  it("Clips datamodels from default", () => {
    console.log("Clips ", JSON.stringify(Clips, undefined, 2));

    expect(typeof Clips).toBe("object");
  });
  it("CreatorGoals datamodels from default", () => {
    console.log("CreatorGoals ", JSON.stringify(CreatorGoals, undefined, 2));

    expect(typeof CreatorGoals).toBe("object");
  });
  it("CustomReward datamodels from default", () => {
    console.log("CustomReward ", JSON.stringify(CustomReward, undefined, 2));

    expect(typeof CustomReward).toBe("object");
  });
  it("CustomRewardRedemption datamodels from default", () => {
    console.log("CustomRewardRedemption ", JSON.stringify(CustomRewardRedemption, undefined, 2));

    expect(typeof CustomRewardRedemption).toBe("object");
  });
  it("EmoteSets datamodels from default", () => {
    console.log("EmoteSets ", JSON.stringify(EmoteSets, undefined, 2));

    expect(typeof EmoteSets).toBe("object");
  });
  it("ExtensionAnalytics datamodels from default", () => {
    console.log("ExtensionAnalytics ", JSON.stringify(ExtensionAnalytics, undefined, 2));

    expect(typeof ExtensionAnalytics).toBe("object");
  });
  it("ExtensionLiveChannels datamodels from default", () => {
    console.log("ExtensionLiveChannels ", JSON.stringify(ExtensionLiveChannels, undefined, 2));

    expect(typeof ExtensionLiveChannels).toBe("object");
  });
  it("ExtensionTransactions datamodels from default", () => {
    console.log("ExtensionTransactions ", JSON.stringify(ExtensionTransactions, undefined, 2));

    expect(typeof ExtensionTransactions).toBe("object");
  });
  it("Extensions datamodels from default", () => {
    console.log("Extensions ", JSON.stringify(Extensions, undefined, 2));

    expect(typeof Extensions).toBe("object");
  });
  it("FollowedStreams datamodels from default", () => {
    console.log("FollowedStreams ", JSON.stringify(FollowedStreams, undefined, 2));

    expect(typeof FollowedStreams).toBe("object");
  });
  it("GameAnalytics datamodels from default", () => {
    console.log("GameAnalytics ", JSON.stringify(GameAnalytics, undefined, 2));

    expect(typeof GameAnalytics).toBe("object");
  });
  it("Games datamodels from default", () => {
    console.log("Games ", JSON.stringify(Games, undefined, 2));

    expect(typeof Games).toBe("object");
  });
  it("GlobalChatBadges datamodels from default", () => {
    console.log("GlobalChatBadges ", JSON.stringify(GlobalChatBadges, undefined, 2));

    expect(typeof GlobalChatBadges).toBe("object");
  });
  it("GlobalEmotes datamodels from default", () => {
    console.log("GlobalEmotes ", JSON.stringify(GlobalEmotes, undefined, 2));

    expect(typeof GlobalEmotes).toBe("object");
  });
  it("HypeTrainEvents datamodels from default", () => {
    console.log("HypeTrainEvents ", JSON.stringify(HypeTrainEvents, undefined, 2));

    expect(typeof HypeTrainEvents).toBe("object");
  });
  it("Moderators datamodels from default", () => {
    console.log("Moderators ", JSON.stringify(Moderators, undefined, 2));

    expect(typeof Moderators).toBe("object");
  });
  it("Polls datamodels from default", () => {
    console.log("Polls ", JSON.stringify(Polls, undefined, 2));

    expect(typeof Polls).toBe("object");
  });
  it("Predictions datamodels from default", () => {
    console.log("Predictions ", JSON.stringify(Predictions, undefined, 2));

    expect(typeof Predictions).toBe("object");
  });
  it("ReleasedExtensions datamodels from default", () => {
    console.log("ReleasedExtensions ", JSON.stringify(ReleasedExtensions, undefined, 2));

    expect(typeof ReleasedExtensions).toBe("object");
  });
  it("SoundtrackCurrentTrack datamodels from default", () => {
    console.log("SoundtrackCurrentTrack ", JSON.stringify(SoundtrackCurrentTrack, undefined, 2));

    expect(typeof SoundtrackCurrentTrack).toBe("object");
  });
  it("SoundtrackPlaylist datamodels from default", () => {
    console.log("SoundtrackPlaylist ", JSON.stringify(SoundtrackPlaylist, undefined, 2));

    expect(typeof SoundtrackPlaylist).toBe("object");
  });
  it("SoundtrackPlaylists datamodels from default", () => {
    console.log("SoundtrackPlaylists ", JSON.stringify(SoundtrackPlaylists, undefined, 2));

    expect(typeof SoundtrackPlaylists).toBe("object");
  });
  it("StreamKey datamodels from default", () => {
    console.log("StreamKey ", JSON.stringify(StreamKey, undefined, 2));

    expect(typeof StreamKey).toBe("object");
  });
  it("StreamTags datamodels from default", () => {
    console.log("StreamTags ", JSON.stringify(StreamTags, undefined, 2));

    expect(typeof StreamTags).toBe("object");
  });
  it("Streams datamodels from default", () => {
    console.log("Streams ", JSON.stringify(Streams, undefined, 2));

    expect(typeof Streams).toBe("object");
  });
  it("StreamsMarkers datamodels from default", () => {
    console.log("StreamsMarkers ", JSON.stringify(StreamsMarkers, undefined, 2));

    expect(typeof StreamsMarkers).toBe("object");
  });
  it("Teams datamodels from default", () => {
    console.log("Teams ", JSON.stringify(Teams, undefined, 2));

    expect(typeof Teams).toBe("object");
  });
  it("TopGames datamodels from default", () => {
    console.log("TopGames ", JSON.stringify(TopGames, undefined, 2));

    expect(typeof TopGames).toBe("object");
  });
  it("UserActiveExtensions datamodels from default", () => {
    console.log("UserActiveExtensions ", JSON.stringify(UserActiveExtensions, undefined, 2));

    expect(typeof UserActiveExtensions).toBe("object");
  });
  it("UserBlockList datamodels from default", () => {
    console.log("UserBlockList ", JSON.stringify(UserBlockList, undefined, 2));

    expect(typeof UserBlockList).toBe("object");
  });
  it("UserExtensions datamodels from default", () => {
    console.log("UserExtensions ", JSON.stringify(UserExtensions, undefined, 2));

    expect(typeof UserExtensions).toBe("object");
  });
  it("UserSubscription datamodels from default", () => {
    console.log("UserSubscription ", JSON.stringify(UserSubscription, undefined, 2));

    expect(typeof UserSubscription).toBe("object");
  });
  it("Users datamodels from default", () => {
    console.log("Users ", JSON.stringify(Users, undefined, 2));

    expect(typeof Users).toBe("object");
  });
  it("UsersFollows datamodels from default", () => {
    console.log("UsersFollows ", JSON.stringify(UsersFollows, undefined, 2));

    expect(typeof UsersFollows).toBe("object");
  });
  it("Videos datamodels from default", () => {
    console.log("Videos ", JSON.stringify(Videos, undefined, 2));

    expect(typeof Videos).toBe("object");
  });
});
