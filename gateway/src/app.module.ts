import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ClientProxyFactory } from '@nestjs/microservices';

import { UsersController } from './users.controller';
import { TasksController } from './tasks.controller';

import { AuthGuard } from './services/guards/authorization.guard';

import { ConfigService } from './services/config/config.service';

@Module({
  imports: [],
  controllers: [
    UsersController,
    TasksController
  ],
  providers: [
    ConfigService,
    {
      provide: 'TOKEN_SERVICE',
      useFactory: (configService: ConfigService) => {
        const tokenServiceOptions = configService.get('tokenService');
        return ClientProxyFactory.create(tokenServiceOptions);
      },
      inject: [
        ConfigService
      ]
    },
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [
        ConfigService
      ]
    },
    {
      provide: 'TASK_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(configService.get('taskService'));
      },
      inject: [
        ConfigService
      ]
    },   
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },  
  ]
})
export class AppModule {}
