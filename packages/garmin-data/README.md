# `garmin-data`

> Mockup datamodules for Garmin datasources

## Usage

Dataobjects:

- DailiesData
- EpochsData
- SleepsData
- PulseoxData

```
// CJS/Node

const {DailiesData} =require("@prifina/garmin-data/mockups");
const {EpochsData} =require("@prifina/garmin-data/mockups/ActivitySummaryAsync");
const GARMIN =require("@prifina/garmin-data"); // All objects...

```

```
// ESM/React

import {DailiesData} from "@prifina/garmin-data/mockups";
import {EpochsData} from "@prifina/garmin-data/mockups/ActivitySummaryAsync";
import GARMIN from "@prifina/garmin-data"; // All objects...

```
