// Endpoint => GET => /v3/webhooks
// Returns created webhook if exists.

export const getWebhook = {
  data: {
    id: "abdf33",
    events: "EXERCISE, SLEEP",
    url: "https://myapp.example.com/acl_webhook"
  }
};