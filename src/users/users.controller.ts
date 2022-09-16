import { RequestLibraryService } from '@app/request-library/request-library.service';
import { 
  Body, 
  Controller, 
  Get, 
  Post
} from '@nestjs/common';

import Cache from 'cache-manager';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor( private readonly userService: UsersService,
    private httpClient: RequestLibraryService){}

  @Get()
  getUsers() {
    console.log("entro")
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }

  @Post()
  setUser( @Body() user ) {
    return this.userService.setUser(user)
  }
}
