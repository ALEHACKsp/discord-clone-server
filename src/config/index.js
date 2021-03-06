const { resolve } = require("path");
require("dotenv").config({ path: resolve(__dirname, "../../.env") });

module.exports = {
  mode: process.env.NODE_ENV,
  host: process.env.HOST,
  port: process.env.PORT,
  serverId: process.env.SERVER_ID,
  corsOrigin: process.env.CORS_ORIGIN,
  logsPathDev: resolve(process.cwd(), "./logs/"),
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  redisIndex: process.env.REDIS_DATABASE,
  redisPassword: process.env.REDIS_PASSWORD,
  sessionName: process.env.SESSION_NAME,
  sessionSecret: process.env.SESSION_SECRET,
  s3Bucket: process.env.S3_BUCKET,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  heartbeatInterval: process.env.WS_HEARTBEAR_INTERVAL,
  defaultGuild: process.env.DEFAULT_GUILD,
  adminUsername: process.env.ADMIN_USERNAME,
  adminPassword: process.env.ADMIN_PASSWORD,
  adminEmail: process.env.ADMIN_EMAIL
};
