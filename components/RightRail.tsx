export default function RightRail(){
  return (
    <aside className="hidden lg:block w-[300px] shrink-0">
      <div className="sticky top-4 space-y-4">
        <section className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-4">
          <div className="text-sm text-neutral-400 mb-2">Trending</div>
          <ol className="text-sm text-neutral-300 space-y-2 list-decimal list-inside"><li>Coming soon</li></ol>
        </section>
        <section className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-4">
          <div className="h-48 rounded-xl border border-neutral-800/60 bg-[repeating-linear-gradient(45deg,_rgba(30,58,138,.6)_0_16px,_rgba(15,23,42,.6)_16px_32px)] grid place-items-center">
            Ad Space
          </div>
        </section>
        <section className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-4">
          <div className="text-sm text-neutral-400 mb-2">Tags</div>
          <div className="text-sm text-neutral-400">No tags yet</div>
        </section>
      </div>
    </aside>
  );
}