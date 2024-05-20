import { Module } from '@nestjs/common';
import { AvatarUserController } from './avatar-user.controller';
import { AvatarUserService } from './avatar-user.service';

@Module({
  controllers: [AvatarUserController],
  providers: [AvatarUserService],
})
export class AvatarUserModule {}
