import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <header className="flex align-middle justify-between">
        <Link>Robredo Law Firm</Link>
        <nav>
          <ul>
            {links.map((link) => (
              <li>
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button className="btn btn-primary">Get Started</button>
      </header>
    </>
  );
}
