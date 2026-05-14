import Link from "next/link";
import { Bell, Search, SquarePlus } from "lucide-react";
import { agencyNav, clientNav, workspace } from "@/lib/mock-data";

type AppShellProps = {
  active: string;
  mode?: "agency" | "client";
  children: React.ReactNode;
};

export function AppShell({ active, mode = "agency", children }: AppShellProps) {
  const nav = mode === "agency" ? agencyNav : clientNav;

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-[#101418]">
      <header className="sticky top-0 z-30 border-b border-[#dfe4ea] bg-white/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#101418] text-sm font-semibold text-white">
              OS
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{workspace.name}</p>
              <p className="text-xs text-[#667085]">{mode === "agency" ? "Agency console" : "Client portal"}</p>
            </div>
          </div>
          <div className="hidden w-full max-w-md items-center gap-2 rounded-md border border-[#d8dee6] bg-[#f9fafb] px-3 py-2 text-sm text-[#667085] md:flex">
            <Search className="h-4 w-4" />
            Search clients, episodes, tasks, deliverables
          </div>
          <div className="flex items-center gap-2">
            {mode === "agency" ? (
              <button className="inline-flex h-9 items-center gap-2 rounded-md bg-[#ff4d12] px-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e13f09]">
                <SquarePlus className="h-4 w-4" />
                Create
              </button>
            ) : null}
            <button className="grid h-9 w-9 place-items-center rounded-md border border-[#d8dee6] bg-white text-[#475467]">
              <Bell className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[244px_1fr]">
        <aside className="hidden min-h-[calc(100vh-64px)] border-r border-[#dfe4ea] bg-white px-3 py-4 lg:block">
          <nav className="space-y-1">
            {nav.map((item) => {
              const Icon = item.icon;
              const selected = item.label === active;
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition ${
                    selected
                      ? "bg-[#101418] text-white"
                      : "text-[#475467] hover:bg-[#f2f4f7] hover:text-[#101418]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <main className="min-w-0 px-4 py-5 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
