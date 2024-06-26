import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WebsocketsModule } from './modules/websockets/websockets.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WebsocketsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
