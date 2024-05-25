module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ["key1", "key2"]
  },
  url: env('STRAPI_URL'),
});
