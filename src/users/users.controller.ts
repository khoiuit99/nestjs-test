import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private _userService: UsersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createUser(@Body() createUserDTO: CreateUserDTO) {
    console.log(createUserDTO);
    return this._userService.createUser(createUserDTO);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this._userService.getUserById(id);
  }

  @Get(':id/avatar')
  getAvatarUserId(@Param('id') id: string) {
    return this._userService.getAvatarUser(id);
  }
}
