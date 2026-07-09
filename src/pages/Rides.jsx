import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { ridesData } from "../data/pagesData";
import "./TablePage.css";

const PAGE_SIZE = 5;

const statusClass = {
  Completed: "tp-status--completed",
  "In Progress": "tp-status--in-progress",
  Cancelled: "tp-status--cancelled",
};

function Rides() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(ridesData.length / PAGE_SIZE);
  const pageRows = ridesData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pageIds = pageRows.map((r) => r.id);
  const allPageSelected = pageIds.every((id) => selected.includes(id));

  function toggleRow(id) {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }

  function toggleAll() {
    setSelected((prev) =>
      allPageSelected ? prev.filter((id) => !pageIds.includes(id)) : [...new Set([...prev, ...pageIds])]
    );
  }

  return (
    <div className="tp-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="tp-main">
        <div className="tp-topbar">
          <div className="tp-topbar-left">
            <i className="fa-solid fa-bars tp-topbar-icon" onClick={() => setSidebarOpen((o) => !o)}></i>
            <h1 className="tp-page-title">Rides</h1>
          </div>
          <div className="tp-topbar-right">
            <i className="fa-solid fa-table-cells tp-topbar-icon"></i>
            <button className="tp-logout-icon" onClick={() => navigate("/login")} title="Logout">
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </div>

        <div className="tp-card">
          <div className="tp-card-header">
            <h2 className="tp-card-title">All Rides</h2>
            <span className="tp-count-badge">{ridesData.length} rides</span>
          </div>
          <div className="tp-wrapper">
            <table className="tp-table">
              <thead>
                <tr>
                  <th><input type="checkbox" onChange={toggleAll} checked={allPageSelected} /></th>
                  <th>Driver</th>
                  <th>Client</th>
                  <th>Date</th>
                  <th>Distance</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {pageRows.map((row) => (
                  <tr key={row.id} className={selected.includes(row.id) ? "tp-row--selected" : ""}>
                    <td><input type="checkbox" checked={selected.includes(row.id)} onChange={() => toggleRow(row.id)} /></td>
                    <td>
                      <div className="tp-user">
                        <img src={row.driver.avatar} alt={row.driver.name} className="tp-avatar" />
                        <div>
                          <div className="tp-name">{row.driver.name}</div>
                          <div className="tp-phone">{row.driver.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="tp-cell">{row.client}</td>
                    <td className="tp-cell-muted">{row.date}</td>
                    <td className="tp-cell">{row.distance}</td>
                    <td className="tp-cell">{row.duration}</td>
                    <td><span className={`tp-status ${statusClass[row.status]}`}>{row.status}</span></td>
                    <td><span className="tp-income">{row.amount}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="tp-pagination">
            <span className="tp-count">
              {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, ridesData.length)} of {ridesData.length} items
            </span>
            <div className="tp-pages">
              <button className="tp-page-btn" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} className={`tp-page-btn ${page === p ? "tp-page-btn--active" : ""}`} onClick={() => setPage(p)}>{p}</button>
              ))}
              <button className="tp-page-btn" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Rides;
