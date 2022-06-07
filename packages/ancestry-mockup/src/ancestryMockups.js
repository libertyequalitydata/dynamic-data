import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/ancestry-data";
//https://www.geneheritage.com/blog/what-is-raw-dna-data.html
let allPositions = []
const RawDataModel = {
  rsid: () => {//https://www.snpedia.com/index.php?title=Category:Is_a_snp&pageuntil=Rs1004467#mw-pages
    let letters = ["i", "myh", "omim", "rs"] //100,000+ snps that fall into 4 categories
    let string = ""
    let letter = letters[getRandomInt(0,letters.length)-1]
    string += letter
    switch (letter){
      case "omim":
        string += " 604611.0004"
        break;
      case "myh":
        string += "6 c.2161"
        break;
      case "i":
        string += getRandomInt(700013,6056364)
        break;
      case "rs":
        string += getRandomInt(0,1008240677)
        break;
    }
    return string
  },
  chromosome: () => { //Humans have 23 chromosomes
    return getRandomInt(0,23)
  },
  position: () => { //Over 600,000+ positions
    let x
    do {
      x =  getRandomInt(10000000,99999999)
    } while (allPositions.includes(x))
    allPositions.push(x)
    return x
  },
  allele1: () => { //A and T can combine with each other, C and G can combine with each other. All alleles can combine with themself 
    switch (getRandomInt(0,4)){
      case 1:
        return "A"
      case 2:
        return "T"
      case 3:
        return "C"
      case 4:
        return "G"
    }
  },
  allele2: (allele1) => { //A and T can combine with each other, C and G can combine with each other. All alleles can combine with themself 
    switch (allele1){
      case "A":
      case "T":
        switch (getRandomInt(0,2)){
          case 1:
            return "A"
          case 2:
            return "T"
        }
      case "C":
      case "G":
        switch (getRandomInt(0,2)){
          case 1:
            return "C"
          case 2:
            return "G"
        }
    }
    
  },

}
const dataModels = {
  RawData: {
    data: MOCK.RawDataObject,
    mockup: RawDataModel
  },
};



export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getRawData(dataType, dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }
  if (dataType === "ASYNC") {
    const mockupDataRow = dataModels[dataModel].data[1].split("\t");
    const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach((k, i) => {
      mockupData[k] = mockupDataRow[i];
    });
  }
  let exampleData = mockupData[0]
  //https://genomapp.com/en/dna-raw-data-format/ - 600,000-3,000,000 sites
  for (var i = 0; i<10000; i++){
    mockupData.push(Object.assign({}, exampleData))
  }
  
  mockupData.forEach((object)=>{
    [
      "rsid",
      "chromosome",
      "position",
      "allele1",
      "allele2",
    ].forEach((key, i) => {
      switch (key) {
        case "allele2":
          object[key] = mockupModel[key](object["allele1"]);
          break;
        default:
          object[key] = mockupModel[key]();
          break;
      }
    });
  })
  // function quicksort(array) {
  //   if (array.length <= 1) {
  //     return array;
  //   }
  
  //   var pivot = array[0];
    
  //   var left = []; 
  //   var right = [];
  
  //   for (var i = 1; i < array.length; i++) {
  //     array[i].position < pivot.position ? left.push(array[i]) : right.push(array[i]);
  //   }
  
  //   return quicksort(left).concat(pivot, quicksort(right));
  // }
  // mockupData = quicksort(mockupData)
  // mockupData.sort((a,b)=>{
  //   return a.position - b.position;
  // })
  

  

  return mockupData;
}
