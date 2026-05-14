import { AppShell } from "@/components/app-shell";
import { ClientPortalSurface } from "@/components/surface";

export default function PortalPage() {
  return (
    <AppShell active="Overview" mode="client">
      <ClientPortalSurface />
    </AppShell>
  );
}
