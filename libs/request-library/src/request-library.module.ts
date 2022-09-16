import { DynamicModule, Module } from '@nestjs/common';
import { RequestLibraryFactory } from './factories/clients.factory';
import { RequestLibraryService } from './request-library.service';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({})
export class RequestLibraryModule {
  static forRoot(options): DynamicModule{
    return{
      module: RequestLibraryModule,
      global: true,
      imports: [
        options.client == "Axios" ? HttpModule.register({
          timeout: options.timeout,
        }) : null
      ],
      providers: [
        RequestLibraryService,
        RequestLibraryFactory, {
          provide: "HTTP_CLIENT",
          useFactory: async (httpClientFactory: RequestLibraryFactory, httpService: HttpService) => {
            return httpClientFactory.createClient(options, httpService);
          },
          inject: [RequestLibraryFactory, HttpService]
        }
      ],
      exports: [RequestLibraryService]
    }
  }
}
