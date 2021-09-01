import { Controller, Get, Request, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SplitWiseService } from './services/split_wise.service';
@Controller()
export class AppController {
  splitWiseService: SplitWiseService
  constructor(private readonly appService: AppService) {
    this.splitWiseService = new SplitWiseService()
  }

  @Post('/showExpenses') 
  showExpenses(@Request() req) {
    return this.splitWiseService.showBalance(req)
  }
}
