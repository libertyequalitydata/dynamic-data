const {
  ActivitySummary,
  ActivitySummaryAsync,
  ReadinessSummary,
  ReadinessSummaryAsync,
  SleepSummary,
  SleepSummaryAsync,
} = require("@prifina/oura-data/mockups");

const {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} = require("./randomUtils");

const ActivitySummaryModel = {
  summary_date: (d, i) => {
    return getNewDate(d, i, "DATE");
  },

  day_end: (d, i) => {
    return getNewDate(d, i, "DATE");
    //return '2016-09-04T03:59:59+03:00';
  },
  daily_movement: () => {
    return getRandomInt(1000, 15000);
  },

  steps: (m) => {
    const steps = getRandomInt(20, 60);
    return Math.ceil((m * steps) / 100);
  },
  cal_total: () => {
    return getRandomInt(2000, 3500);
  },
  cal_active: (m) => {
    const cals = getRandomInt(20, 60);
    return Math.ceil((m * cals) / 100);
  },
};

const ReadinessSummaryModel = {
  summary_date: (d, i) => {
    return getNewDate(d, i, "DATE");
  },
  score: () => {
    return getRandomInt(60, 90);
  },
};

const SleepSummaryModel = {
  summary_date: (d, i) => {
    return getNewDate(d, i, "DATE");
  },

  bedtime_start: (d, start, range) => {
    return getSleepDate(d, start, range);
  },
  bedtime_end: (d, sleepTimeRangeInMins) => {
    const sleepTime = getRandomInt(
      sleepTimeRangeInMins[0],
      sleepTimeRangeInMins[1]
    );
    const startTime = new Date(d).getTime();
    const endTime = startTime + sleepTime * 60 * 1000;
    return toIsoString(new Date(endTime));
  },
  score: () => {
    return getRandomInt(60, 90);
  },
  duration: (startTime, endTime) => {
    const startTimeTS = new Date(startTime).getTime();
    const endTimeTS = new Date(endTime).getTime();
    return Math.ceil((endTimeTS - startTimeTS) / 1000); // secs
  },
  awake: () => {
    return getRandomInt(1000, 2000);
  },
  light: (totalSleep) => {
    const p = getRandomInt(40, 70) / 100;
    return Math.ceil(totalSleep * p);
  },
  rem: (sleepSecs) => {
    const p = getRandomInt(40, 70) / 100;
    return Math.ceil(sleepSecs * p);
  },
};

const dataModels = {
  ActivitySummary: { data: ActivitySummary[0], mockup: ActivitySummaryModel },
  ActivitySummaryAsync: {
    data: ActivitySummaryAsync,
    mockup: ActivitySummaryModel,
  }, // CSV header is same as JSON attributes
  ReadinessSummary: {
    data: ReadinessSummary[0],
    mockup: ReadinessSummaryModel,
  },
  ReadinessSummaryAsync: {
    data: ReadinessSummaryAsync,
    mockup: ReadinessSummaryModel,
  },
  SleepSummary: { data: SleepSummary[0], mockup: SleepSummaryModel },
  SleepSummaryAsync: { data: SleepSummaryAsync, mockup: SleepSummaryModel },
};

function getActivityMockupData(dataType, dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }
  if (dataType === "ASYNC") {
    const mockupDataRow = dataModels[dataModel].data[1].split(",");
    const mockupDataHeader = dataModels[dataModel].data[0].split(",");
    mockupDataHeader.forEach((k, i) => {
      mockupData[k] = mockupDataRow[i];
    });
  }

  [
    "summary_date",
    "daily_movement",
    "cal_total",
    "day_start",
    "day_end",
    "steps",
    "cal_active",
  ].forEach((key, i) => {
    switch (key) {
      case "summary_date":
        mockupData[key] = dataDate;
        break;
      case "daily_movement":
        mockupData[key] = mockupModel[key]();
        break;
      case "cal_total":
        mockupData[key] = mockupModel[key]();
        break;

      case "day_start":
        const dayStartTime = mockupData[key].split("T")[1];
        mockupData[key] = mockupData["summary_date"] + "T" + dayStartTime;
        break;
      case "day_end":
        const dayEndTime = mockupData[key].split("T")[1];
        const dayEndDate = mockupModel[key](mockupData["summary_date"], 1);
        mockupData[key] = dayEndDate + "T" + dayEndTime;
        break;

      case "steps":
        mockupData[key] = mockupModel[key](mockupData["daily_movement"]);
        break;

      case "cal_active":
        mockupData[key] = mockupModel[key](mockupData["cal_total"]);
        break;
    }
  });

  return mockupData;
}

function getReadinessMockupData(dataType, dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }
  if (dataType === "ASYNC") {
    const mockupDataRow = dataModels[dataModel].data[1].split(",");
    const mockupDataHeader = dataModels[dataModel].data[0].split(",");
    mockupDataHeader.forEach((k, i) => {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["summary_date", "score"].forEach((key, i) => {
    switch (key) {
      case "summary_date":
        mockupData[key] = dataDate;
        break;
      case "score":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

function getSleepMockupData(dataType, dataModel, dataDate) {
  console.log("MOCK 2 ", dataModel);
  console.log("MOCK 4 ", dataDate);
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }
  if (dataType === "ASYNC") {
    const mockupDataRow = dataModels[dataModel].data[1].split(",");
    const mockupDataHeader = dataModels[dataModel].data[0].split(",");
    mockupDataHeader.forEach((k, i) => {
      mockupData[k] = mockupDataRow[i];
    });
  }

  [
    "summary_date",
    "score",
    "bedtime_start",
    "timezone",
    "bedtime_end",
    "duration",
    "awake",
    "total",
    "light",
    "rem",
    "deep",
  ].forEach((key, i) => {
    switch (key) {
      case "summary_date":
        mockupData[key] = dataDate;
        break;
      case "timezone":
        mockupData[key] = 0; // all dates are utc
        break;
      case "score":
        mockupData[key] = mockupModel[key]();
        break;
      case "bedtime_start":
        mockupData[key] = mockupModel[key](mockupData["summary_date"], 22, 3);
        break;
      case "bedtime_end":
        // sleep time 5-9h
        mockupData[key] = mockupModel[key](mockupData["bedtime_start"], [
          5 * 60,
          9 * 60,
        ]);
        break;
      case "duration":
        mockupData[key] = mockupModel[key](
          mockupData["bedtime_start"],
          mockupData["bedtime_end"]
        );
        break;
      case "awake":
        mockupData[key] = mockupModel[key]();
        break;
      case "total":
        mockupData[key] = mockupData["duration"] - mockupData["awake"];
        break;
      case "light":
        mockupData[key] = mockupModel[key](mockupData["total"]);
        break;
      case "rem":
        mockupData[key] = mockupModel[key](
          mockupData["total"] - mockupData["light"]
        );
        break;
      case "deep":
        mockupData[key] =
          mockupData["total"] - mockupData["light"] - mockupData["rem"];
        break;
    }
  });

  return mockupData;
}

function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split(",");
}

module.exports = {
  getActivityMockupData,
  getModelCSVHeader,
  getReadinessMockupData,
  getSleepMockupData,
};
