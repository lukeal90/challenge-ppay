import { IHttpClient } from "../interfaces/IHttpClient.interface";
import { HttpService } from '@nestjs/axios';

export class AxiosClient implements IHttpClient {
    constructor(private readonly httpService: HttpService){}

    async get<T>(url: string, config?: any): Promise<T> {
        console.log("soy el get de axios")
        const response = await this.httpService.axiosRef.get(url);
        return response.data;
    }
    async post<T>(url: string, data: any, config?: any): Promise<T> {
        return await this.httpService.axiosRef.post(url, data);
    }
}