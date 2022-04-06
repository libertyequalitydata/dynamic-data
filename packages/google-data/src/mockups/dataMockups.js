export const Activity = [
  "p_timestamp\tp_datetime\tp_type\tp_confidence",
  "1417576831121\t2014-12-03T03:20:31.121Z\tSTILL\t87",
  "1417576831121\t2014-12-03T03:20:31.121Z\tUNKNOWN\t10",
  "1417576831121\t2014-12-03T03:20:31.121Z\tIN_VEHICLE\t3",
  "1417577043477\t2014-12-03T03:24:03.477Z\tSTILL\t100",
  "1417577223507\t2014-12-03T03:27:03.507Z\tSTILL\t100",
  "1417577403479\t2014-12-03T03:30:03.479Z\tSTILL\t100",
  "1417577584083\t2014-12-03T03:33:04.083Z\tSTILL\t100",
];

export const Location = [
  "p_timestamp\tp_datetime\tp_latitude\tp_longitude\tp_accuracy\tp_altitude\tp_verticalaccuracy\tp_heading",
  "1417576828681\t2014-12-03T03:20:28.681Z\t602447266\t247573079\t32\t111\t1\t230",
  "1417579369426\t2014-12-03T04:02:49.426Z\t602446995\t247574923\t64\t111\t1\t200",
];

export const Places = [
  {
    latitudeE7: 606224118,
    longitudeE7: 248047081,
    address: "Mäkikuumolantie 3\n05800 Hyvinkää\nSuomi",
    name: "Lidl Sveitsin Portaali",
    locationConfidence: 80,
    placeConfidence: "HIGH_CONFIDENCE",
    visitConfidence: 88,
    placeVisitType: "SINGLE_PLACE",
    placeVisitImportance: "MAIN",
    startTimestamp: "2022-02-01T09:24:24.250Z",
    endTimestamp: "2022-02-01T09:40:22.633Z",
  },
];
export const Routes = [
  {
    startLocation: { latitudeE7: 605841426, longitudeE7: 248303862 },
    endLocation: { latitudeE7: 606216471, longitudeE7: 248040694 },
    distance: 4410,
    confidence: "HIGH",
    activityType: "IN_PASSENGER_VEHICLE",
    startTimestamp: "2022-02-01T09:12:21.890Z",
    endTimestamp: "2022-02-01T09:24:24.250Z",
  },
];
