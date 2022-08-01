// Endpoint => GET => /v3/users/{user-id}
// Parameters:
// ====================================
// | Name    | Type | Description     |
// ====================================
// | user-id | int  | User identifier |
// ====================================
// List user basic information. Note: Although it is possible to get users weight and height from this resource, the get physical info should be used instead.

export const getUserInfo = {
  "polar-user-id": 2278512,
  "member-id": "i09u9ujj",
  "registration-date": "2011-10-14T12:50:37.000Z",
  "first-name": "Eka",
  "last-name": "Toka",
  birthdate: "1985-09-06",
  gender: "MALE",
  weight: 66,
  height: 170,
  "extra-info": [
    {
      value: "2",
      index: 0,
      name: "number-of-children"
    }
  ]
};