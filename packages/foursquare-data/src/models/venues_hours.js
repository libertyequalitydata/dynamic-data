const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);

export const venues_hours = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    hours: {
      timeframes: [
        {
          days: [
            1,
            2,
            3,
            4,
            5
          ],
          includesToday: true,
          open: [
            {
              start: "1600",
              end: "+0100"
            }
          ],
          segments: []
        },
        {
          days: [
            6,
            7
          ],
          open: [
            {
              start: "1400",
              end: "+0000"
            }
          ],
          segments: []
        }
      ]
    },
    popular: {
      timeframes: [
        {
          days: [
            5
          ],
          includesToday: true,
          open: [
            {
              start: "1700",
              end: "+0000"
            }
          ],
          segments: []
        },
        {
          days: [
            6
          ],
          open: [
            {
              start: "1600",
              end: "+0000"
            }
          ],
          segments: []
        },
        {
          days: [
            7
          ],
          open: [
            {
              start: "1500",
              end: "2300"
            }
          ],
          segments: []
        },
        {
          days: [
            1,
            2,
            3
          ],
          open: [
            {
              start: "1800",
              end: "2300"
            }
          ],
          segments: []
        },
        {
          days: [
            4
          ],
          open: [
            {
              start: "1800",
              end: "+0000"
            }
          ],
          segments: []
        }
      ]
    }
  }
};