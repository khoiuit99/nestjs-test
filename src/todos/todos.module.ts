import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodosSchema } from './schema/todo.schema';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { HealthCheckService } from './healthcheck/healthcheck.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodosSchema,
      },
    ]),
  ],
  controllers: [TodosController, HealthcheckController],
  providers: [TodosService, HealthCheckService],
})
export class TodosModule {}
