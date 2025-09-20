import Link from "next/link";
export default function Sidebar(){
  return (
    <aside className="hidden md:block w-[240px] shrink-0">
      <div className="sticky top-4 space-y-4">
        <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-4">
          <div className="text-sm text-neutral-400 mb-2">Site Search</div>
          <div className="flex items-center gap-2">
            <input className="w-full min-w-0 px-3 py-2 text-sm bg-neutral-800 border border-neutral-700 outline-none" placeholder="Keyword..." />
            <button type="button" aria-label="Search" className="shrink-0 p-2 bg-neutral-800 border border-neutral-700">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2"></circle>
                <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth="2"></line>
              </svg>
            </button>
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-4">
          <div className="text-sm text-neutral-400 mb-3">Menu</div>
          <nav className="flex flex-col gap-2 text-neutral-300">
            <Link className="hover:text-white" href="/">Home</Link>
            <Link className="hover:text-white" href="/news">News</Link>
            <Link className="hover:text-white" href="/analysis">Analysis</Link>
            <Link className="hover:text-white" href="/guides">Guides</Link>
            <Link className="hover:text-white" href="/develop">Develop</Link>
            <Link className="hover:text-white" href="/builds">Builds</Link>
            <Link className="hover:text-white" href="/data">Data</Link>
            <Link className="hover:text-white" href="/characters">Characters</Link>
            <Link className="hover:text-white" href="/weapons">Weapons</Link>
          </nav>
        </div>
      </div>
    </aside>
  );
}