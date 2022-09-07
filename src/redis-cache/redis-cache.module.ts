import { Module, CacheModule } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports: [
        ConfigModule,
        CacheModule.register({ 
            store: redisStore,
            host: 'localhost',
            port: 6379,
            ttl: 120
          })        
    ],
    providers: [RedisCacheService],
    exports: [RedisCacheService]
})
export class RedisCacheModule {}
