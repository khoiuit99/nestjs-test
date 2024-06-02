import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Todo } from './schema/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDTO } from './dto/user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<Todo>,
  ) { }

  async createUser(createTodoDTO: CreateTodoDTO) {
    const newUser = new this.todoModel({
      name: createTodoDTO.name,
      dateCreated: new Date(),
      dateFinished: new Date(),
      isFinished: false
    });

    return await newUser.save();
  }

  async getAllTodos(): Promise<Todo[]> {
    const findUser = await this.todoModel.find();
    return findUser;
  }

  async deleteTodo(id: string) {
    await this.todoModel.findByIdAndDelete(id)
  }
}
