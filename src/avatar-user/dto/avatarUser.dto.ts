import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAvatarUserDTO {
  @IsString()
  @ApiProperty()
  avatarUrl: string;
}
