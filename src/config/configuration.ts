export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    redis_database: {
      port: parseInt(process.env.REDIS_PORT, 10),
      ttl: parseInt(process.env.REDIS_TTL, 10)
    }
  });