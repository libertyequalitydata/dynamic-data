// Endpoint => GET /v1.2/payment-methods
// with Privileged Scope
// The Payment Methods endpoint allows retrieving the list of the user’s available payment methods. These can be leveraged in order to supply a payment_method_id to the POST /requests endpoint.

export const paymentMethods = {
  payment_methods: [
    {
      payment_method_id: "5f384f7d-8323-4207-a297-51c571234a8c",
      type: "baidu_wallet",
      description: "***53",
    },
    {
      payment_method_id: "f33847de-8113-4587-c307-51c2d13a823c",
      type: "alipay",
      description: "ga***@uber.com",
    },
    {
      payment_method_id: "f43847de-8113-4587-c307-51c2d13a823c",
      type: "visa",
      description: "***23"
    },
    {
      payment_method_id: "517a6c29-3a2b-45cb-94a3-35d679909a71",
      type: "american_express",
      description: "***05"
    },
    {
      payment_method_id: "f53847de-8113-4587-c307-51c2d13a823c",
      type: "business_account",
      description: "Late Night Ride"
    }
  ],
  last_used: "f53847de-8113-4587-c307-51c2d13a823c"
}