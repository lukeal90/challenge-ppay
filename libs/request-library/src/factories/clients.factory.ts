import {AxiosClient} from '../httpClients/axiosCLient';
import {FetchClient} from '../httpClients/fetchClient';
import { IHttpClient } from '../interfaces'
import { HttpService } from '@nestjs/axios'; 
export class RequestLibraryFactory{
     createClient(options, httpService){
        switch(options.client) {
            case "Axios":
                return new AxiosClient(httpService);
                break;
            case "Fetch":
                return new FetchClient();
            default:
                return null;        
        }
    }
}