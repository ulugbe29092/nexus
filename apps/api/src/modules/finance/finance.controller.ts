import { Controller, Get } from "@nestjs/common";
import { FinanceService } from "./finance.service";

@Controller("finance")
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Get("summary")
  summary() {
    return this.financeService.summary();
  }
}

