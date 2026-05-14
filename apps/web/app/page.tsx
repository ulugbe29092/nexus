import {
  Activity,
  BarChart3,
  Bell,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  ChartNoAxesCombined,
  ChevronDown,
  CircleDollarSign,
  ContactRound,
  Factory,
  FileText,
  Gauge,
  LayoutDashboard,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  UsersRound,
  Warehouse
} from "lucide-react";

const metrics = [
  { label: "Revenue", value: "$2.48M", delta: "+18.4%", tone: "text-emerald-600" },
  { label: "Active clients", value: "1,284", delta: "+9.2%", tone: "text-blue-600" },
  { label: "Attendance", value: "96.7%", delta: "+3.1%", tone: "text-teal-600" },
  { label: "AI savings", value: "412h", delta: "+27%", tone: "text-rose-600" }
];

const nav = [
  ["Command", LayoutDashboard],
  ["ERP", Factory],
  ["CRM", ContactRound],
  ["HRM", UsersRound],
  ["Recruitment", BriefcaseBusiness],
  ["Finance", CircleDollarSign],
  ["Inventory", Warehouse],
  ["Analytics", BarChart3],
  ["AI Agents", BrainCircuit],
  ["Security", ShieldCheck]
] as const;

const pipeline = [
  { stage: "Lead", value: 42, color: "bg-blue-500" },
  { stage: "Contact", value: 31, color: "bg-cyan-500" },
  { stage: "Negotiation", value: 24, color: "bg-amber-500" },
  { stage: "Won", value: 18, color: "bg-emerald-500" }
];

const agents = [
  { name: "HR Agent", text: "3 late attendance clusters found", icon: UserRoundCheck },
  { name: "CRM Agent", text: "Forecast says enterprise deals rise 14%", icon: ChartNoAxesCombined },
  { name: "Finance Agent", text: "Tax exposure reduced by estimated $18.6k", icon: CircleDollarSign },
  { name: "Analytics Agent", text: "Operations KPI risk detected in Tashkent branch", icon: Activity }
];

const people = [
  ["Dilshod Karimov", "Engineering", "98 KPI", "Present"],
  ["Malika Saidova", "Sales", "94 KPI", "Remote"],
  ["Aziz Rakhimov", "Finance", "91 KPI", "Present"],
  ["Nodira Aliyeva", "HR", "89 KPI", "Late"]
];

export default function Home() {
  return (
    <main className="noise min-h-screen p-4 text-slate-950 sm:p-6">
      <div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-[280px_1fr]">
        <aside className="glass rounded-lg p-4 lg:min-h-[calc(100vh-48px)]">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <div className="grid size-11 place-items-center rounded-md bg-slate-950 text-white">
              <Building2 size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">NEXUS</p>
              <h1 className="text-lg font-semibold leading-tight">ERP CRM HR AI</h1>
            </div>
          </div>

          <nav className="mt-5 grid gap-1">
            {nav.map(([label, Icon], index) => (
              <button
                className={`flex h-11 items-center gap-3 rounded-md px-3 text-left text-sm font-medium transition ${
                  index === 0 ? "bg-slate-950 text-white shadow-premium" : "text-slate-600 hover:bg-white"
                }`}
                key={label}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-950 p-4 text-white">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles size={17} />
              AI Control Layer
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              HR, CRM, Finance va Analytics agentlari realtime tavsiyalar chiqaradi.
            </p>
          </div>
        </aside>

        <section className="grid gap-4">
          <header className="glass flex flex-col gap-4 rounded-lg p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Enterprise Command Center</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-normal text-slate-950 md:text-3xl">
                Unified business operating system
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex h-11 min-w-64 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-slate-500">
                <Search size={18} />
                <span className="text-sm">Global search</span>
              </div>
              <button className="grid size-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-700">
                <Bell size={18} />
              </button>
              <button className="flex h-11 items-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white">
                CEO Workspace
                <ChevronDown size={16} />
              </button>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <article className="glass rounded-lg p-5" key={metric.label}>
                <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <strong className="text-3xl font-semibold">{metric.value}</strong>
                  <span className={`text-sm font-semibold ${metric.tone}`}>{metric.delta}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.45fr_0.9fr]">
            <article className="glass rounded-lg p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Realtime Analytics</p>
                  <h3 className="mt-1 text-xl font-semibold">Revenue, attendance and sales velocity</h3>
                </div>
                <Gauge className="text-slate-500" size={24} />
              </div>
              <div className="mt-8 flex h-72 items-end gap-3 border-b border-l border-slate-200 px-3">
                {[52, 66, 58, 78, 73, 86, 82, 92, 88, 97, 91, 104].map((height, index) => (
                  <div className="flex flex-1 flex-col items-center gap-2" key={index}>
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-slate-950 via-blue-600 to-teal-400"
                      style={{ height: `${height * 2}px` }}
                    />
                    <span className="text-xs text-slate-400">{index + 1}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass rounded-lg p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Sales Pipeline</h3>
                <BriefcaseBusiness className="text-slate-500" size={23} />
              </div>
              <div className="mt-6 grid gap-4">
                {pipeline.map((item) => (
                  <div key={item.stage}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-slate-700">{item.stage}</span>
                      <span className="text-slate-500">{item.value} deals</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value * 2}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
            <article className="glass rounded-lg p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">AI Agents</h3>
                <BrainCircuit className="text-slate-500" size={24} />
              </div>
              <div className="mt-5 grid gap-3">
                {agents.map((agent) => (
                  <div className="flex items-start gap-3 rounded-md border border-slate-200 bg-white p-3" key={agent.name}>
                    <div className="grid size-10 shrink-0 place-items-center rounded-md bg-slate-100 text-slate-800">
                      <agent.icon size={19} />
                    </div>
                    <div>
                      <p className="font-semibold">{agent.name}</p>
                      <p className="mt-1 text-sm leading-5 text-slate-500">{agent.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass rounded-lg p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">People Operations</h3>
                <CalendarClock className="text-slate-500" size={23} />
              </div>
              <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
                {people.map((person) => (
                  <div className="grid grid-cols-[1fr_0.7fr_0.55fr_0.55fr] gap-3 border-b border-slate-100 p-3 text-sm last:border-0" key={person[0]}>
                    <span className="font-medium text-slate-900">{person[0]}</span>
                    <span className="text-slate-500">{person[1]}</span>
                    <span className="text-slate-500">{person[2]}</span>
                    <span className="font-medium text-slate-700">{person[3]}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <footer className="glass grid gap-4 rounded-lg p-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <LockKeyhole className="text-emerald-600" size={20} />
              <span className="text-sm font-medium">RBAC, audit logs, session tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={20} />
              <span className="text-sm font-medium">PDF, Excel, CSV reports ready</span>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="text-rose-600" size={20} />
              <span className="text-sm font-medium">Socket.io realtime layer planned</span>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
