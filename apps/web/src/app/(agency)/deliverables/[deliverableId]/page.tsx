import { AppShell } from "@/components/app-shell";
import { DeliverableReviewSurface } from "@/components/surface";

export default async function DeliverablePage({ params }: { params: Promise<{ deliverableId: string }> }) {
  await params;

  return (
    <AppShell active="Deliverables">
      <DeliverableReviewSurface />
    </AppShell>
  );
}
