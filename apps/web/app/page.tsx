"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ContactRound,
  Factory,
  FileText,
  Gauge,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  MapPin,
  MessageSquare,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  TimerReset,
  UsersRound,
  Warehouse,
  Workflow
} from "lucide-react";

const metrics = [
  { label: "Daromad", value: "$2.48M", delta: "+18.4%", tone: "text-emerald-600" },
  { label: "Faol mijozlar", value: "1,284", delta: "+9.2%", tone: "text-blue-600" },
  { label: "Davomat", value: "96.7%", delta: "+3.1%", tone: "text-teal-600" },
  { label: "AI tejamkorlik", value: "412 soat", delta: "+27%", tone: "text-rose-600" }
];

const nav = [
  { id: "command", label: "Boshqaruv markazi", icon: LayoutDashboard },
  { id: "erp", label: "ERP", icon: Factory },
  { id: "crm", label: "CRM", icon: ContactRound },
  { id: "hrm", label: "HRM", icon: UsersRound },
  { id: "recruitment", label: "Ishga qabul", icon: BriefcaseBusiness },
  { id: "finance", label: "Moliya", icon: CircleDollarSign },
  { id: "inventory", label: "Ombor", icon: Warehouse },
  { id: "analytics", label: "Analitika", icon: BarChart3 },
  { id: "ai", label: "AI Agentlar", icon: BrainCircuit },
  { id: "security", label: "Xavfsizlik", icon: ShieldCheck }
] as const;

type SectionId = (typeof nav)[number]["id"];

type ModuleData = {
  title: string;
  subtitle: string;
  cards: Array<[string, string, string]>;
  actions: string[];
  workflow: Array<{ label: string; value: number; tone: string }>;
  tableTitle: string;
  columns: string[];
  rows: string[][];
  activity: string[];
};

