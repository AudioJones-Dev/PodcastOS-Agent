import { AppShell } from "@/components/app-shell";
import { EpisodePipelineSurface } from "@/components/surface";

export default function EpisodesPage() {
  return (
    <AppShell active="Episodes">
      <EpisodePipelineSurface />
    </AppShell>
  );
}
