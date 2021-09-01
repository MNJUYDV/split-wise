import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SplitWiseModule } from './services/split_wise.module';
@Module({
  imports: [SplitWiseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
