// Endpoint => GET => /v3/users/{user-id}/physical-information-transactions/{transaction-id}
// Parameters:
// =======================================================
// | Name           | Type | Description                 |
// =======================================================
// | user-id        | int  | User identifier             |
// -------------------------------------------------------
// | transaction-id | int  | Transaction identifier      |
// =======================================================
// List new physical info data. After successfully initiating a transaction, physical infos included within it can be retrieved with the provided transactionId.

export const listPhysicalInfo = {
  "physical-informations": [
    "https://www.polaraccesslink.com/v3/users/12/physical-information-transactions/12/physical-informations/56",
    "https://www.polaraccesslink.com/v3/users/12/physical-information-transactions/12/physical-informations/120"
  ]
};