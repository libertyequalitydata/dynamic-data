'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

const RawDataObject = [{
  rsid: "rs12913832",
  chromosome: 15,
  position: 28365618,
  genotype: "AA"
}];

//
const Data = {
  RawDataObject
};

var allPositions = [];
var RawDataModel = {
  rsid: function rsid() {
    //https://www.snpedia.com/index.php?title=Category:Is_a_snp&pageuntil=Rs1004467#mw-pages
    var letters = ["i", "myh", "omim", "rs"]; //100,000+ snps that fall into 4 categories

    var string = "";
    var letter = letters[getRandomInt(0, letters.length) - 1];
    string += letter;

    switch (letter) {
      case "omim":
        string += "604611.0004";
        break;

      case "myh":
        string += "6 c.2161";
        break;

      case "i":
        string += getRandomInt(700013, 6056364);
        break;

      case "rs":
        string += getRandomInt(0, 1008240677);
        break;
    }

    return string;
  },
  chromosome: function chromosome() {
    //Humans have 23 chromosomes
    return getRandomInt(0, 23);
  },
  position: function position() {
    //Over 600,000+ positions
    var x;

    do {
      x = getRandomInt(10000000, 99999999);
    } while (allPositions.includes(x));

    allPositions.push(x);
    return x;
  },
  genotype: function genotype() {
    //A and T can combine with each other, C and G can combine with each other. All alleles can combine with themself 
    var first = getRandomInt(0, 4);
    var string = "";

    switch (first) {
      case 1:
        string += "A";
        break;

      case 2:
        string += "T";
        break;

      case 3:
        string += "C";
        break;

      case 4:
        string += "G";
        break;
    }

    var second = getRandomInt(0, 2);

    if (string === "A" || string === "T") {
      switch (second) {
        case 1:
          string += "A";
          break;

        case 2:
          string += "T";
          break;
      }
    } else {
      switch (second) {
        case 1:
          string += "C";
          break;

        case 2:
          string += "G";
          break;
      }
    }

    return string;
  }
};
var dataModels = {
  RawData: {
    data: Data.RawDataObject,
    mockup: RawDataModel
  }
};
function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}
function getRawData(dataType, dataModel, dataDate) {
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

  var exampleData = mockupData[0]; //https://genomapp.com/en/dna-raw-data-format/ - 600,000-3,000,000 sites

  for (var i = 0; i < 600000; i++) {
    mockupData.push(Object.assign({}, exampleData));
  }

  mockupData.forEach(function (object) {
    ["rsid", "chromosome", "position", "genotype"].forEach(function (key, i) {
      switch (key) {
        case "rsid":
        case "chromosome":
        case "position":
        case "genotype":
          object[key] = mockupModel[key]();
          break;
      }
    });
  });

  function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }

    var pivot = array[0];
    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
      array[i].position < pivot.position ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
  }

  mockupData = quicksort(mockupData); // mockupData.sort((a,b)=>{
  //   return a.position - b.position;
  // })

  return mockupData;
}

exports.getModelCSVHeader = getModelCSVHeader;
exports.getRawData = getRawData;
