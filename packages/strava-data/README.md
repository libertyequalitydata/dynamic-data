# `strava-data`

> Mockup datamodules for Strava datasources

## Usage

Dataobjects:

- Activity
- ActivityComments
- ActivityKudoers 
- ActivityLaps
- ActivityStream
- ActivityZone
- AthleteActivities
- AthleteClubs
- AthleteRoute
- AthleteStats
- AuthenticatedAthlete
- Club
- ClubActivities
- ClubAdministrators
- ClubMembers
- Equipment
- Route
- RouteStream
- SegmentEfforts
- SegmentEffortsStream
- Segments
- SegmentsStreams
- StarredSegments
- Upload
- Zones


```
// CJS/Node

const { Activity,ActivityComments,ActivityKudoers, ActivityLaps,ActivityStream,ActivityZone,AthleteActivities,AthleteClubs,AthleteRoute,AthleteStats,AuthenticatedAthlete,Club,ClubActivities,ClubAdministrators,ClubMembers,Equipment,Route,RouteStream,SegmentEfforts,SegmentEffortsStream,Segments,SegmentsStreams,StarredSegments,Upload,Zones,} = require("@dynamic-data/strava-data");
const STRAVA = require("@prifina/strava-data"); // All objects...

```

```
// ESM/React
import { Activity,ActivityComments,ActivityKudoers, ActivityLaps,ActivityStream,ActivityZone,AthleteActivities,AthleteClubs,AthleteRoute,AthleteStats,AuthenticatedAthlete,Club,ClubActivities,ClubAdministrators,ClubMembers,Equipment,Route,RouteStream,SegmentEfforts,SegmentEffortsStream,Segments,SegmentsStreams,StarredSegments,Upload,Zones,} from "@prifina/strava-data";
import STRAVA from "@prifina/google-data"; // All objects...

```
