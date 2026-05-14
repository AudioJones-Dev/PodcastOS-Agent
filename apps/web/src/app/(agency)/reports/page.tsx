import { AppShell } from "@/components/app-shell";
import { ReportsSurface } from "@/components/surface";

export default function ReportsPage() {
  return (
    <AppShell active="Reports">
      <ReportsSurface />
    </AppShell>
  );
}
