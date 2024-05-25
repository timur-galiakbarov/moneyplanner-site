module.exports = ({ env }) => ({
  auth: {
    secret: "ADMIN_JWT_SECRET",
  },
  apiToken: {
    salt: "API_TOKEN_SALT",
  },
  transfer: {
    token: {
      salt: "TRANSFER_TOKEN_SALT",
    }
  }
});
