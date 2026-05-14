export const roles = [
  "SUPER_ADMIN",
  "CEO",
  "HR",
  "SALES_MANAGER",
  "ACCOUNTANT",
  "EMPLOYEE",
  "RECRUITER",
  "MODERATOR"
] as const;

export type Role = (typeof roles)[number];

export type TenantContext = {
  tenantId: string;
  actorId: string;
  role: Role;
};

export type KpiMetric = {
  label: string;
  value: string;
  delta: string;
  tone: "green" | "blue" | "amber" | "rose";
};

export type Employee = {
  id: string;
  fullname: string;
  email: string;
  role: Role;
  department: string;
  salary: number;
  kpi: number;
  attendanceStatus: "present" | "remote" | "late" | "absent";
};

export type Client = {
  id: string;
  company: string;
  contact: string;
  pipelineStatus: "lead" | "contact" | "negotiation" | "won" | "lost";
  amount: number;
  health: number;
};

export type AiInsight = {
  id: string;
  module: "HR" | "CRM" | "Finance" | "Analytics";
  title: string;
  recommendation: string;
  confidence: number;
};
