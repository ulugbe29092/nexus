import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  root() {
    return {
      status: "ok",
      message: "NEXUS ERP CRM HR AI backend ishlayapti",
      routes: [
        "/api/health",
        "/api/analytics/dashboard",
        "/api/employees",
        "/api/clients",
        "/api/sales",
        "/api/finance/summary",
        "/api/inventory/stock",
        "/api/recruitment/pipeline",
        "/api/tasks/kanban",
        "/api/notifications",
        "/api/ai/insights"
      ]
    };
  }

  @Get("health")
  health() {
    return {
      status: "ok",
      service: "nexus-api",
      uptime: "active"
    };
  }
}

