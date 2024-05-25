module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      database: 'strapi',
      user: 'timur',
      password: 'XSW@zaq1',
    },
    useNullAsDefault: true,
  },
});
