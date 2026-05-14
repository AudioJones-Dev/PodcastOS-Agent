import { AppShell } from "@/components/app-shell";
import { SettingsSurface } from "@/components/surface";

export default function SettingsPage() {
  return (
    <AppShell active="Settings">
      <SettingsSurface />
    </AppShell>
  );
}
