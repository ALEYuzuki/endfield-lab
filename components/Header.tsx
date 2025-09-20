import Link from "next/link";
export default function Header(){
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-[1200px] px-4 h-14 flex items-center justify-between">
        <div className="font-semibold tracking-wide"><Link href="/">Endfield Lab</Link></div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
          <Link className="hover:text-white" href="/news">News</Link>
          <Link className="hover:text-white" href="/analysis">Analysis</Link>
          <Link className="hover:text-white" href="/guides">Guides</Link>
          <Link className="hover:text-white" href="/characters">Characters</Link>
          <Link className="hover:text-white" href="/weapons">Weapons</Link>
        </nav>
      </div>
    </header>
  );
}