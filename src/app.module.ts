import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://khoic3b1999:Khoiuit99@cluster0.01rkalr.mongodb.net/',
    ),
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