const moduleContent: Record<SectionId, ModuleData> = {
  command: {
    title: "Yagona boshqaruv paneli",
    subtitle: "Rahbar uchun ERP, CRM, HRM, moliya, ombor, AI va analitika bitta operatsion markazda.",
    cards: [
      ["Bugungi savdo", "$184K", "AI prognoz +14% o'sish ko'rsatmoqda"],
      ["Jarayondagi vazifalar", "127", "23 tasi tasdiq jarayonida"],
      ["Realtime signal", "98%", "Barcha asosiy servislar faol"]
    ],
    actions: ["Hisobot yaratish", "Tasdiqlarni ko'rish", "AI tavsiyani ochish", "Risklarni tekshirish"],
    workflow: [
      { label: "Savdo", value: 82, tone: "bg-blue-500" },
      { label: "HR", value: 74, tone: "bg-teal-500" },
      { label: "Moliya", value: 68, tone: "bg-emerald-500" },
      { label: "Ombor", value: 58, tone: "bg-amber-500" }
    ],
    tableTitle: "Bugungi boshqaruv signallari",
    columns: ["Modul", "Holat", "Mas'ul", "Prioritet"],
    rows: [
      ["Moliya", "12 ta invoice tasdiqda", "Akmal", "Yuqori"],
      ["HRM", "3 ta kechikish cluster", "Nodira", "O'rta"],
      ["CRM", "4 ta yirik kelishuv", "Malika", "Yuqori"],
      ["Ombor", "18 ta low stock", "Aziz", "O'rta"]
    ],
    activity: ["08:30 CEO dashboard ochildi", "09:10 AI risk signali chiqdi", "10:45 Finance approval yaratildi"]
  },
  erp: {
    title: "ERP korxona boshqaruvi",
    subtitle: "Xarid, invoice, procurement, reporting va approval chain modullari bilan to'liq korxona nazorati.",
    cards: [
      ["Xarid so'rovlari", "34", "9 tasi rahbar tasdig'ida"],
      ["Hisob-faktura nazorati", "$286K", "Soliq rezervi avtomatik hisoblandi"],
      ["Hisobotlar", "PDF / Excel", "Eksport moduli tayyor"]
    ],
    actions: ["Xarid so'rovi ochish", "Invoice yaratish", "PDF hisobot olish", "Approval chain sozlash"],
    workflow: [
      { label: "So'rov", value: 76, tone: "bg-blue-500" },
      { label: "Tasdiq", value: 51, tone: "bg-amber-500" },
      { label: "To'lov", value: 63, tone: "bg-emerald-500" },
      { label: "Arxiv", value: 92, tone: "bg-slate-800" }
    ],
    tableTitle: "ERP jarayonlari",
    columns: ["Jarayon", "Miqdor", "Status", "Muddat"],
    rows: [
      ["Laptop xaridi", "$84K", "Tasdiqda", "Bugun"],
      ["Server renewal", "$41K", "To'lovda", "2 kun"],
      ["Vendor audit", "7 kontrakt", "Tekshiruv", "5 kun"],
      ["Monthly report", "Excel", "Tayyor", "Bugun"]
    ],
    activity: ["Procurement request yaratildi", "Invoice #INV-208 tasdiq kutmoqda", "ERP report eksport qilindi"]
  },
  crm: {
    title: "CRM mijozlar tizimi",
    subtitle: "Mijoz bazasi, kompaniya profili, savdo pipeline, aloqa tarixi va multi-kanal kommunikatsiya.",
    cards: [
      ["Lidlar", "42", "18 tasi yuqori ehtimolli"],
      ["Muzokara", "24", "4 ta yirik kelishuv rahbar yordamida"],
      ["Kommunikatsiya", "4 kanal", "Email, SMS, Telegram, WhatsApp"]
    ],
    actions: ["Mijoz qo'shish", "Pipeline ko'rish", "Telegram yuborish", "Email campaign"],
    workflow: [
      { label: "Lid", value: 84, tone: "bg-blue-500" },
      { label: "Aloqa", value: 62, tone: "bg-cyan-500" },
      { label: "Muzokara", value: 48, tone: "bg-amber-500" },
      { label: "Yutildi", value: 36, tone: "bg-emerald-500" }
    ],
    tableTitle: "Mijozlar pipeline",
    columns: ["Kompaniya", "Kontakt", "Bosqich", "Qiymat"],
    rows: [
      ["Tashkent Industrial", "Oybek", "Muzokara", "$185K"],
      ["Samarkand Cloud", "Zarina", "Yutildi", "$96K"],
      ["Fergana Textile", "Sardor", "Aloqa", "$74K"],
      ["Bukhara Logistics", "Madina", "Lid", "$52K"]
    ],
    activity: ["WhatsApp xabar yuborildi", "CRM Agent forecast yangiladi", "Yangi lead pipelinega tushdi"]
  },
  hrm: {
    title: "HRM hodimlar boshqaruvi",
    subtitle: "Hodim profili, bo'limlar, hierarchy, davomat, QR/GPS/Face ID, payroll, bonus, jarima va leave tizimi.",
    cards: [
      ["Hodimlar", "248", "96.7% bugun aktiv"],
      ["Payroll", "$412K", "Bonus va jarimalar hisoblangan"],
      ["Leave request", "12", "4 tasi HR tasdig'ida"]
    ],
    actions: ["Hodim qo'shish", "Davomatni ko'rish", "Payroll hisoblash", "Leave tasdiqlash"],
    workflow: [
      { label: "Keldi", value: 96, tone: "bg-emerald-500" },
      { label: "Masofadan", value: 22, tone: "bg-blue-500" },
      { label: "Kechikdi", value: 7, tone: "bg-amber-500" },
      { label: "Ta'til", value: 12, tone: "bg-rose-500" }
    ],
    tableTitle: "Hodimlar profili",
    columns: ["Hodim", "Bo'lim", "Payroll", "Davomat"],
    rows: [
      ["Dilshod Karimov", "Engineering", "$4,200", "Keldi"],
      ["Malika Saidova", "Sales", "$3,900", "Masofadan"],
      ["Aziz Rakhimov", "Finance", "$3,700", "Keldi"],
      ["Nodira Aliyeva", "HR", "$3,400", "Kechikdi"]
    ],
    activity: ["QR check-in qabul qilindi", "Payroll batch hisoblandi", "Leave request HRga yuborildi"]
  },
  recruitment: {
    title: "Ishga qabul qilish pipeline",
    subtitle: "Vakansiya, CV upload, AI resume analysis, interview scheduling va candidate pipeline.",
    cards: [
      ["Vakansiyalar", "8", "3 tasi senior pozitsiya"],
      ["AI shortlist", "21", "CV scoring avtomatik ishladi"],
      ["Interview", "9", "Calendar sync tayyor"]
    ],
    actions: ["Vakansiya ochish", "CV yuklash", "AI tahlil qilish", "Interview belgilash"],
    workflow: [
      { label: "CV", value: 92, tone: "bg-blue-500" },
      { label: "Shortlist", value: 44, tone: "bg-teal-500" },
      { label: "Interview", value: 28, tone: "bg-amber-500" },
      { label: "Offer", value: 12, tone: "bg-emerald-500" }
    ],
    tableTitle: "Kandidatlar",
    columns: ["Nomzod", "Vakansiya", "AI ball", "Status"],
    rows: [
      ["Javohir N.", "Senior NestJS", "94%", "Interview"],
      ["Sevara M.", "HR Manager", "89%", "Shortlist"],
      ["Bobur A.", "Sales Lead", "86%", "Test"],
      ["Lola K.", "Analyst", "82%", "CV review"]
    ],
    activity: ["AI CV scoring yakunlandi", "Interview calendar yaratildi", "Offer approval yuborildi"]
  },
  finance: {
    title: "Moliya va accounting",
    subtitle: "Kirim, chiqim, soliq, salary, bonus, vendor invoice, approval va auditga tayyor hisoblar.",
    cards: [
      ["Kirim", "$2.48M", "Oylik reja 118% bajarildi"],
      ["Chiqim", "$1.14M", "Vendor xarajatlari optimallashtirildi"],
      ["Net margin", "31%", "Finance Agent tavsiyasi faol"]
    ],
    actions: ["Expense qo'shish", "Salary run", "Tax report", "Invoice approve"],
    workflow: [
      { label: "Kirim", value: 91, tone: "bg-emerald-500" },
      { label: "Chiqim", value: 57, tone: "bg-rose-500" },
      { label: "Soliq", value: 64, tone: "bg-amber-500" },
      { label: "Payroll", value: 73, tone: "bg-blue-500" }
    ],
    tableTitle: "Moliya oqimi",
    columns: ["Kategoriya", "Miqdor", "Status", "AI tavsiya"],
    rows: [
      ["Salary", "$412K", "Tayyor", "Bonus risk past"],
      ["Vendor", "$286K", "Tasdiqda", "Bundle invoice"],
      ["Tax", "$118K", "Hisoblandi", "Reserve yetarli"],
      ["Marketing", "$64K", "Review", "ROI tekshir"]
    ],
    activity: ["Finance Agent tax tavsiya berdi", "Salary batch tayyor", "Expense limit alert chiqdi"]
  },
  inventory: {
    title: "Ombor va inventory",
    subtitle: "Warehouse, stock, barcode, product movement, supplier va low-stock monitoring.",
    cards: [
      ["Zaxira holati", "84%", "18 ta barcode scanner kam qolgan"],
      ["Warehouse", "3", "Tashkent A/B va Samarkand"],
      ["Movement", "312", "Bugungi kirim-chiqimlar"]
    ],
    actions: ["Mahsulot qo'shish", "Barcode scan", "Stock transfer", "Supplier order"],
    workflow: [
      { label: "Kirim", value: 68, tone: "bg-emerald-500" },
      { label: "Chiqim", value: 54, tone: "bg-blue-500" },
      { label: "Transfer", value: 41, tone: "bg-amber-500" },
      { label: "Low stock", value: 18, tone: "bg-rose-500" }
    ],
    tableTitle: "Ombor zaxiralari",
    columns: ["SKU", "Mahsulot", "Ombor", "Soni"],
    rows: [
      ["NX-LAP-001", "Noutbuklar", "Tashkent A", "84"],
      ["NX-BRC-044", "Barcode skaner", "Tashkent B", "18"],
      ["NX-SRV-010", "Server qismlar", "Samarkand", "32"],
      ["NX-PRN-222", "Printerlar", "Tashkent A", "12"]
    ],
    activity: ["Barcode scan yakunlandi", "Low stock alert chiqdi", "Supplier order yaratildi"]
  },
  analytics: {
    title: "BI analytics va forecasting",
    subtitle: "KPI monitoring, heatmap, predictive analytics, forecast va realtime chartlar.",
    cards: [
      ["Forecast", "+14%", "Savdo pipeline o'sishi"],
      ["KPI risk", "2 zona", "AI risk signali chiqardi"],
      ["Dashboard", "Realtime", "Socket layerga tayyor"]
    ],
    actions: ["Forecast ochish", "Heatmap ko'rish", "KPI export", "AI report"],
    workflow: [
      { label: "Sales KPI", value: 88, tone: "bg-blue-500" },
      { label: "HR KPI", value: 76, tone: "bg-teal-500" },
      { label: "Finance KPI", value: 81, tone: "bg-emerald-500" },
      { label: "Risk", value: 24, tone: "bg-rose-500" }
    ],
    tableTitle: "Analitika signallari",
    columns: ["Signal", "Modul", "Ishonch", "Action"],
    rows: [
      ["Revenue forecast", "CRM", "91%", "Pipeline push"],
      ["Late cluster", "HRM", "88%", "Shift review"],
      ["Tax exposure", "Finance", "84%", "Reserve update"],
      ["Low stock", "Inventory", "80%", "Order create"]
    ],
    activity: ["Forecast qayta hisoblandi", "KPI report eksport qilindi", "Risk heatmap yangilandi"]
  },
  ai: {
    title: "AI agentlar va automation",
    subtitle: "HR, CRM, Moliya va Analitika agentlari tavsiya, avtomatik hisobot va smart notification beradi.",
    cards: [
      ["HR Agent", "91%", "Davomat anomaly topildi"],
      ["CRM Agent", "87%", "Yirik kelishuvlarni tezlashtirish"],
      ["Finance Agent", "84%", "Tax optimization tavsiyasi"]
    ],
    actions: ["AI report", "Smart notification", "Auto task route", "Recommendation"],
    workflow: [
      { label: "HR Agent", value: 91, tone: "bg-teal-500" },
      { label: "CRM Agent", value: 87, tone: "bg-blue-500" },
      { label: "Finance", value: 84, tone: "bg-emerald-500" },
      { label: "Analytics", value: 89, tone: "bg-rose-500" }
    ],
    tableTitle: "AI tavsiyalar",
    columns: ["Agent", "Tavsiya", "Ishonch", "Holat"],
    rows: [
      ["HR", "Shift planning review", "91%", "Active"],
      ["CRM", "CEO-assisted deal", "87%", "Active"],
      ["Finance", "Tax reserve update", "84%", "Pending"],
      ["Analytics", "Risk heatmap", "89%", "Active"]
    ],
    activity: ["AI report yaratildi", "Smart notification yuborildi", "Auto task routing ishladi"]
  },
  security: {
    title: "Korporativ xavfsizlik",
    subtitle: "RBAC, RLS, audit log, session tracking, device history, rate limit va login alert.",
    cards: [
      ["RBAC", "8 rol", "Super Admin, Rahbar, HR va boshqalar"],
      ["Audit log", "100%", "Har bir critical action saqlanadi"],
      ["Session", "Faol", "Device history va login alert"]
    ],
    actions: ["Audit log ochish", "Role sozlash", "Device history", "Login alert"],
    workflow: [
      { label: "RBAC", value: 100, tone: "bg-slate-800" },
      { label: "Audit", value: 98, tone: "bg-blue-500" },
      { label: "Rate limit", value: 88, tone: "bg-emerald-500" },
      { label: "Alerts", value: 64, tone: "bg-amber-500" }
    ],
    tableTitle: "Audit log",
    columns: ["Action", "Kim", "Modul", "Vaqt"],
    rows: [
      ["Login", "CEO", "Auth", "09:00"],
      ["Salary edit", "Accountant", "HRM", "09:42"],
      ["Client delete block", "Moderator", "CRM", "10:10"],
      ["Role update", "Super Admin", "RBAC", "11:05"]
    ],
    activity: ["Login alert yuborildi", "Rate limit ishladi", "Audit log saqlandi"]
  }
};

