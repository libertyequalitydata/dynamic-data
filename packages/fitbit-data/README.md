# `fitbit-data`

> Mockup datamodules for Fitbit datasources

## Usage

Dataobjects:

- ActivitiesData
- ActivitiesDataAsync
- ActivitiesSummary
- ActivitiesSummaryAsync
- HeartRateData
- HeartRateDataAsync
- HeartRateSummary
- HeartRateSummaryAsync
- SleepData
- SleepDataAsync
- SleepSummary
- SleepSummaryAsync
- SleepQuality
- SleepQualityAsync

```
// CJS/Node

const {ActivitiesSummary} =require("@prifina/fitbit-data/mockups");
const {ActivitiesSummaryAsync} =require("@prifina/fitbit-data/mockups/ActivitiesSummaryAsync");
const FITBIT =require("@prifina/fitbit-data"); // All objects...

```

```
// ESM/React

import {ActivitiesSummary} from "@prifina/fitbit-data/mockups";
import {ActivitiesSummaryAsync} from "@prifina/fitbit-data/mockups/ActivitiesSummaryAsync";
import FITBIT from "@prifina/oura-data"; // All objects...

```
