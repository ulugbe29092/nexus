import type { VercelRequest, VercelResponse } from "@vercel/node";

const json = (response: VercelResponse, data: unknown, status = 200) => {
  response.setHeader("Access-Control-Allow-Origin", process.env.WEB_ORIGIN ?? "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  return response.status(status).json(data);
};

const dashboard = {
  metrics: [
    { label: "Daromad", value: "$2.48M", delta: "+18.4%", tone: "green" },
    { label: "Faol mijozlar", value: "1,284", delta: "+9.2%", tone: "blue" },
    { label: "Davomat", value: "96.7%", delta: "+3.1%", tone: "green" },
    { label: "AI tejamkorlik", value: "412 soat", delta: "+27%", tone: "rose" }
  ],
  realtime: [
    { label: "sales", value: 82 },
    { label: "finance", value: 76 },
    { label: "attendance", value: 96 },
    { label: "tasks", value: 71 }
  ]
};

const employees = [
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

const clients = [
  {
    id: "cli_001",
    company: "Tashkent Industrial Group",
    contact: "Oybek Usmonov",
    pipelineStatus: "negotiation",
    amount: 185000,
    health: 88
  },
  {
    id: "cli_002",
    company: "Samarkand Cloud Services",
    contact: "Zarina Ibragimova",
    pipelineStatus: "won",
    amount: 96000,
    health: 94
  }
];

const aiInsights = [
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
  }
];

const sales = [
  {
    id: "sale_001",
    clientId: "cli_001",
    amount: 185000,
    pipelineStatus: "negotiation",
    createdAt: new Date().toISOString()
  }
];

const inventory = [
  { sku: "NX-LAP-001", name: "Engineering laptops", warehouse: "Tashkent A", quantity: 84, status: "healthy" },
  { sku: "NX-BRC-044", name: "Barcode scanners", warehouse: "Tashkent B", quantity: 18, status: "low" },
  { sku: "NX-SRV-010", name: "Server parts", warehouse: "Samarkand", quantity: 32, status: "healthy" }
];

const recruitment = [
  { vacancy: "Senior NestJS Engineer", candidates: 48, aiShortlisted: 9, interviews: 4 },
  { vacancy: "Enterprise Sales Lead", candidates: 33, aiShortlisted: 7, interviews: 3 },
  { vacancy: "HR Operations Manager", candidates: 21, aiShortlisted: 5, interviews: 2 }
];

const tasks = {
  todo: ["Payroll approval tayyorlash", "Client search indexing"],
  progress: ["Recruitment AI scoring", "Inventory barcode workflow"],
  done: ["Executive KPI dashboard", "RBAC role contract"]
};

const notifications = [
  { channel: "telegram", title: "Finance approval kerak", priority: "high" },
  { channel: "email", title: "Candidate interview belgilandi", priority: "medium" },
  { channel: "push", title: "Sales forecast AI tomonidan yangilandi", priority: "medium" }
];

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === "OPTIONS") {
    return json(response, {});
  }

  const path = request.url?.split("?")[0] ?? "/";

  if (path === "/" || path === "/api") {
    return json(response, {
      status: "ok",
      message: "NEXUS ERP CRM HR AI backend ishlayapti",
      routes: [
        "/api/health",
        "/api/analytics/dashboard",
        "/api/employees",
        "/api/clients",
        "/api/sales",
        "/api/ai/insights",
        "/api/finance/summary",
        "/api/inventory/stock",
        "/api/recruitment/pipeline",
        "/api/tasks/kanban",
        "/api/notifications"
      ]
    });
  }

  if (path === "/api/health") {
    return json(response, { status: "ok", service: "nexus-api" });
  }

  if (path === "/api/analytics/dashboard") {
    return json(response, dashboard);
  }

  if (path === "/api/employees") {
    return json(response, employees);
  }

  if (path === "/api/clients") {
    return json(response, clients);
  }

  if (path === "/api/sales") {
    return json(response, sales);
  }

  if (path === "/api/ai/insights") {
    return json(response, aiInsights);
  }

  if (path === "/api/finance/summary") {
    return json(response, {
      income: 2480000,
      expenses: 1140000,
      taxReserve: 286000,
      netMargin: 0.31,
      approvalsPending: 12
    });
  }

  if (path === "/api/inventory/stock") {
    return json(response, inventory);
  }

  if (path === "/api/recruitment/pipeline") {
    return json(response, recruitment);
  }

  if (path === "/api/tasks/kanban") {
    return json(response, tasks);
  }

  if (path === "/api/notifications") {
    return json(response, notifications);
  }

  return json(
    response,
    {
      message: "NEXUS ERP CRM HR AI API",
      routes: [
        "/api/health",
        "/api/analytics/dashboard",
        "/api/employees",
        "/api/clients",
        "/api/sales",
        "/api/ai/insights",
        "/api/finance/summary",
        "/api/inventory/stock",
        "/api/recruitment/pipeline",
        "/api/tasks/kanban",
        "/api/notifications"
      ]
    },
    200
  );
}
