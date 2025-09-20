import Card from "@/components/Card";
export default function Home(){
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card title="Latest News"><div className="h-40 rounded-xl bg-neutral-800/50"/></Card>
      <Card title="Recommended Guides"><div className="text-sm text-neutral-400">No items yet</div></Card>
      <Card title="Featured Characters"><div className="text-sm text-neutral-400">Preparing…</div></Card>
      <Card title="Ranking / Trends" />
      <Card title="Recent Updates">
        <div className="space-y-2">
          <div className="h-40 rounded-xl bg-neutral-800/50"/>
          <div className="text-sm font-medium">Sample Analysis</div>
          <div className="text-xs text-neutral-400">2025/09/20 11:00:00</div>
        </div>
      </Card>
    </div>
  );
}