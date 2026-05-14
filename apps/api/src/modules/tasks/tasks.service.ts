import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
  kanban() {
    return {
      todo: ["Prepare payroll approval", "Index client search"],
      progress: ["Recruitment AI scoring", "Inventory barcode workflow"],
      done: ["Executive KPI dashboard", "RBAC role contract"]
    };
  }
}

