import {
  AlertCircle,
  ArrowRight,
  Check,
  Clock3,
  FileText,
  Link2,
  LockKeyhole,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import {
  activity,
  approvals,
  clients,
  deliverables,
  episodes,
  metrics,
  pipelineStages,
  reports,
  setupSteps,
  tasks,
} from "@/lib/mock-data";

export function PageHeader({ title, description, action }: { title: string; description: string; action?: string }) {
  return (
    <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
      <div>
        <h1 className="text-2xl font-semibold tracking-normal text-[#101418]">{title}</h1>
        <p className="mt-1 max-w-3xl text-sm leading-6 text-[#667085]">{description}</p>
      </div>
      {action ? (
        <button className="inline-flex h-10 items-center justify-center rounded-md bg-[#101418] px-4 text-sm font-semibold text-white">
          {action}
        </button>
      ) : null}
    </div>
  );
}

export function Panel({ title, children, action }: { title: string; children: React.ReactNode; action?: string }) {
  return (
    <section className="rounded-lg border border-[#dfe4ea] bg-white">
      <div className="flex min-h-12 items-center justify-between border-b border-[#edf0f3] px-4">
        <h2 className="text-sm font-semibold text-[#101418]">{title}</h2>
        {action ? <span className="text-xs font-medium text-[#ff4d12]">{action}</span> : null}
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}

export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "good" | "warn" | "danger" }) {
  const tones = {
    neutral: "bg-[#eef2f6] text-[#475467]",
    good: "bg-[#e7f7ee] text-[#067647]",
    warn: "bg-[#fff3d6] text-[#985a00]",
    danger: "bg-[#ffe8e3] text-[#b42318]",
  };

  return <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

export function DashboardSurface() {
  return (
    <>
      <PageHeader
        title="Production dashboard"
        description="A calm operating view for clients, active episodes, tasks, deliverables, approvals, and reporting deadlines."
        action="New client"
      />
      <div className="grid gap-3 md:grid-cols-4">
        {metrics.map((metric) => (
          <div className="rounded-lg border border-[#dfe4ea] bg-white p-4" key={metric.label}>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#667085]">{metric.label}</p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-3xl font-semibold text-[#101418]">{metric.value}</p>
              <Badge tone={metric.tone === "danger" ? "danger" : metric.tone === "warn" ? "warn" : "neutral"}>{metric.note}</Badge>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.9fr]">
        <Panel title="Client production table" action="View all">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold uppercase tracking-[0.08em] text-[#667085]">
                  <th className="border-b border-[#edf0f3] py-2">Client</th>
                  <th className="border-b border-[#edf0f3] py-2">Tier</th>
                  <th className="border-b border-[#edf0f3] py-2">Current episode</th>
                  <th className="border-b border-[#edf0f3] py-2">Stage</th>
                  <th className="border-b border-[#edf0f3] py-2">Next action</th>
                  <th className="border-b border-[#edf0f3] py-2">Owner</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr className="border-b border-[#f1f3f6] last:border-0" key={client.name}>
                    <td className="py-3 font-semibold">{client.name}</td>
                    <td className="py-3 text-[#667085]">{client.tier}</td>
                    <td className="py-3 text-[#344054]">{client.episode}</td>
                    <td className="py-3"><Badge>{client.stage}</Badge></td>
                    <td className="py-3 text-[#344054]">{client.next}</td>
                    <td className="py-3 text-[#344054]">{client.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <div className="grid gap-5">
          <ApprovalsPanel />
          <Panel title="Recent activity">
            <div className="space-y-3">
              {activity.map((item) => (
                <div className="flex gap-3 text-sm text-[#475467]" key={item}>
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#ff4d12]" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}

export function ApprovalsPanel() {
  return (
    <Panel title="Approvals queue" action="Open approvals">
      <div className="space-y-3">
        {approvals.map((approval) => (
          <div className="rounded-md border border-[#edf0f3] p-3" key={`${approval.client}-${approval.gate}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">{approval.deliverable}</p>
                <p className="mt-1 text-xs text-[#667085]">{approval.client} · {approval.gate}</p>
              </div>
              <Badge tone={approval.status === "Pending" ? "warn" : "neutral"}>{approval.age}</Badge>
            </div>
            <p className="mt-3 text-xs text-[#667085]">Waiting on {approval.waitingOn}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function ClientSetupSurface() {
  return (
    <>
      <PageHeader title="New client setup" description="Create the client workspace, assign access, attach brand assets, and choose the next production workflow." action="Start workflow" />
      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <Panel title="Client profile">
          <div className="grid gap-4 md:grid-cols-2">
            {["Client name", "Website", "Primary contact", "Producer owner", "Service tier", "Start date"].map((field) => (
              <label className="grid gap-1 text-sm font-medium" key={field}>
                {field}
                <input className="h-10 rounded-md border border-[#d8dee6] bg-white px-3 text-sm outline-none focus:border-[#ff4d12]" placeholder={field} />
              </label>
            ))}
          </div>
          <div className="mt-5 rounded-lg border border-[#edf0f3] bg-[#fafbfc] p-4">
            <p className="text-sm font-semibold">Next workflow</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {["Start discovery", "Build Client Bible", "Create first episode"].map((item) => (
                <button className="flex items-center justify-between rounded-md border border-[#d8dee6] bg-white p-3 text-left text-sm font-semibold" key={item}>
                  {item}
                  <ArrowRight className="h-4 w-4 text-[#ff4d12]" />
                </button>
              ))}
            </div>
          </div>
        </Panel>
        <Panel title="Setup checklist">
          <div className="space-y-3">
            {setupSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div className="flex items-center justify-between rounded-md border border-[#edf0f3] p-3" key={step.label}>
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-[#ff4d12]" />
                    <span className="text-sm font-medium">{step.label}</span>
                  </div>
                  <Badge tone={step.status === "Missing" ? "danger" : step.status === "Complete" ? "good" : "warn"}>{step.status}</Badge>
                </div>
              );
            })}
          </div>
        </Panel>
      </div>
    </>
  );
}

export function EpisodePipelineSurface() {
  return (
    <>
      <PageHeader title="Episode pipeline" description="Track every production cycle from discovery to topic refresh without bypassing approval gates." action="New episode" />
      <div className="overflow-x-auto rounded-lg border border-[#dfe4ea] bg-white p-4">
        <div className="grid min-w-[1100px] grid-cols-7 gap-3">
          {pipelineStages.map((stage) => (
            <div key={stage}>
              <div className="mb-3 rounded-md bg-[#f2f4f7] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#667085]">{stage}</div>
              <div className="space-y-3">
                {episodes.filter((episode) => episode.stage === stage).map((episode) => (
                  <div className="rounded-lg border border-[#dfe4ea] bg-white p-3 shadow-sm" key={episode.title}>
                    <p className="text-sm font-semibold">{episode.title}</p>
                    <p className="mt-1 text-xs text-[#667085]">{episode.client}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <Badge tone={episode.status === "Blocked" ? "danger" : episode.status === "Waiting approval" ? "warn" : "neutral"}>{episode.status}</Badge>
                      <span className="text-xs text-[#667085]">{episode.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function TaskDetailSurface() {
  const task = tasks[0];
  return (
    <>
      <PageHeader title={task.title} description={`${task.client} · ${task.episode}`} action="Submit output" />
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <Panel title="Task brief">
          <div className="grid gap-4 md:grid-cols-4">
            <Meta label="Assignee" value={task.owner} />
            <Meta label="Due" value={task.due} />
            <Meta label="Priority" value={task.priority} />
            <Meta label="Status" value={task.status} />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <InfoBlock icon={<FileText className="h-4 w-4" />} title="Required inputs" body={task.input} />
            <InfoBlock icon={<Check className="h-4 w-4" />} title="Expected output" body={task.output} />
          </div>
        </Panel>
        <Panel title="Blockers and handoff">
          <div className="space-y-3">
            <button className="flex w-full items-center gap-3 rounded-md border border-[#d8dee6] p-3 text-left text-sm font-semibold">
              <AlertCircle className="h-4 w-4 text-[#b42318]" />
              Mark blocked
            </button>
            <button className="flex w-full items-center gap-3 rounded-md border border-[#d8dee6] p-3 text-left text-sm font-semibold">
              <Link2 className="h-4 w-4 text-[#ff4d12]" />
              Add file or link
            </button>
            <button className="flex w-full items-center gap-3 rounded-md border border-[#d8dee6] p-3 text-left text-sm font-semibold">
              <MessageSquare className="h-4 w-4 text-[#475467]" />
              Add internal comment
            </button>
          </div>
        </Panel>
      </div>
    </>
  );
}

export function DeliverableReviewSurface() {
  const deliverable = deliverables[0];
  return (
    <>
      <PageHeader title={deliverable.title} description={`${deliverable.client} · ${deliverable.episode} · ${deliverable.version}`} />
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <Panel title="Preview">
          <div className="grid min-h-[320px] place-items-center rounded-lg border border-dashed border-[#cfd6df] bg-[#fafbfc] p-6 text-center">
            <div>
              <FileText className="mx-auto h-10 w-10 text-[#ff4d12]" />
              <p className="mt-3 text-sm font-semibold">{deliverable.preview}</p>
              <p className="mt-1 text-sm text-[#667085]">MVP stores file and link references before native media storage.</p>
            </div>
          </div>
        </Panel>
        <Panel title="Approval panel">
          <div className="space-y-4">
            <Meta label="Gate" value={deliverable.gate} />
            <Meta label="Status" value={deliverable.status} />
            <Meta label="Owner" value={deliverable.owner} />
            <div className="grid gap-2">
              <button className="h-10 rounded-md bg-[#067647] text-sm font-semibold text-white">Approve</button>
              <button className="h-10 rounded-md border border-[#d8dee6] bg-white text-sm font-semibold">Request revision</button>
              <button className="h-10 rounded-md border border-[#ffd0c7] bg-[#fff5f2] text-sm font-semibold text-[#b42318]">Reject</button>
            </div>
          </div>
        </Panel>
      </div>
    </>
  );
}

export function ReportsSurface() {
  return (
    <>
      <PageHeader title="Reports" description="Create, approve, and send episode, monthly, and strategy reports that feed topic refresh." action="Create report" />
      <Panel title="Report list">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-[0.08em] text-[#667085]">
                <th className="border-b border-[#edf0f3] py-2">Report</th>
                <th className="border-b border-[#edf0f3] py-2">Client</th>
                <th className="border-b border-[#edf0f3] py-2">Type</th>
                <th className="border-b border-[#edf0f3] py-2">Period</th>
                <th className="border-b border-[#edf0f3] py-2">Status</th>
                <th className="border-b border-[#edf0f3] py-2">Approval</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr className="border-b border-[#f1f3f6] last:border-0" key={report.title}>
                  <td className="py-3 font-semibold">{report.title}</td>
                  <td className="py-3 text-[#475467]">{report.client}</td>
                  <td className="py-3 text-[#475467]">{report.type}</td>
                  <td className="py-3 text-[#475467]">{report.period}</td>
                  <td className="py-3"><Badge>{report.status}</Badge></td>
                  <td className="py-3 text-[#475467]">{report.approval}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}

export function SettingsSurface() {
  return (
    <>
      <PageHeader title="Settings and access" description="Manage workspace users, client scopes, and approval authority from one auditable surface." action="Invite user" />
      <div className="grid gap-5 lg:grid-cols-3">
        {["Workspace users", "Client access", "Approval authority"].map((title) => (
          <Panel title={title} key={title}>
            <div className="space-y-3">
              {["Owner", "Admin", "Producer", "Client reviewer"].map((role) => (
                <div className="flex items-center justify-between rounded-md border border-[#edf0f3] p-3" key={role}>
                  <span className="text-sm font-medium">{role}</span>
                  <Badge tone={role === "Client reviewer" ? "warn" : "neutral"}>{role === "Client reviewer" ? "Scoped" : "Active"}</Badge>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </>
  );
}

export function ClientPortalSurface() {
  return (
    <>
      <PageHeader title="Northstar Advisory portal" description="Client-safe view for approvals, episode status, deliverables, and reports." />
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <Panel title="Current production">
          <div className="rounded-lg border border-[#dfe4ea] p-4">
            <p className="text-lg font-semibold">003 - Scaling Trust</p>
            <p className="mt-1 text-sm text-[#667085]">Post-production · waiting on thumbnail approval</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <InfoBlock icon={<Clock3 className="h-4 w-4" />} title="Next date" body="Publish target: May 21" />
              <InfoBlock icon={<ShieldCheck className="h-4 w-4" />} title="Approval" body="Thumbnail approval pending" />
              <InfoBlock icon={<LockKeyhole className="h-4 w-4" />} title="Visibility" body="Client-safe records only" />
            </div>
          </div>
        </Panel>
        <ApprovalsPanel />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Panel title="Client-visible deliverables">
          <div className="space-y-3">
            {deliverables.slice(0, 2).map((item) => (
              <div className="flex items-center justify-between rounded-md border border-[#edf0f3] p-3" key={item.id}>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-[#667085]">{item.type} · {item.version}</p>
                </div>
                <Badge tone={item.status.includes("Ready") ? "warn" : "neutral"}>{item.status}</Badge>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Latest report">
          <p className="text-sm font-semibold">Episode 003 Results</p>
          <p className="mt-2 text-sm leading-6 text-[#667085]">Report draft is being prepared. Client delivery remains locked until report approval is complete.</p>
        </Panel>
      </div>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-[#edf0f3] bg-[#fafbfc] p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#667085]">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}

function InfoBlock({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-md border border-[#edf0f3] p-3">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="text-[#ff4d12]">{icon}</span>
        {title}
      </div>
      <p className="mt-2 text-sm leading-6 text-[#667085]">{body}</p>
    </div>
  );
}
