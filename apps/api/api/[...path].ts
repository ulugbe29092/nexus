import type { VercelRequest, VercelResponse } from "@vercel/node";

const json = (response: VercelResponse, data: unknown, status = 200) => {
  response.setHeader("Access-Control-Allow-Origin", process.env.WEB_ORIGIN ?? "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  return response.status(status).json(data);
};

const dashboard = {
  metrics: [
    { label: "Revenue", value: "$2.48M", delta: "+18.4%", tone: "green" },
    { label: "Active clients", value: "1,284", delta: "+9.2%", tone: "blue" },
    { label: "Attendance", value: "96.7%", delta: "+3.1%", tone: "green" },
    { label: "AI savings", value: "412h", delta: "+27%", tone: "rose" }
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

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === "OPTIONS") {
    return json(response, {});
  }

  const path = request.url?.split("?")[0] ?? "/";

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

  return json(
    response,
    {
      message: "NEXUS ERP CRM HR AI API",
      routes: [
        "/api/health",
        "/api/analytics/dashboard",
        "/api/employees",
        "/api/clients",
        "/api/ai/insights",
        "/api/finance/summary"
      ]
    },
    200
  );
}

