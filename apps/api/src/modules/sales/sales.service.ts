import { Injectable } from "@nestjs/common";

type Sale = {
  id: string;
  clientId: string;
  amount: number;
  pipelineStatus: "lead" | "contact" | "negotiation" | "won" | "lost";
  createdAt: string;
};

@Injectable()
export class SalesService {
  private readonly sales: Sale[] = [
    {
      id: "sale_001",
      clientId: "cli_001",
      amount: 185000,
      pipelineStatus: "negotiation",
      createdAt: new Date().toISOString()
    }
  ];

  list() {
    return this.sales;
  }

  create(input: Omit<Sale, "id" | "createdAt">) {
    const sale = {
      id: `sale_${String(this.sales.length + 1).padStart(3, "0")}`,
      ...input,
      createdAt: new Date().toISOString()
    };

    this.sales.unshift(sale);
    return sale;
  }
}

