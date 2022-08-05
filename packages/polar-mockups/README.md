# `polar-mockups`

> Mockup data modules for Polar datasources

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

const { getUserInfo } = require('@dynamic-data/polar-mockups');
const polarMockups = require('@dynamic-data/polar-mockups'); // All objects...

```

```
// ESM/React

import { getUserInfo } from '@dynamic-data/polar-mockups';
import polarMockups from '@dynamic-data/polar-mockups'; // All objects...

```