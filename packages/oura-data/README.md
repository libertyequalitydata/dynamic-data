# `oura-data`

> Mockup datamodules for Oura datasources

## Usage

Dataobjects:

- SleepSummary
- SleepSummaryAsync
- ActivitySummary
- ActivitySummaryAsync
- ReadinessSummary
- ReadinessSummaryAsync

```
// CJS/Node

const {ActivitySummary} =require("@prifina/oura-data/mockups");
const {ActivitySummaryAsync} =require("@prifina/oura-data/mockups/ActivitySummaryAsync");
const OURA =require("@prifina/oura-data"); // All objects...

```

```
// ESM/React

import {ActivitySummary} from "@prifina/oura-data/mockups";
import {ActivitySummaryAsync} from "@prifina/oura-data/mockups/ActivitySummaryAsync";
import OURA from "@prifina/oura-data"; // All objects...

```
