# `polar-data`

> Dynamic data modules for Polar datasources

## Usage

Dataobjects:
- getUserInfo
- listNotifications
- listActivities
- getActivitySummary
- getStepSample
- getZoneSample
- listTrainingExercises
- getExerciseSummary
- getHeartRateZones
- getAvailableSamples
- getSamples
- listPhysicalInfo
- getPhysicalInfo
- getWebhook
- listExercises
- getExercise
- listSleep
- getSleep
- getAvailableSleepTimes
- listNightlyRecharge
- getNightlyRecharge

```
// CJS/Node

const { getUserInfo } = require('@dynamic-data/polar-data');
const polarData = require('@dynamic-data/polar-data'); // All objects...

```

```
// ESM/React

import { getUserInfo } from '@dynamic-data/polar-data';
import polarData from '@dynamic-data/polar-data'; // All objects...

```