import { Module, CacheModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { RequestLibraryModule } from '@app/request-library';
import { RequestLibraryService } from '@app/request-library';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration]
    }),
    UsersModule, 
    RedisCacheModule,
    RequestLibraryModule.forRoot({
      client: 'Axios',
      timeOut: 5000
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
