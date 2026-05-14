import { AppShell } from "@/components/app-shell";
import { TaskDetailSurface } from "@/components/surface";

export default async function TaskPage({ params }: { params: Promise<{ taskId: string }> }) {
  await params;

  return (
    <AppShell active="Tasks">
      <TaskDetailSurface />
    </AppShell>
  );
}
