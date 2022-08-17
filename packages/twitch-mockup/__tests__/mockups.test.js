"use strict";

const {
  getVideos,
  getUserSubscription,
  getUsersFollows,
  getUsers,
  getUserExtensions,
  getUserBlockList,
  getUserActiveExtensions,
  getTopGames,
  getTeams,
  getStreamsMarkers,
  getStreams,
  getStreamKey,
  getSoundtrackPlaylists,
  getSoundtrackPlaylist,
  getSoundtrackCurrentTrack,
  getReleasedExtensions,
  getPrediction,
  getPolls,
  getModerators,
  getHypeTrainEvent,
  getGlobalEmotes,
  getGlobalChatBadges,
  getGames,
  getAnalytics, 
  getExtensionTransactions,
  getExtensionLiveChannels,
  getEmoteSets,
  getCustomRewardRedemption,
  getCustomReward,
  getCreatorGoals,
  getClips,
  getCheermotes,
  getChatSettings,
  getChannelStreamSchedule,
  getChannels,
  getChannelInformation,
  getChannelEmotes,
  getChannelEditors,
  getChannelChatBadges,
  getCategories,
  getBroadcasterSubscriptions,
  getBlockedTerms,
  getBitsLeaderboard,
  getBannedUsers,
  getAutoModSettings,
  getStreamTags
} = require("@dynamic-data/twitch-mockups");


describe("Twitch", () => {
  test.todo("needs tests");
  it("getVideos", () => {
    const result = getVideos (
      "SYNC",
      "Videos",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getUserSubscription", () => {
    const result = getUserSubscription (
      "SYNC",
      "UserSubscription",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getUsersFollows", () => {
    const result = getUsersFollows (
      "SYNC",
      "UsersFollows",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getUsers", () => {
    const result = getUsers (
      "SYNC",
      "Users",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getUserExtensions", () => {
    const result = getUserExtensions (
      "SYNC",
      "UserExtensions",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getUserBlockList", () => {
    const result = getUserBlockList (
      "SYNC",
      "UserBlockList",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getUserActiveExtensions", () => {
    const result = getUserActiveExtensions (
      "SYNC",
      "UserActiveExtensions",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getTopGames", () => {
    const result = getTopGames (
      "SYNC",
      "TopGames",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });

  it("getTeams", () => {
    const result = getTeams (
      "SYNC",
      "Teams",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getStreamsMarkers", () => {
    const result = getStreamsMarkers (
      "SYNC",
      "StreamsMarkers",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getStreams", () => {
    const result = getStreams (
      "SYNC",
      "Streams",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getStreamKey", () => {
    const result = getStreamKey (
      "SYNC",
      "StreamKey",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getSoundtrackPlaylists", () => {
    const result = getSoundtrackPlaylists (
      "SYNC",
      "SoundtrackPlaylists",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getSoundtrackPlaylist", () => {
    const result = getSoundtrackPlaylist (
      "SYNC",
      "SoundtrackPlaylist",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getSoundtrackCurrentTrack", () => {
    const result = getSoundtrackCurrentTrack (
      "SYNC",
      "SoundtrackCurrentTrack",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getReleasedExtensions", () => {
    const result = getReleasedExtensions (
      "SYNC",
      "ReleasedExtensions",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getPrediction", () => {
    const result = getPrediction (
      "SYNC",
      "Prediction",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getPolls", () => {
    const result = getPolls (
      "SYNC",
      "Polls",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getModerators", () => {
    const result = getModerators (
      "SYNC",
      "Moderators",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getHypeTrainEvent", () => {
    const result = getHypeTrainEvent (
      "SYNC",
      "HypeTrainEvents",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getGlobalEmotes", () => {
    const result = getGlobalEmotes (
      "SYNC",
      "GlobalEmotes",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getGlobalChatBadges", () => {
    const result = getGlobalChatBadges (
      "SYNC",
      "GlobalChatBadges",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getGames", () => {
    const result = getGames (
      "SYNC",
      "Games",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getFollowedStreams", () => {
    const result = getStreams (
      "SYNC",
      "FollowedStreams",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  it("getExtensionTransactions", () => {
    const result = getExtensionTransactions (
      "SYNC",
      "ExtensionTransactions",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  it("getExtensionLiveChannels", () => {
    const result = getExtensionLiveChannels (
      "SYNC",
      "ExtensionLiveChannels",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  
  it("getGameAnalytics", () => {
    const result = getAnalytics (
      "SYNC",
      "GameAnalytics",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  
  it("getExtensionAnalytics", () => {
    const result = getAnalytics (
      "SYNC",
      "ExtensionAnalytics",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  
  it("getEmoteSets", () => {
    const result = getEmoteSets (
      "SYNC",
      "EmoteSets",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  
  it("getCustomRewardRedemption", () => {
    const result = getCustomRewardRedemption (
      "SYNC",
      "CustomRewardRedemption",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  
  it("getCustomReward", () => {
    const result = getCustomReward (
      "SYNC",
      "CustomReward",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  it("getCreatorGoals", () => {
    const result = getCreatorGoals (
      "SYNC",
      "CreatorGoals",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  it("getClips", () => {
    const result = getClips (
      "SYNC",
      "Clips",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  
  it("getCheermotes", () => {
    const result = getCheermotes (
      "SYNC",
      "Cheermotes",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  it("getChatSettings", () => {
    const result = getChatSettings (
      "SYNC",
      "ChatSettings",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  })
  it("getChannelTeams", () => {
    const result = getTeams (
      "SYNC",
      "ChannelTeams",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getChannelStreamSchedule", () => {
    const result = getChannelStreamSchedule (
      "SYNC",
      "ChannelStreamSchedule",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getChannels", () => {
    const result = getChannels (
      "SYNC",
      "Channels",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getChannelInformation", () => {
    const result = getChannelInformation (
      "SYNC",
      "ChannelInformation",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getChannelEmotes", () => {
    const result = getChannelEmotes (
      "SYNC",
      "ChannelEmotes",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getChannelEditors", () => {
    const result = getChannelEditors (
      "SYNC",
      "ChannelEditors",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getChannelChatBadges", () => {
    const result = getChannelChatBadges (
      "SYNC",
      "ChannelChatBadges",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getCategories", () => {
    const result = getCategories (
      "SYNC",
      "Categories",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getBroadcasterSubscriptions", () => {
    const result = getBroadcasterSubscriptions (
      "SYNC",
      "BroadcasterSubscriptions",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getBlockedTerms", () => {
    const result = getBlockedTerms (
      "SYNC",
      "BlockedTerms",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getBitsLeaderboard", () => {
    const result = getBitsLeaderboard (
      "SYNC",
      "BitsLeaderboard",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getBannedUsers", () => {
    const result = getBannedUsers (
      "SYNC",
      "BannedUsers",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getAutoModSettings", () => {
    const result = getAutoModSettings (
      "SYNC",
      "AutoModSettings",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getAllStreamTags", () => {
    const result = getStreamTags (
      "SYNC",
      "AllStreamTags",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
  it("getStreamTags", () => {
    const result = getStreamTags (
      "SYNC",
      "StreamTags",
      "2022-04-03"
    );
     console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  
});
