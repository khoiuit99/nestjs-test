import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Todo {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  isFinished: string;

  @Prop({ required: true })
  dateCreated: string;

  @Prop({ required: true })
  dateFinished: string;
}

export const TodosSchema = SchemaFactory.createForClass(Todo);
