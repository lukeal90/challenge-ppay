import { Injectable } from '@nestjs/common';
import { RedisCacheService } from '../redis-cache/redis-cache.service'; // necesario?

@Injectable()
export class UsersService {
    
    constructor(private cacheManager: RedisCacheService) {}

    async setUser(user){
        const response = await this.cacheManager.set("user", JSON.stringify(user));
        return response;
    }
    async getUsers(){
        let response = { "data" : "empty"};
        const userInCache = await this.cacheManager.get("user");
        if(userInCache) response.data = JSON.parse(userInCache);
        return response;
    }
}
