import {
    getRandomString,
    getRandomDateTime,
    pickRandomValue,
    getRandomInt,    
  } from "@dynamic-data/utils";
  
  import MOCK from "@dynamic-data/veri-data";

  const MealActivityModel = {
    base_time_unix: () => {
      return getRandomInt(10);
    },
    base_time_string: () => {
      return getRandomDateTime('YYYY-MM-DD HH:MM:SS');
    },
    base_type: () => {
      const activityTypes = ['Glucose', 'Meal', 'Exercise', 'Sleep'];
      return pickRandomValue(activityTypes);
    },
    glucose_value: (base_type) => {
      const BaseType = ['Glucose'];
      if(BaseType.includes(base_type)) {
        return getRandomInt(50, 120);
      } else {
        return null;
      }
      
    },
    meal_title: (base_type) => {
      const baseType = ['Meal'];
      if(baseType.includes(base_type)) {
        const mealTypes = ['Banana', 'Apple', 'Pasta', 'Mushroom', 'Black Beans', 'Mandarin', 'Salad', 'Pizza', 'Ice-cream', 'Bread', 'Soup', 'Potato', 'Coffee', 'Dessert', 'Snacks', 'Yogurt', 'quinoa', 'eggs', 'spinach', 'Avacado toast', 'Lasagna', 'Gingerbread', 'Salmon', 'Wine', 'Pastry', 'Nuts'];
        return pickRandomValue(mealTypes);
      } else {
        return 0;
      }
    },
    meal_score: (base_type) => {
      const baseType = ['Meal'];
      if(baseType.includes(base_type)) {
        return getRandomInt(1, 10);
      } else {
        return 0;
      }
    },
    meal_tags: (base_type) => {
      const baseType = ['Meal'];      
      if(baseType.includes(base_type)) {
        return getRandomString(10);
      } else {
        return null;
      }
    },
    exercise_title: (basetype) => {
      const Basetype = ['Exercise'];
      if(Basetype.includes(basetype)) {
        const exerciseTypes = ['Cross Training', 'Running', 'Walking'];
        return pickRandomValue(exerciseTypes);
      } else {
        return 0;
      }
    },
    exercise_duration_min: (basetype) => {
      const Basetype = ['Exercise'];
      if(Basetype.includes(basetype)) {
        return getRandomInt(1, 110);
      } else {
        return 0;
      }
    },
    sleep_duration_min: (basetype) => {
      const Basetype = ['Sleep'];
      if(Basetype.includes(basetype)) {
        return getRandomInt(10, 600);
      } else {
        return 0;
      }
    },
    note_note: () => {
      return getRandomString(25);
    },
    customEvent_title: () => {
      return null;
    },
    customEvent_duration_min: () => {
      return null;
    },
  };
  
  const dataModels = {
    MealActivity: {
      data: MOCK['mealActivity'],
      mockup: MealActivityModel,
    }
  };
  
  export function getModelCSVHeader(dataModel) {
    return dataModels[dataModel].data[0].split("\t");
  };
  
  export function getMealActivityMockupData(dataType, dataModel, dataDate) {
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
  
    console.log(mockupData);
    [
      "base_time_unix",
      "base_time_string",
      "base_type",
      "glucose_value",
      "meal_title",
      "meal_score",
      "meal_tags",
      "exercise_title",
      "exercise_duration_min",
      "sleep_duration_min",
      "note_note",
      "customEvent_title",
      "customEvent_duration_min"
    ].forEach((key, i) => {
      switch (key) {
        case "base_time_unix":
          mockupData[key] = mockupModel[key]();
          break;
        case "base_time_string":
          mockupData[key] = dataDate + ' 12:59:59';
          break;
        case "base_type":
          mockupData[key] = mockupModel[key]();
          break;
        case "glucose_value":
          mockupData[key] = mockupModel[key](
            mockupData['type']
          );
          break;
        case "meal_title":
          mockupData[key] = mockupModel[key](
            mockupData['type']
          );
          break;
        case "meal_score":
          mockupData[key] = mockupModel[key](
            mockupData['type']
          );
          break;
        case "meal_tags":
          mockupData[key] = mockupModel[key](
            mockupData['type']
          );
          break;
        case "exercise_title":
          mockupData[key] = mockupModel[key](
            mockupData['type']
          );
          break;
        case "exercise_duration_min":
          mockupData[key] = mockupModel[key](
            mockupData['type']
          );
          break;
        case "sleep_duration_min":
          mockupData[key] = mockupModel[key](
            mockupData['type']
          );
          break;
        case "note_note":
          mockupData[key] = mockupModel[key]();
          break;
        case "customEvent_title":
          mockupData[key] = mockupModel[key]();
          break;
        case "customEvent_duration_min":
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
    return mockupData;
  }