import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <div className="wrap">
        <nav>
          <Link
            className="logo"
            href="/"
            aria-label="TechOne Installers — Systems Integration"
          >
            <span className="logo-mark">T1</span>
            <span className="logo-text">
              <span className="logo-name">TECHONE INSTALLERS</span>
              <span className="logo-sub">SYSTEMS INTEGRATION</span>
            </span>
          </Link>
          <ul className="navlinks">
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#work">Our Work</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/commercial">Commercial</Link>
            </li>
          </ul>
          <Link className="btn btn-solid" href="/contact">
            Request Assessment
          </Link>
        </nav>
      </div>
    </header>
  );
}
