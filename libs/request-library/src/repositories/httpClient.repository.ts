import { IHttpClient, IRepositoryClient } from '../interfaces';

export class HttpCLientRepository<T> implements IRepositoryClient<T> {
constructor(private httpClient: IHttpClient){}

    async get(url: string): Promise<T>{
        return this.httpClient.get(url);
    }

    async save(url: string, data: T): Promise<T>{
        return this.httpClient.post(url, data);
    }
}