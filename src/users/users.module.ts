import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import {
  AvatarUser,
  AvatarUserSchema,
} from 'src/avatar-user/schema/avatarUser.schema';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://pziorjok:H190autjoo5RyCDb1MUMDese8KBP53Yl@gerbil.rmq.cloudamqp.com/pziorjok',
          ],
          queue: 'users-created',
        },
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: AvatarUser.name,
        schema: AvatarUserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
