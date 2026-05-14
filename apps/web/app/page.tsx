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
  Search,
  ShieldCheck,
  Sparkles,
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

const moduleContent: Record<SectionId, { title: string; subtitle: string; cards: Array<[string, string, string]> }> = {
  command: {
    title: "Yagona boshqaruv paneli",
    subtitle: "ERP, CRM, HRM, AI va analitika bitta operatsion markazda ishlaydi.",
    cards: [
      ["Bugungi savdo", "$184K", "AI prognoz +14% o'sish ko'rsatmoqda"],
      ["Jarayondagi vazifalar", "127", "23 tasi tasdiq jarayonida"],
      ["Realtime signal", "98%", "Barcha asosiy servislar faol"]
    ]
  },
  erp: {
    title: "ERP korxona boshqaruvi",
    subtitle: "Procurement, reporting, invoice va biznes jarayonlari nazoratda.",
    cards: [
      ["Xarid so'rovlari", "34", "9 tasi rahbar tasdig'ida"],
      ["Hisob-faktura nazorati", "$286K", "Soliq rezervi avtomatik hisoblandi"],
      ["Hisobotlar", "PDF / Excel", "Eksport moduli tayyor"]
    ]
  },
  crm: {
    title: "CRM mijozlar tizimi",
    subtitle: "Lid, aloqa, muzokara, yutildi/yutqazildi pipeline boshqaruvi.",
    cards: [
      ["Lidlar", "42", "18 tasi yuqori ehtimolli"],
      ["Muzokara", "24", "4 ta yirik kelishuv rahbar yordamida"],
      ["Kommunikatsiya", "4 kanal", "Email, SMS, Telegram, WhatsApp"]
    ]
  },
  hrm: {
    title: "HRM hodimlar boshqaruvi",
    subtitle: "Employee profile, davomat, payroll, leave va KPI kuzatuvi.",
    cards: [
      ["Hodimlar", "248", "96.7% bugun aktiv"],
      ["Payroll", "$412K", "Bonus va jarimalar hisoblangan"],
      ["Leave request", "12", "4 tasi HR tasdig'ida"]
    ]
  },
  recruitment: {
    title: "Ishga qabul qilish pipeline",
    subtitle: "Vakansiya, CV upload, AI resume analysis va interview scheduling.",
    cards: [
      ["Vakansiyalar", "8", "3 tasi senior pozitsiya"],
      ["AI shortlist", "21", "CV scoring avtomatik ishladi"],
      ["Interview", "9", "Calendar sync tayyor"]
    ]
  },
  finance: {
    title: "Moliya va accounting",
    subtitle: "Kirim, chiqim, soliq, tasdiq va auditga tayyor hisoblar.",
    cards: [
      ["Income", "$2.48M", "Oylik reja 118% bajarildi"],
      ["Expense", "$1.14M", "Vendor xarajatlari optimallashtirildi"],
      ["Net margin", "31%", "Finance Agent tavsiyasi faol"]
    ]
  },
  inventory: {
    title: "Ombor va inventory",
    subtitle: "Warehouse, stock, barcode va product movement kuzatuvi.",
    cards: [
      ["Zaxira holati", "84%", "18 ta barcode scanner kam qolgan"],
      ["Warehouse", "3", "Tashkent A/B va Samarkand"],
      ["Movement", "312", "Bugungi kirim-chiqimlar"]
    ]
  },
  analytics: {
    title: "BI analytics va forecasting",
    subtitle: "KPI monitoring, heatmap, predictive analytics va realtime chartlar.",
    cards: [
      ["Forecast", "+14%", "Savdo pipeline o'sishi"],
      ["KPI risk", "2 zona", "AI risk signali chiqardi"],
      ["Dashboard", "Realtime", "Socket layerga tayyor"]
    ]
  },
  ai: {
    title: "AI agentlar va automation",
    subtitle: "HR, CRM, Moliya va Analitika agentlari tavsiya va hisobot beradi.",
    cards: [
      ["HR Agent", "91%", "Davomat anomaly topildi"],
      ["CRM Agent", "87%", "Yirik kelishuvlarni tezlashtirish"],
      ["Finance Agent", "84%", "Tax optimization tavsiyasi"]
    ]
  },
  security: {
    title: "Korporativ xavfsizlik",
    subtitle: "RBAC, audit log, session tracking, rate limit va login alert.",
    cards: [
      ["RBAC", "8 rol", "Super Admin, Rahbar, HR va boshqalar"],
      ["Audit log", "100%", "Har bir critical action saqlanadi"],
      ["Session", "Faol", "Device history va login alert"]
    ]
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
