import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { AiModule } from "./modules/ai/ai.module";
import { AnalyticsModule } from "./modules/analytics/analytics.module";
import { AuditModule } from "./modules/audit/audit.module";
import { AuthModule } from "./modules/auth/auth.module";
import { ClientsModule } from "./modules/clients/clients.module";
import { EmployeesModule } from "./modules/employees/employees.module";
import { FinanceModule } from "./modules/finance/finance.module";
import { InventoryModule } from "./modules/inventory/inventory.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { RecruitmentModule } from "./modules/recruitment/recruitment.module";
import { SalesModule } from "./modules/sales/sales.module";
import { TasksModule } from "./modules/tasks/tasks.module";
import { AppController } from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 120 }]),
    AuditModule,
    AuthModule,
    EmployeesModule,
    ClientsModule,
    SalesModule,
    FinanceModule,
    InventoryModule,
    RecruitmentModule,
    TasksModule,
    NotificationsModule,
    AiModule,
    AnalyticsModule
  ],
  controllers: [AppController]
})
export class AppModule {}
