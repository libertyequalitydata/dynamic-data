export const HMEventTrigger = {
  "name": "",
  "isEnabled": "",
  "lastFireDate": "",
  "uniqueIdentifier": "",
  "actionSets": [{
    "uniqueIdentifier": "d0f88116-fa1e-4842-8a70-d031151cea62",
    "name": "Action Set 1",
    "actionSetType": "HMActionSetTypeHomeArrival",
    "actions": [{
        "uniqueIdentifier": "c448faee-b7df-4332-9ccb-1444599a3506"
    }],
    "isExecuting": false,
    "lastExecutionDate": 1659367125,
  }],
  "triggerActivationState": 4,
  "events": [{
      "uniqueIdentifier": "ce089f57-85e8-4195-afa4-2d56bc27df44",
      "region": {
          "identifier": "",
          "notifyOnEntry": true,
          "notifyOnExit": true
      }
  }],
  "endEvents": [{
      "uniqueIdentifier": "ce089f57-85e8-4195-afa4-2d56bc27df44",
      "region": {
          "identifier": "",
          "notifyOnEntry": true,
          "notifyOnExit": true
      }
  }],
  "recurrences": [
      {
          "weekday": 0
      }
  ],
  "executeOnce": false,
  "predicate": 'grade == "7"'
}