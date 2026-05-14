import { Injectable } from "@nestjs/common";

@Injectable()
export class FinanceService {
  summary() {
    return {
      income: 2480000,
      expenses: 1140000,
      taxReserve: 286000,
      netMargin: 0.31,
      approvalsPending: 12
    };
  }
}

