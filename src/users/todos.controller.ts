import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDTO } from './dto/user.dto'
import { ApiTags } from '@nestjs/swagger';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private _todoService: TodosService) {}

  @Post()
  createUser(@Body() createUserDTO: CreateTodoDTO) {
    return this._todoService.createUser(createUserDTO);
  }

  @Get()
  getAllTodos() {
    return this._todoService.getAllTodos();
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this._todoService.deleteTodo(id);
  }
}
