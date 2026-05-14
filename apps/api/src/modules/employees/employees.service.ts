import { Injectable } from "@nestjs/common";
import type { Employee } from "@nexus/shared";

@Injectable()
export class EmployeesService {
  private readonly employees: Employee[] = [
    {
      id: "emp_001",
      fullname: "Dilshod Karimov",
      email: "dilshod@nexus.uz",
      role: "EMPLOYEE",
      department: "Engineering",
      salary: 4200,
      kpi: 98,
      attendanceStatus: "present"
    },
    {
      id: "emp_002",
      fullname: "Malika Saidova",
      email: "malika@nexus.uz",
      role: "SALES_MANAGER",
      department: "Sales",
      salary: 3900,
      kpi: 94,
      attendanceStatus: "remote"
    }
  ];

  findAll() {
    return this.employees;
  }
}

