import MOCK from "@dynamic-data/strava-data";
import { Activity,
  ActivityComments,
ActivityKudoers, 
ActivityLaps,
ActivityStream,
ActivityZone,
AthleteActivities,
AthleteClubs,
AthleteRoute,
AthleteStats,
AuthenticatedAthlete,
Club,
ClubActivities,
ClubAdministrators,
ClubMembers,
Equipment,
Route,
RouteStream,
SegmentEfforts,
SegmentEffortsStream,
Segments,
SegmentsStreams,
StarredSegments,
Upload,
Zones,} from "@dynamic-data/strava-data/mockups";

describe("Strava", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded Mockup datamodels from default", () => {
    console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded Activity datamodel from default", () => {
    console.log("Activity ", JSON.stringify(Activity, undefined, 2));
    expect(typeof Activity).toBe("object");
  });
  it("Expanded ActivityComments datamodel from default", () => {
    console.log("ActivityComments ", JSON.stringify(ActivityComments, undefined, 2));
    expect(typeof ActivityComments).toBe("object");
  });
  it("Expanded ActivityKudoers datamodel from default", () => {
    console.log("ActivityKudoers ", JSON.stringify(ActivityKudoers, undefined, 2));
    expect(typeof ActivityKudoers).toBe("object");
  });
  it("Expanded ActivityLaps datamodel from default", () => {
    console.log("ActivityLaps ", JSON.stringify(ActivityLaps, undefined, 2));
    expect(typeof ActivityLaps).toBe("object");
  });
  it("Expanded ActivityStream datamodel from default", () => {
    console.log("ActivityStream ", JSON.stringify(ActivityStream, undefined, 2));
    expect(typeof ActivityStream).toBe("object");
  });
  it("Expanded ActivityZone datamodel from default", () => {
    console.log("ActivityZone ", JSON.stringify(ActivityZone, undefined, 2));
    expect(typeof ActivityZone).toBe("object");
  });
  it("Expanded AthleteActivities datamodel from default", () => {
    console.log("AthleteActivities ", JSON.stringify(AthleteActivities, undefined, 2));
    expect(typeof AthleteActivities).toBe("object");
  });
  it("Expanded AthleteClubs datamodel from default", () => {
    console.log("AthleteClubs ", JSON.stringify(AthleteClubs, undefined, 2));
    expect(typeof AthleteClubs).toBe("object");
  });
  it("Expanded AthleteRoute datamodel from default", () => {
    console.log("AthleteRoute ", JSON.stringify(AthleteRoute, undefined, 2));
    expect(typeof AthleteRoute).toBe("object");
  });
  it("Expanded AthleteStats datamodel from default", () => {
    console.log("AthleteStats ", JSON.stringify(AthleteStats, undefined, 2));
    expect(typeof AthleteStats).toBe("object");
  });
  it("Expanded AuthenticatedAthlete datamodel from default", () => {
    console.log("AuthenticatedAthlete ", JSON.stringify(AuthenticatedAthlete, undefined, 2));
    expect(typeof AuthenticatedAthlete).toBe("object");
  });
  it("Expanded Club datamodel from default", () => {
    console.log("Club ", JSON.stringify(Club, undefined, 2));
    expect(typeof Club).toBe("object");
  });
  it("Expanded ClubActivities datamodel from default", () => {
    console.log("ClubActivities ", JSON.stringify(ClubActivities, undefined, 2));
    expect(typeof ClubActivities).toBe("object");
  });
  it("Expanded ClubAdministrators datamodel from default", () => {
    console.log("ClubAdministrators ", JSON.stringify(ClubAdministrators, undefined, 2));
    expect(typeof ClubAdministrators).toBe("object");
  });
  it("Expanded ClubMembers datamodel from default", () => {
    console.log("ClubMembers ", JSON.stringify(ClubMembers, undefined, 2));
    expect(typeof ClubMembers).toBe("object");
  });
  it("Expanded Equipment datamodel from default", () => {
    console.log("Equipment ", JSON.stringify(Equipment, undefined, 2));
    expect(typeof Equipment).toBe("object");
  });
  it("Expanded Route datamodel from default", () => {
    console.log("Route ", JSON.stringify(Route, undefined, 2));
    expect(typeof Route).toBe("object");
  });
  it("Expanded RouteStream datamodel from default", () => {
    console.log("RouteStream ", JSON.stringify(RouteStream, undefined, 2));
    expect(typeof RouteStream).toBe("object");
  });
  it("Expanded SegmentEfforts datamodel from default", () => {
    console.log("SegmentEfforts ", JSON.stringify(SegmentEfforts, undefined, 2));
    expect(typeof SegmentEfforts).toBe("object");
  });
  it("Expanded SegmentEffortsStream datamodel from default", () => {
    console.log("SegmentEffortsStream ", JSON.stringify(SegmentEffortsStream, undefined, 2));
    expect(typeof SegmentEffortsStream).toBe("object");
  });
  it("Expanded Segments datamodel from default", () => {
    console.log("Segments ", JSON.stringify(Segments, undefined, 2));
    expect(typeof Segments).toBe("object");
  });
  it("Expanded SegmentsStreams datamodel from default", () => {
    console.log("SegmentsStreams ", JSON.stringify(SegmentsStreams, undefined, 2));
    expect(typeof SegmentsStreams).toBe("object");
  });
  it("Expanded StarredSegments datamodel from default", () => {
    console.log("StarredSegments ", JSON.stringify(StarredSegments, undefined, 2));
    expect(typeof StarredSegments).toBe("object");
  });
  it("Expanded Upload datamodel from default", () => {
    console.log("Upload ", JSON.stringify(Upload, undefined, 2));
    expect(typeof Upload).toBe("object");
  });
  it("Expanded Zones datamodel from default", () => {
    console.log("Zones ", JSON.stringify(Zones, undefined, 2));
    expect(typeof Zones).toBe("object");
  });
});

