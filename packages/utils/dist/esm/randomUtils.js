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

export { getNewDate, getRandomInt, getSleepDate, toIsoString };
