export const AsyncData = (dataModel) => {
  let data = [];
  const header = Object.keys(dataModel).map((t) => {
    return t;
  });
  //console.log("HEADER ", header);
  data.push(header.join("\t"));
  const row = Object.keys(dataModel).map((t) => {
    if (Array.isArray(dataModel[t])) {
      //console.log("ARRAY ", t);
      return "[" + `${dataModel[t]}` + "]";
    } else {
      return dataModel[t];
    }
  });
  data.push(row.join("\t"));
  //console.log("DATA ", data);
  return data;
};
