import { Module, CacheModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    UsersModule, 
    RedisCacheModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
