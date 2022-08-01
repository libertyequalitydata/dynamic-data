export const HealthRecord = {
    startTime: 1609293600000000000,
    endTime: 1609380000000000000,
    dataTypeName: "com.huawei.continuous.ecg_record",
    value: [
        {
            fieldName: "ecg_type",
            integerValue: 1
        },
        {
            fieldName: "avg_heart_rate",
            integerValue: 75
        },
        {
            fieldName: "ecg_arrhythmia_type",
            longValue: 0
        },
        {
            fieldName: "user_symptom",
            longValue: 0
        },
        {
            fieldName: "sampling_frequency",
            integerValue: 0
        },
        {
            fieldName: "ecg_algorithm_version",
            stringValue: "1.0"
        }],
    id: "cmF3OmNvbS5odWF3ZWkuY29udGludW91cy5lY2dfcmVjb3JkOjMwMDAxMzEwMzpodWF3ZWk6bXA6MTIzNDU2Nzg5MC0xNjA5MzgwMDAwMDAwMDAwMDAw",
    subDataRelation: [{
        startTime: 1609293600000000000,
        endTime: 1609380000000000000,
        dataTypeName: "com.huawei.continuous.ecg_detail",
        dataCollectorId: "raw:com.huawei.continuous.ecg_detail:300013103:huawei:mp:1234567890"
    }],
    modifyTime: 1609380000000,
    originalDataCollectorId: "",
    metadata: "",
    subData: {
        "": {
            dataCollectorId: "",
            endTime: 1609380000000000000,
            samplePoints: [{
                dataTypeName: "",
                endTime: 1609380000000000000,
                startTime: 1609380000000000000,
                value: [
                    {
                        fieldName: "ecg_type",
                        integerValue: 1
                    }
                ],
                modifyTime: 1609380000000000000,
                originalDataCollectorId: "",
                metadata: ""
            }],
            startTime: 1609380000000000000,
            cursor: "",
        }
    },
}
