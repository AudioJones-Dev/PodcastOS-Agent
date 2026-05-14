import {
  AlertTriangle,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FolderKanban,
  LayoutDashboard,
  ListChecks,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

export const workspace = {
  name: "AJ Digital Podcast OS",
  owner: "Audio Jones",
};

export const agencyNav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Clients", href: "/clients/new", icon: Users },
  { label: "Episodes", href: "/episodes", icon: FolderKanban },
  { label: "Tasks", href: "/tasks/edit-003", icon: ListChecks },
  { label: "Deliverables", href: "/deliverables/thumb-003", icon: FileCheck2 },
  { label: "Reports", href: "/reports", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const clientNav = [
  { label: "Overview", href: "/portal", icon: LayoutDashboard },
  { label: "Approvals", href: "/portal#approvals", icon: ShieldCheck },
  { label: "Episodes", href: "/portal#episodes", icon: FolderKanban },
  { label: "Deliverables", href: "/portal#deliverables", icon: FileCheck2 },
  { label: "Reports", href: "/portal#reports", icon: BarChart3 },
];

export const metrics = [
  { label: "Active clients", value: "12", note: "3 onboarding", tone: "neutral" },
  { label: "Episodes in production", value: "28", note: "7 due this week", tone: "neutral" },
  { label: "Waiting approvals", value: "9", note: "4 older than 3 days", tone: "warn" },
  { label: "Blocked deliverables", value: "5", note: "2 missing source files", tone: "danger" },
];

export const clients = [
  {
    name: "Northstar Advisory",
    tier: "Tier 2",
    status: "Active",
    episode: "003 - Scaling Trust",
    stage: "Post-production",
    next: "Thumbnail approval",
    owner: "Maya",
    blocker: "Client review",
  },
  {
    name: "Founder Clinic",
    tier: "Tier 3",
    status: "Active",
    episode: "018 - Durable Demand",
    stage: "Planning",
    next: "Production sheet",
    owner: "Jordan",
    blocker: "None",
  },
  {
    name: "Local Growth Lab",
    tier: "Tier 1",
    status: "Onboarding",
    episode: "Client Bible",
    stage: "Discovery",
    next: "Offer map",
    owner: "Ari",
    blocker: "Brand assets",
  },
];

export const tasks = [
  {
    id: "edit-003",
    title: "Finalize long-form edit",
    client: "Northstar Advisory",
    episode: "003 - Scaling Trust",
    owner: "Devon",
    due: "Today",
    status: "Doing",
    priority: "High",
    input: "Raw file ingest note, host brief, edit template",
    output: "Long-form edit v2",
  },
  {
    id: "sheet-018",
    title: "Draft production sheet",
    client: "Founder Clinic",
    episode: "018 - Durable Demand",
    owner: "Jordan",
    due: "Tomorrow",
    status: "Todo",
    priority: "Normal",
    input: "Approved topic cluster",
    output: "Production sheet",
  },
  {
    id: "bible-lgl",
    title: "Complete offer map",
    client: "Local Growth Lab",
    episode: "Client Bible",
    owner: "Ari",
    due: "May 20",
    status: "Blocked",
    priority: "High",
    input: "Discovery summary",
    output: "Offer map",
  },
];

export const approvals = [
  {
    gate: "Thumbnail approval",
    client: "Northstar Advisory",
    deliverable: "Episode 003 thumbnail",
    waitingOn: "Client Owner",
    age: "3d",
    status: "Pending",
  },
  {
    gate: "Production sheet approval",
    client: "Founder Clinic",
    deliverable: "Episode 018 production sheet",
    waitingOn: "Producer",
    age: "8h",
    status: "Internal review",
  },
  {
    gate: "Report approval",
    client: "Metro Practice",
    deliverable: "April monthly report",
    waitingOn: "Agency Admin",
    age: "1d",
    status: "Pending",
  },
];

export const episodes = [
  { title: "Scaling Trust", client: "Northstar Advisory", stage: "Post-production", status: "Waiting approval", owner: "Maya", due: "Today" },
  { title: "Durable Demand", client: "Founder Clinic", stage: "Planning", status: "Active", owner: "Jordan", due: "Tomorrow" },
  { title: "The Referral Engine", client: "Metro Practice", stage: "Publishing", status: "Blocked", owner: "Sam", due: "May 19" },
  { title: "Authority Compounding", client: "Northstar Advisory", stage: "Analytics", status: "Active", owner: "Maya", due: "May 22" },
];

export const pipelineStages = [
  "Discovery",
  "Topic Strategy",
  "Planning",
  "Production",
  "Post-production",
  "Publishing",
  "Analytics",
];

export const deliverables = [
  {
    id: "thumb-003",
    title: "Episode 003 thumbnail",
    type: "Thumbnail",
    client: "Northstar Advisory",
    episode: "003 - Scaling Trust",
    version: "v2",
    status: "Ready for client review",
    gate: "Thumbnail approval",
    owner: "Maya",
    preview: "Google Drive / Northstar / Episode 003 / thumbnail-v2.png",
  },
  {
    id: "edit-003",
    title: "Long-form edit",
    type: "Long-form edit",
    client: "Northstar Advisory",
    episode: "003 - Scaling Trust",
    version: "v2",
    status: "Internal review",
    gate: "Edit approval",
    owner: "Devon",
    preview: "Frame.io / Northstar / Episode 003 / review-v2",
  },
  {
    id: "report-april",
    title: "April monthly report",
    type: "Monthly report",
    client: "Metro Practice",
    episode: "Monthly reporting",
    version: "v1",
    status: "Draft",
    gate: "Report approval",
    owner: "Sam",
    preview: "Reports / Metro Practice / 2026-04",
  },
];

export const setupSteps = [
  { label: "Client profile", status: "Complete", icon: CheckCircle2 },
  { label: "Service tier", status: "Complete", icon: CheckCircle2 },
  { label: "Client users", status: "Needs invite", icon: Clock3 },
  { label: "Brand assets", status: "Missing", icon: AlertTriangle },
  { label: "Client Bible", status: "Draft", icon: CalendarDays },
];

export const reports = [
  { title: "April Monthly Report", client: "Metro Practice", type: "Monthly", period: "Apr 2026", status: "Draft", approval: "Pending internal" },
  { title: "Episode 003 Results", client: "Northstar Advisory", type: "Episode", period: "May 2026", status: "Ready for review", approval: "Client pending" },
  { title: "Topic Refresh Memo", client: "Founder Clinic", type: "Strategy", period: "Q2 2026", status: "Approved", approval: "Approved" },
];

export const activity = [
  "Maya requested thumbnail approval for Northstar Advisory.",
  "Devon submitted long-form edit v2 for internal review.",
  "Ari marked Local Growth Lab offer map blocked by missing assets.",
  "Jordan created Episode 018 production sheet task.",
];
