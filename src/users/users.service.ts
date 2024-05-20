import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDTO } from './dto/user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { AvatarUser } from 'src/avatar-user/schema/avatarUser.schema';
import { Base64 } from 'js-base64';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(User.name) private avatarUserModel: Model<AvatarUser>,
    @Inject('USERS_SERVICE') private _rabbitMQ: ClientProxy,
  ) {}

  async createUser(createUserDTO: CreateUserDTO) {
    const newUser = new this.userModel({
      email: createUserDTO.email,
      firstName: createUserDTO.firstName,
      lastName: createUserDTO.lastName,
      avatarUrl: '',
    });

    //set avatar user url
    const newUrlUserAvatar = `/users/${newUser._id}/${createUserDTO.avatar.name}`;
    newUser.avatarUrl = newUrlUserAvatar;

    const md5 = (File: File) =>
      crypto.createHash('sha256').update(File.name).digest('hex');
    //save {hashimage, userId} to AvatarUser collection
    const newAvatarUser = new this.avatarUserModel({
      avatarUrl: md5,
      userId: newUser._id,
    });

    await newAvatarUser.save();

    //Emit event rabbitMQ
    this._rabbitMQ.emit('user_created', createUserDTO);

    return await newUser.save();
  }

  async getUserById(id: string) {
    const findUser = this.userModel.findById(id);
    if (!findUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return findUser;
  }

  async getAvatarUser(id: string) {
    const findUser = this.avatarUserModel.findById(id);
    if (!findUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return Base64.toBase64((await findUser).avatarUrl);
  }
}
