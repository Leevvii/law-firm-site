import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="flex align-middle justify-between">
        <Link>Robredo Law Firm</Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <button className="btn btn-primary">Get Started</button>
      </header>
    </>
  );
}
