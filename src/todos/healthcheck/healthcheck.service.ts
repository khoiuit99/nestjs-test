import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class HealthCheckService {
    constructor() { }

    healthcheck() {
        return 'OK'
    }
}
