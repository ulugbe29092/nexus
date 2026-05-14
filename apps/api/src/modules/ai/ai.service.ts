import { Injectable } from "@nestjs/common";
import type { AiInsight } from "@nexus/shared";

@Injectable()
export class AiService {
  insights(): AiInsight[] {
    return [
      {
        id: "ai_001",
        module: "HR",
        title: "Attendance anomaly",
        recommendation: "Review shift planning for the logistics department before overtime grows.",
        confidence: 0.91
      },
      {
        id: "ai_002",
        module: "CRM",
        title: "Enterprise deal acceleration",
        recommendation: "Move high-health manufacturing leads to CEO-assisted negotiation.",
        confidence: 0.87
      },
      {
        id: "ai_003",
        module: "Finance",
        title: "Expense optimization",
        recommendation: "Bundle vendor invoices and trigger approval workflow for tax efficiency.",
        confidence: 0.84
      }
    ];
  }
}

