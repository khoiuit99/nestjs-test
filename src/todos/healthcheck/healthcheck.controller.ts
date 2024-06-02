import {
    Controller,
    Get,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';
import { HealthCheckService } from './healthcheck.service';
  
  @ApiTags('healthcheck')
  @Controller('healthcheck')
  export class HealthcheckController {
    constructor(private _healthcheckService: HealthCheckService) {}
  
    @Get()
    getHealthCheck() {
      return this._healthcheckService.healthcheck();
    }
  }
  