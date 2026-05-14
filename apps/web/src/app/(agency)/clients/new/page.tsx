import { AppShell } from "@/components/app-shell";
import { ClientSetupSurface } from "@/components/surface";

export default function NewClientPage() {
  return (
    <AppShell active="Clients">
      <ClientSetupSurface />
    </AppShell>
  );
}
