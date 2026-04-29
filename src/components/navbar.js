import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="site-nav" data-reveal="0" aria-label="Primary navigation">
      <div className="site-nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}
