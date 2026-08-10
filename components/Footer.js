import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import logoMark from "@/public/images/logo-mark.png";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div style={{ maxWidth: 320 }}>
            <Link
              className="logo"
              href="/"
              aria-label="TechOne Installers — Systems Integration"
            >
              <Image src={logoMark} alt="" className="logo-icon" />
              <span className="logo-text">
                <span className="logo-name">TECHONE INSTALLERS</span>
                <span className="logo-sub">SYSTEMS INTEGRATION</span>
              </span>
            </Link>
            <p>
              Commercial AV, security, and network integration for Central
              Ohio and surrounding states — serving commercial clients since
              2000.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/work">Our Work</Link>
                </li>
                <li>
                  <Link href="/commercial">Commercial & Enterprise</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} TECHONE INSTALLERS — SYSTEMS
          INTEGRATION DIVISION — LICENSED &amp; INSURED — CENTRAL OHIO
        </div>
      </div>
    </footer>
  );
}
