export const EnvConfiguration = () => ({
    host: process.env.HOST,
    redisPort: process.env.REDIS_PORT,
    redisTtl: process.env.REDIS_TTL
})