import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountdownController } from './countdown/countdown.controller';

@Module({
  imports: [],
  controllers: [AppController, CountdownController],
  providers: [AppService],
})
export class AppModule {}
