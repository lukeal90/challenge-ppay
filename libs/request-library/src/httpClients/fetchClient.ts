import { IHttpClient } from "../interfaces/IHttpClient.interface";
import fetch from "node-fetch";

export class FetchClient implements IHttpClient {
    async get<T>(url: string, config?: any): Promise<T> {
        console.log("soy el get de fetch")
        const response = await fetch(url);
        return response.json();
    }
    post<T>(url: string, data: any, config?: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
}