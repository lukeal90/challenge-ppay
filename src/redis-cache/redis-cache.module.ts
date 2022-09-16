import { Module, CacheModule } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports: [
        CacheModule.register({
            store: redisStore,
            host: process.env.HOST,
            port: process.env.REDIS_PORT,
            // preguntar lo del env
            ttl:  120
          })        
    ],
    providers: [RedisCacheService],
    exports: [RedisCacheService]
})
export class RedisCacheModule {}