const pipeline = [
  { stage: "Lid", value: 42, color: "bg-blue-500" },
  { stage: "Aloqa", value: 31, color: "bg-cyan-500" },
  { stage: "Muzokara", value: 24, color: "bg-amber-500" },
  { stage: "Yutildi", value: 18, color: "bg-emerald-500" }
];

const people = [
  ["Dilshod Karimov", "Engineering", "98 KPI", "Keldi"],
  ["Malika Saidova", "Sales", "94 KPI", "Masofadan"],
  ["Aziz Rakhimov", "Finance", "91 KPI", "Keldi"],
  ["Nodira Aliyeva", "HR", "89 KPI", "Kechikdi"]
];

const quickStats = [
  ["SSO", "Tayyor"],
  ["2FA", "Faol"],
  ["Multi-tenant", "Ready"],
  ["Realtime", "Socket ready"]
];

function ModuleWorkspace({ current }: { current: ModuleData }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35 }}
    >
      <article className="glass rounded-lg p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-slate-500">Operatsion jadval</p>
            <h3 className="mt-1 text-xl font-semibold">{current.tableTitle}</h3>
          </div>
          <PackageCheck className="text-slate-500" size={22} />
        </div>
        <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="grid grid-cols-4 gap-3 bg-slate-50 p-3 text-xs font-semibold uppercase text-slate-500">
            {current.columns.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>
          {current.rows.map((row, index) => (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-4 gap-3 border-t border-slate-100 p-3 text-sm"
              initial={{ opacity: 0, x: -10 }}
              key={row.join("-")}
              transition={{ delay: index * 0.04 }}
            >
              {row.map((cell, cellIndex) => (
                <span className={cellIndex === 0 ? "font-semibold text-slate-900" : "text-slate-500"} key={cell}>
                  {cell}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </article>

      <article className="glass rounded-lg p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Jarayon holati</p>
            <h3 className="mt-1 text-xl font-semibold">Workflow monitoring</h3>
          </div>
          <Workflow className="text-slate-500" size={22} />
        </div>
        <div className="mt-5 grid gap-4">
          {current.workflow.map((step, index) => (
            <div key={step.label}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">{step.label}</span>
                <span className="text-slate-500">{step.value}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  animate={{ width: `${Math.min(step.value, 100)}%` }}
                  className={`h-full rounded-full ${step.tone}`}
                  initial={{ width: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.65 }}
                />
              </div>
            </div>
          ))}
        </div>
      </article>
    </motion.div>
  );
}

function QuickActions({ current }: { current: ModuleData }) {
  const icons = [FileText, TimerReset, Mail, MessageSquare];

  return (
    <div className="grid gap-3 md:grid-cols-4">
      {current.actions.map((action, index) => {
        const Icon = icons[index % icons.length];
        return (
          <button
            className="glass flex h-16 items-center gap-3 rounded-lg px-4 text-left text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:bg-white hover:shadow-premium"
            key={action}
          >
            <span className="grid size-9 place-items-center rounded-md bg-slate-950 text-white">
              <Icon size={17} />
            </span>
            {action}
          </button>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState<SectionId>("command");
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("3 ta yangi bildirishnoma");

  const current = moduleContent[active];
  const filteredNav = useMemo(
    () => nav.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <main className="noise min-h-screen overflow-hidden p-4 text-slate-950 sm:p-6">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="scanline" />
      <div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-[280px_1fr]">
        <motion.aside
          animate={{ opacity: 1, x: 0 }}
          className="glass relative z-10 rounded-lg p-4 lg:min-h-[calc(100vh-48px)]"
          initial={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <div className="grid size-11 place-items-center rounded-md bg-slate-950 text-white shadow-premium">
              <Building2 size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">NEXUS</p>
              <h1 className="text-lg font-semibold leading-tight">ERP CRM HR AI</h1>
            </div>
          </div>

          <nav className="mt-5 grid gap-1">
            {nav.map((item) => {
              const Icon = item.icon;
              const selected = item.id === active;
              return (
                <button
                  className={`group relative flex h-11 items-center gap-3 rounded-md px-3 text-left text-sm font-medium transition ${
                    selected ? "bg-slate-950 text-white shadow-premium" : "text-slate-600 hover:bg-white hover:text-slate-950"
                  }`}
                  key={item.id}
                  onClick={() => setActive(item.id)}
                >
                  {selected && <motion.span className="absolute inset-0 rounded-md bg-slate-950" layoutId="active-nav" />}
                  <Icon className="relative z-10 transition group-hover:scale-110" size={18} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-950 p-4 text-white">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles size={17} />
              AI boshqaruv qatlami
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              HR, CRM, Moliya va Analitika agentlari realtime tavsiyalar chiqaradi.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {quickStats.map(([label, value]) => (
              <div className="rounded-md border border-slate-200 bg-white p-3" key={label}>
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-1 text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </motion.aside>

        <section className="relative z-10 grid gap-4">
          <motion.header
            animate={{ opacity: 1, y: 0 }}
            className="glass flex flex-col gap-4 rounded-lg p-4 md:flex-row md:items-center md:justify-between"
            initial={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Korporativ boshqaruv markazi</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-normal text-slate-950 md:text-3xl">
                Katta biznes uchun yagona AI platforma
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <label className="flex h-11 min-w-64 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-slate-500">
                <Search size={18} />
                <input
                  className="w-full bg-transparent text-sm outline-none"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Umumiy qidiruv"
                  value={query}
                />
              </label>
              <button
                className="grid size-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:shadow-premium"
                onClick={() => setNotice("Bildirishnomalar ko'rildi")}
                title={notice}
              >
                <Bell size={18} />
              </button>
              <button className="flex h-11 items-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Rahbar ish maydoni
                <ChevronDown size={16} />
              </button>
            </div>
          </motion.header>

          {query && (
            <div className="glass rounded-lg p-3 text-sm text-slate-600">
              Topildi: {filteredNav.map((item) => item.label).join(", ") || "natija yo'q"}
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.article
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-premium"
                initial={{ opacity: 0, y: 18 }}
                key={metric.label}
                transition={{ delay: index * 0.06 }}
              >
                <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <strong className="text-3xl font-semibold">{metric.value}</strong>
                  <span className={`text-sm font-semibold ${metric.tone}`}>{metric.delta}</span>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.article
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-lg p-5"
            initial={{ opacity: 0, scale: 0.98 }}
            key={active}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Faol modul</p>
                <h3 className="mt-1 text-2xl font-semibold">{current.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">{current.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                <CheckCircle2 size={18} />
                Ishlayapti
              </div>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {current.cards.map(([label, value, text]) => (
                <div className="rounded-lg border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-premium" key={label}>
                  <p className="text-sm text-slate-500">{label}</p>
                  <strong className="mt-2 block text-2xl font-semibold">{value}</strong>
                  <span className="mt-2 block text-sm leading-5 text-slate-500">{text}</span>
                </div>
              ))}
            </div>
          </motion.article>

          <QuickActions current={current} />
          <ModuleWorkspace current={current} />

          <div className="grid gap-4 xl:grid-cols-[1.45fr_0.9fr]">
            <article className="glass rounded-lg p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Realtime analitika</p>
                  <h3 className="mt-1 text-xl font-semibold">Daromad, davomat va savdo tezligi</h3>
                </div>
                <Gauge className="text-slate-500" size={24} />
              </div>
              <div className="mt-8 flex h-72 items-end gap-3 border-b border-l border-slate-200 px-3">
                {[52, 66, 58, 78, 73, 86, 82, 92, 88, 97, 91, 104].map((height, index) => (
                  <div className="flex flex-1 flex-col items-center gap-2" key={index}>
                    <motion.div
                      animate={{ height: `${height * 2}px` }}
                      className="w-full rounded-t-md bg-gradient-to-t from-slate-950 via-blue-600 to-teal-400"
                      initial={{ height: 8 }}
                      transition={{ delay: index * 0.04, duration: 0.65 }}
                    />
                    <span className="text-xs text-slate-400">{index + 1}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass rounded-lg p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Savdo pipeline</h3>
                <BriefcaseBusiness className="text-slate-500" size={23} />
              </div>
              <div className="mt-6 grid gap-4">
                {pipeline.map((item) => (
                  <div key={item.stage}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-slate-700">{item.stage}</span>
                      <span className="text-slate-500">{item.value} kelishuv</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        animate={{ width: `${item.value * 2}%` }}
                        className={`h-full rounded-full ${item.color}`}
                        initial={{ width: 0 }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
            <article className="glass rounded-lg p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">AI agentlar</h3>
                <BrainCircuit className="text-slate-500" size={24} />
              </div>
              <div className="mt-5 grid gap-3">
                {moduleContent.ai.cards.map(([name, confidence, text]) => (
                  <div className="flex items-start gap-3 rounded-md border border-slate-200 bg-white p-3 transition hover:-translate-y-1" key={name}>
                    <div className="grid size-10 shrink-0 place-items-center rounded-md bg-slate-100 text-slate-800">
                      <Sparkles size={19} />
                    </div>
                    <div>
                      <p className="font-semibold">{name} <span className="text-sm text-emerald-600">{confidence}</span></p>
                      <p className="mt-1 text-sm leading-5 text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass rounded-lg p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Hodimlar operatsiyasi</h3>
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

          <article className="glass rounded-lg p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Live activity stream</h3>
              <MapPin className="text-slate-500" size={22} />
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {current.activity.map((item, index) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-600"
                  initial={{ opacity: 0, y: 12 }}
                  key={item}
                  transition={{ delay: index * 0.06 }}
                >
                  <span className="mb-2 block text-xs text-slate-400">0{index + 1}</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </article>

          <footer className="glass grid gap-4 rounded-lg p-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <LockKeyhole className="text-emerald-600" size={20} />
              <span className="text-sm font-medium">RBAC, audit log, session tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={20} />
              <span className="text-sm font-medium">PDF, Excel, CSV hisobotlar</span>
            </div>
            <div className="flex items-center gap-3">
              <Workflow className="text-rose-600" size={20} />
              <span className="text-sm font-medium">Ish jarayoni va avtomatlashtirish tayyor</span>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
