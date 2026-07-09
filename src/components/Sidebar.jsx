import { NavLink } from "react-router-dom";
import { navItems } from "../data/dashboardData";
import "./Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "sidebar-overlay--visible" : ""}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar-profile">
          <img src="https://i.pravatar.cc/40?img=33" alt="avatar" className="sidebar-avatar" />
          <div>
            <div className="sidebar-name">Maharram</div>
            <div className="sidebar-phone">+998 (99) 436-46-15</div>
          </div>
        </div>

        <p className="sidebar-menu-label">MAIN MENU</p>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "sidebar-link--active" : ""}`
              }
            >
              <i className={`fa-solid ${item.icon} sidebar-icon`}></i>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
