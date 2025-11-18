import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { AuthController } from './auth/auth.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [],
  controllers: [AppController, ItemsController, AuthController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
