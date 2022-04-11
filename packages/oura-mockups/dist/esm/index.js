function toIsoString(date) {
  var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? "+" : "-",
      pad = function (num) {
    var norm = Math.floor(Math.abs(num));
    return (norm < 10 ? "0" : "") + norm;
  };

  return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + "T" + pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds()) + dif + pad(tzo / 60) + ":" + pad(tzo % 60);
}
function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
function getNewDate(dStr, days, format) {
  const currentDate = new Date(dStr);
  const dateTS = currentDate.setDate(currentDate.getDate() + days);

  switch (format) {
    case "ISO-UTC":
      return new Date(dateTS).toISOString();

    case "ISO-LOCAL":
      return toIsoString(new Date(dateTS));

    case "DATE":
      return new Date(dateTS).toISOString().split("T")[0];

    case "TS":
      return dateTS;
  }

  return null;
}
function getSleepDate(sleepDate, startHour, rangeHour) {
  const mins = getRandomInt(0, 59).toString().padStart(2, "0");
  const hours = getRandomInt(0, rangeHour);
  console.log(sleepDate, startHour, hours, mins); //const sleepDateTime=new Date(sleepDate+"T"+(startHour+hours).toString().padStart(2,"0")+":"+mins);

  let sleepDateTime = new Date(sleepDate + "T" + startHour.toString().padStart(2, "0") + ":" + mins);
  console.log(sleepDateTime);
  return toIsoString(new Date(sleepDateTime.getTime() + hours * 60 * 1000));
}

