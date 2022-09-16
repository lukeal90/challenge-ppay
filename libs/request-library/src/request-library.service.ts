import { Inject, Injectable } from '@nestjs/common';
import { HttpCLientRepository } from './repositories/httpClient.repository';
@Injectable()
export class RequestLibraryService extends HttpCLientRepository<any> {
    constructor(
        @Inject("HTTP_CLIENT") httpClient
    ){
        super(httpClient);
    }
}


