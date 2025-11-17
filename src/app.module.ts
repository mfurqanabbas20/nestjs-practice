import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemsController, AuthController],
  providers: [AppService],
})
export class AppModule {}
