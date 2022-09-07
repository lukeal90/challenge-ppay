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

  constructor( private readonly userService: UsersService){}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  setUser( @Body() user ) {
    return this.userService.setUser(user)
  }
}
