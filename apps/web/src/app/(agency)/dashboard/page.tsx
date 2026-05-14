import { AppShell } from "@/components/app-shell";
import { DashboardSurface } from "@/components/surface";

export default function DashboardPage() {
  return (
    <AppShell active="Dashboard">
      <DashboardSurface />
    </AppShell>
  );
}
