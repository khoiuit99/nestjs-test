import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class AvatarUser {
  @Prop({ required: true })
  avatarUrl: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;
}

export const AvatarUserSchema = SchemaFactory.createForClass(AvatarUser);
