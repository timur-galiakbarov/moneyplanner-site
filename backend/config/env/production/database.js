const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      //filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      host: 'localhost',
      database: 'strapi',
      user: 'timur@localhost',
      password: 'XSW@zaq1',
    },
    useNullAsDefault: true,
  },
});
