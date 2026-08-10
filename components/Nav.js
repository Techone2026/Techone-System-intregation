import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          Techone Systems Integration
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/#services">Services</Link>
          <Link href="/#locations">Locations</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
