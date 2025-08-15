// server/config/database.ts

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),
    useNullAsDefault: true,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
