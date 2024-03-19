import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <p>
          Robredo Law Firm
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <Link className="link link-hover">Home</Link>
        <Link className="link link-hover">About Us</Link>
        <Link className="link link-hover">Services</Link>
        <Link className="link link-hover">Contacts</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </nav>
    </footer>
  );
}
