import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AvatarUserModule } from './avatar-user/avatar-user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://khoic3b1999:ReT6O8qN7nyx5I7m@cluster0.01rkalr.mongodb.net',
    ),
    UsersModule,
    AvatarUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
