import { Module } from '@nestjs/common';
import { SplitWiseService } from './split_wise.service';
@Module({
  exports: [SplitWiseService],
  controllers: [],
  providers: [SplitWiseService],
})
export class SplitWiseModule {}
