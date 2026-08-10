export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-black/10 dark:border-white/10 mt-16"
    >
      <div className="max-w-5xl mx-auto px-6 py-10 text-sm flex flex-col gap-2">
        <p className="font-semibold">Techone Systems Integration</p>
        <p>[ADDRESS PLACEHOLDER]</p>
        <p>[PHONE NUMBER] &middot; [EMAIL ADDRESS]</p>
        <p className="opacity-60">
          &copy; {new Date().getFullYear()} Techone Systems Integration. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