const ActivitySummary = {
  summary_date: "2016-09-03",
  day_start: "2016-09-03T04:00:00+03:00",
  day_end: "2016-09-04T03:59:59+03:00",
  timezone: 180,
  score: 87,
  score_stay_active: 90,
  score_move_every_hour: 100,
  score_meet_daily_targets: 60,
  score_training_frequency: 96,
  score_training_volume: 95,
  score_recovery_time: 100,
  daily_movement: 7806,
  non_wear: 313,
  rest: 426,
  inactive: 429,
  inactivity_alerts: 0,
  low: 224,
  medium: 49,
  high: 0,
  steps: 9206,
  cal_total: 2540,
  cal_active: 416,
  met_min_inactive: 9,
  met_min_low: 167,
  met_min_medium_plus: 159,
  met_min_medium: 159,
  met_min_high: 0,
  average_met: 1.4375,
  class_5min: "1112211111111111111111111111111111111111111111233322322223333323322222220000000000000000000000000000000000000000000000000000000233334444332222222222222322333444432222222221230003233332232222333332333333330002222222233233233222212222222223121121111222111111122212321223211111111111111111",
  met_1min: [1.2, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 1.2, 0.9, 1.1, 1.2, 1.1, 1.1, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 1.2, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.3, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.3, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.2, 0.9, 0.9, 0.9, 1.1, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.9, 2.7, 2.8, 1.6, 1.8, 1.5, 1.5, 1.8, 1.6, 1.9, 1.4, 1.9, 1.4, 1.5, 1.7, 1.7, 1.4, 1.5, 1.5, 1.7, 1.3, 1.7, 1.7, 1.9, 1.5, 1.4, 1.8, 2.2, 1.4, 1.6, 1.7, 1.7, 1.4, 1.5, 1.6, 1.4, 1.4, 1.7, 1.6, 1.3, 1.3, 1.4, 1.3, 2.6, 1.6, 1.7, 1.5, 1.6, 1.6, 1.8, 1.9, 1.8, 1.7, 2, 1.8, 2, 1.7, 1.5, 1.3, 2.4, 1.4, 1.6, 2, 2.8, 1.8, 1.5, 1.8, 1.6, 1.5, 1.8, 1.8, 1.4, 1.6, 1.7, 1.7, 1.6, 1.5, 1.5, 1.8, 1.8, 1.7, 1.8, 1.8, 1.5, 2.4, 1.9, 1.3, 1.2, 1.4, 1.3, 1.5, 1.2, 1.4, 1.4, 1.6, 1.5, 1.6, 1.4, 1.4, 1.6, 1.6, 1.6, 1.8, 1.7, 1.3, 1.9, 1.3, 1.2, 1.2, 1.3, 1.5, 1.4, 1.4, 1.3, 1.7, 1.2, 1.3, 1.5, 1.7, 1.5, 2.6, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.9, 3.6, 0.9, 0.1, 0.1, 0.1, 0.1, 0.1, 3.3, 3.8, 3.6, 2.3, 3.1, 3.2, 3.5, 4.3, 3.6, 1.7, 1.6, 2.8, 2.1, 3.3, 4.9, 3.3, 1.8, 5, 4.6, 5.3, 4.9, 4.9, 5.4, 5.4, 5.2, 5.3, 4.5, 5.3, 4.5, 4.4, 5, 5.3, 4.8, 4.6, 1.8, 4.4, 3.6, 3.5, 2.9, 2.6, 3.1, 0.9, 0.1, 2.9, 3.8, 1.7, 2.8, 1.8, 1.5, 1.4, 1.4, 1.3, 1.4, 1.3, 1.4, 1.3, 1.3, 1.2, 1.3, 1.6, 1.5, 1.5, 1.4, 1.8, 1.3, 1.4, 1.3, 1.4, 1.6, 1.6, 1.4, 1.3, 1.4, 1.4, 1.6, 1.5, 1.4, 2, 1.5, 1.4, 1.4, 1.3, 1.2, 1.3, 1.3, 1.6, 1.6, 1.5, 1.5, 1.8, 1.5, 1.2, 1.2, 1.5, 1.6, 1.5, 1.7, 1.7, 1.5, 1.6, 2.5, 1.5, 1.3, 1.2, 1.4, 1.6, 1.3, 1.6, 1.7, 2, 1.2, 1.3, 1.9, 3.3, 2.8, 1.7, 1.4, 1.4, 1.4, 1.5, 1.4, 1.5, 1.3, 2, 1.4, 1.2, 1.5, 1.2, 1.2, 1.8, 2.4, 3, 4.6, 4, 3.6, 2.2, 0.9, 4, 3.3, 2.6, 4.4, 2.3, 4.5, 5.2, 5.2, 5, 5.3, 5, 4.6, 5.4, 5.7, 5.5, 5.2, 5.5, 3.8, 5, 5, 4.4, 4.8, 5.5, 4.1, 4.5, 3.2, 3.3, 2.6, 4, 3.4, 2.1, 1.5, 1.5, 1.4, 1.4, 1.5, 1.3, 1.3, 1.5, 1.4, 1.2, 1.2, 1.4, 1.2, 1.2, 1.2, 1.2, 1.1, 1.3, 1.6, 1.8, 1.5, 1.3, 1.5, 1.5, 1.6, 1.5, 1.6, 1.4, 1.4, 1.4, 1.3, 1.3, 1.3, 1.3, 1.2, 1.3, 1.2, 1.2, 1.2, 0.9, 1.1, 1.1, 1.1, 1.1, 1.7, 1.1, 0.9, 0.9, 0.9, 1.1, 1.1, 0.9, 1.1, 0.9, 1.2, 1.3, 2.4, 2.2, 1.6, 0.9, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 2.4, 2.7, 1.3, 1.4, 1.3, 1.2, 1.3, 1.2, 1.4, 1.4, 2.2, 1.7, 2.9, 1.3, 1.4, 1.2, 1.3, 1.8, 2.1, 2.2, 2.5, 1.9, 2.3, 2.7, 2.3, 2, 1.7, 2, 2.1, 1.7, 1.8, 1.2, 1.2, 0.9, 0.9, 1.3, 1.4, 1.2, 1.6, 1.7, 2.4, 2.4, 2, 1.2, 1.3, 1.3, 1.2, 1.3, 2.4, 1.2, 1.2, 1.3, 2, 1.3, 1.8, 1.2, 1.2, 1.2, 1.2, 1.8, 1.7, 1.3, 1.3, 1.6, 1.8, 2.2, 1.3, 1.5, 1.5, 1.8, 1.3, 1.7, 1.8, 2.1, 2, 1.9, 1.6, 2, 1.8, 2, 1.6, 1.2, 1.7, 1.5, 1.5, 2.3, 2.6, 3.3, 3.3, 1.5, 1.2, 1.3, 1.5, 1.3, 1.5, 1.5, 3.7, 2.4, 3.3, 3, 3.7, 4.5, 2.8, 1.3, 1.9, 2.2, 1.6, 1.3, 1.2, 1.3, 1.3, 2.9, 3.3, 2, 2.2, 2.6, 2.7, 4.5, 3.2, 4.5, 3.3, 2.1, 3.4, 3, 2.7, 3.3, 2.1, 2.3, 1.7, 1.7, 2.8, 0.9, 2.2, 0.9, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 1.4, 1.6, 1.2, 1.2, 1.3, 1.7, 1.3, 1.5, 1.3, 1.3, 1.3, 1.3, 1.5, 2.9, 1.5, 1.2, 1.4, 1.2, 1.3, 1.3, 1.4, 1.3, 1.4, 1.4, 1.2, 1.2, 1.3, 1.2, 1.2, 1.2, 1.2, 1.4, 1.4, 1.3, 1.2, 1.2, 1.2, 1.9, 1.4, 1.3, 1.4, 1.3, 1.7, 1.3, 2.1, 2.9, 1.9, 1.8, 1.6, 1.4, 1.4, 1.7, 1.2, 1.5, 1.6, 1.9, 1.5, 1.8, 1.3, 1.2, 1.8, 2.3, 2, 2.2, 1.7, 1.5, 1.2, 1.2, 1.2, 1.1, 1.1, 1.4, 3.3, 2, 1.5, 2.4, 2.4, 1.6, 2.6, 2.5, 2.3, 1.5, 1.2, 1.2, 1.2, 1.3, 1.2, 1.2, 1.3, 2, 1.5, 1.7, 1.2, 1.3, 1.6, 1.5, 1.4, 1.4, 1.4, 1.2, 1.2, 1.1, 1.1, 0.9, 0.9, 1.3, 0.9, 0.9, 0.9, 0.9, 0.9, 1.3, 1.1, 1.1, 1.3, 0.9, 0.9, 1.3, 0.9, 1.5, 2.1, 2.1, 1.2, 1.2, 1.3, 1.2, 1.2, 1.5, 1.4, 1.3, 1.2, 1.2, 1.3, 1.3, 1.2, 1.3, 1.2, 1.2, 1.2, 1.2, 1.2, 1.4, 1.2, 1.5, 1.5, 1.4, 1.4, 1.5, 1.5, 1.3, 1.2, 1.2, 0.9, 2.3, 1.8, 1.3, 1.2, 1.2, 1.1, 0.9, 0.9, 0.9, 1.2, 1.6, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 1.9, 1.2, 1.3, 1.1, 1.3, 1.1, 0.9, 0.9, 0.9, 1.2, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 1.2, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 1.2, 1.6, 1.4, 1.3, 1.4, 1.5, 1.2, 1.2, 1.1, 0.9, 0.9, 1.1, 1.1, 0.9, 0.9, 1.1, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 1.1, 1.3, 0.9, 1.3, 1.1, 1.1, 0.9, 1.1, 0.9, 1.1, 0.9, 1.3, 1.2, 0.9, 1.1, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 1.1, 1.2, 1.6, 0.9, 1.1, 1.4, 3.7, 2.8, 3.2, 2.7, 1.2, 1.2, 1.3, 1.3, 1.3, 1.2, 1.2, 0.9, 0.9, 0.9, 1.1, 1.1, 0.9, 1.1, 1.3, 0.9, 1.1, 1.1, 1.1, 1.3, 4.1, 1.5, 1.7, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.1, 0.9, 0.9, 0.9, 1.1, 1.3, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 0.9, 1.3, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
  rest_mode_state: 0
};

const ReadinessSummary = {
  summary_date: "2016-09-03",
  period_id: 0,
  score: 62,
  score_previous_night: 5,
  score_sleep_balance: 75,
  score_previous_day: 61,
  score_activity_balance: 77,
  score_resting_hr: 98,
  score_hrv_balance: 90,
  score_recovery_index: 45,
  score_temperature: 86,
  rest_mode_state: 0
};

const SleepSummary = {
  summary_date: "2017-11-05",
  period_id: 0,
  is_longest: 1,
  timezone: 120,
  bedtime_start: "2017-11-06T02:13:19+02:00",
  bedtime_end: "2017-11-06T08:12:19+02:00",
  score: 70,
  score_total: 57,
  score_disturbances: 83,
  score_efficiency: 99,
  score_latency: 88,
  score_rem: 97,
  score_deep: 59,
  score_alignment: 31,
  total: 20310,
  duration: 21540,
  awake: 1230,
  light: 10260,
  rem: 7140,
  deep: 2910,
  onset_latency: 480,
  restless: 39,
  efficiency: 94,
  midpoint_time: 11010,
  hr_lowest: 49,
  hr_average: 56.375,
  rmssd: 54,
  breath_average: 13,
  temperature_delta: -0.06,
  hypnogram_5min: "443432222211222333321112222222222111133333322221112233333333332232222334",
  hr_5min: [0, 53, 51, 0, 50, 50, 49, 49, 50, 50, 51, 52, 52, 51, 53, 58, 60, 60, 59, 58, 58, 58, 58, 55, 55, 55, 55, 56, 56, 55, 53, 53, 53, 53, 53, 53, 57, 58, 60, 60, 59, 57, 59, 58, 56, 56, 56, 56, 55, 55, 56, 56, 57, 58, 55, 56, 57, 60, 58, 58, 59, 57, 54, 54, 53, 52, 52, 55, 53, 54, 56, 0],
  rmssd_5min: [0, 0, 62, 0, 75, 52, 56, 56, 64, 57, 55, 78, 77, 83, 70, 35, 21, 25, 49, 44, 48, 48, 62, 69, 66, 64, 79, 59, 67, 66, 70, 63, 53, 57, 53, 57, 38, 26, 18, 24, 30, 35, 36, 46, 53, 59, 50, 50, 53, 53, 57, 52, 41, 37, 49, 47, 48, 35, 32, 34, 52, 57, 62, 57, 70, 81, 81, 65, 69, 72, 64, 0]
};

const AsyncData = dataModel => {
  let data = [];
  const header = Object.keys(dataModel).map(t => {
    return t;
  }); //console.log("HEADER ", header);

  data.push(header.join("\t"));
  const row = Object.keys(dataModel).map(t => {
    if (Array.isArray(dataModel[t])) {
      //console.log("ARRAY ", t);
      return "[" + `${dataModel[t]}` + "]";
    } else {
      return dataModel[t];
    }
  });
  data.push(row.join("\t")); //console.log("DATA ", data);

  return data;
};

const ActivitySummaryAsync = AsyncData(ActivitySummary);

const ReadinessSummaryAsync = AsyncData(ReadinessSummary);

const SleepSummaryAsync = AsyncData(SleepSummary);

//
const Data = {
  SleepSummary,
  SleepSummaryAsync,
  ActivitySummary,
  ActivitySummaryAsync,
  ReadinessSummary,
  ReadinessSummaryAsync
};

var ActivitySummaryModel = {
  summary_date: function summary_date(d, i) {
    return getNewDate(d, i, "DATE");
  },
  day_end: function day_end(d, i) {
    return getNewDate(d, i, "DATE"); //return '2016-09-04T03:59:59+03:00';
  },
  daily_movement: function daily_movement() {
    return getRandomInt(1000, 15000);
  },
  steps: function steps(m) {
    var steps = getRandomInt(20, 60);
    return Math.ceil(m * steps / 100);
  },
  cal_total: function cal_total() {
    return getRandomInt(2000, 3500);
  },
  cal_active: function cal_active(m) {
    var cals = getRandomInt(20, 60);
    return Math.ceil(m * cals / 100);
  }
};
var ReadinessSummaryModel = {
  summary_date: function summary_date(d, i) {
    return getNewDate(d, i, "DATE");
  },
  score: function score() {
    return getRandomInt(60, 90);
  }
};
var SleepSummaryModel = {
  summary_date: function summary_date(d, i) {
    return getNewDate(d, i, "DATE");
  },
  bedtime_start: function bedtime_start(d, start, range) {
    console.log("BED TIME ", d, start, range);
    return getSleepDate(d, start, range);
  },
  bedtime_end: function bedtime_end(d, sleepTimeRangeInMins) {
    var sleepTime = getRandomInt(sleepTimeRangeInMins[0], sleepTimeRangeInMins[1]);
    var startTime = new Date(d).getTime();
    var endTime = startTime + sleepTime * 60 * 1000;
    return toIsoString(new Date(endTime));
  },
  score: function score() {
    return getRandomInt(60, 90);
  },
  duration: function duration(startTime, endTime) {
    var startTimeTS = new Date(startTime).getTime();
    var endTimeTS = new Date(endTime).getTime();
    return Math.ceil((endTimeTS - startTimeTS) / 1000); // secs
  },
  awake: function awake() {
    return getRandomInt(1000, 2000);
  },
  light: function light(totalSleep) {
    var p = getRandomInt(40, 70) / 100;
    return Math.ceil(totalSleep * p);
  },
  rem: function rem(sleepSecs) {
    var p = getRandomInt(40, 70) / 100;
    return Math.ceil(sleepSecs * p);
  }
};
var dataModels = {
  ActivitySummary: {
    data: Data.ActivitySummary,
    mockup: ActivitySummaryModel
  },
  ActivitySummaryAsync: {
    data: Data.ActivitySummaryAsync,
    mockup: ActivitySummaryModel
  },
  // CSV header is same as JSON attributes
  ReadinessSummary: {
    data: Data.ReadinessSummary,
    mockup: ReadinessSummaryModel
  },
  ReadinessSummaryAsync: {
    data: Data.ReadinessSummaryAsync,
    mockup: ReadinessSummaryModel
  },
  SleepSummary: {
    data: Data.SleepSummary,
    mockup: SleepSummaryModel
  },
  SleepSummaryAsync: {
    data: Data.SleepSummaryAsync,
    mockup: SleepSummaryModel
  }
};
function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}
function getActivityMockupData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["summary_date", "daily_movement", "cal_total", "day_start", "day_end", "steps", "cal_active"].forEach(function (key, i) {
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
        var dayStartTime = mockupData[key].split("T")[1];
        mockupData[key] = mockupData["summary_date"] + "T" + dayStartTime;
        break;

      case "day_end":
        var dayEndTime = mockupData[key].split("T")[1];
        var dayEndDate = mockupModel[key](mockupData["summary_date"], 1);
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
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["summary_date", "score"].forEach(function (key, i) {
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
  //console.log("MOCK 2 ", dataModel);
  //console.log("MOCK 4 ", dataDate);
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["summary_date", "score", "bedtime_start", "timezone", "bedtime_end", "duration", "awake", "total", "light", "rem", "deep"].forEach(function (key, i) {
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
        console.log("SLEEP ", mockupData, Object.keys(mockupData));
        mockupData[key] = mockupModel[key](mockupData["summary_date"], 22, 3);
        break;

      case "bedtime_end":
        // sleep time 5-9h
        mockupData[key] = mockupModel[key](mockupData["bedtime_start"], [5 * 60, 9 * 60]);
        break;

      case "duration":
        mockupData[key] = mockupModel[key](mockupData["bedtime_start"], mockupData["bedtime_end"]);
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
        mockupData[key] = mockupModel[key](mockupData["total"] - mockupData["light"]);
        break;

      case "deep":
        mockupData[key] = mockupData["total"] - mockupData["light"] - mockupData["rem"];
        break;
    }
  });
  return mockupData;
}

export { getActivityMockupData, getModelCSVHeader, getReadinessMockupData, getSleepMockupData };
