import { useState } from "react";
import { tableRows } from "../data/dashboardData";
import "./DataTable.css";

const PAGE_SIZE = 5;

function DataTable() {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(tableRows.length / PAGE_SIZE);
  const pageRows = tableRows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function toggleRow(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function toggleAll() {
    const pageIds = pageRows.map((r) => r.id);
    const allSelected = pageIds.every((id) => selected.includes(id));
    setSelected((prev) =>
      allSelected ? prev.filter((id) => !pageIds.includes(id)) : [...new Set([...prev, ...pageIds])]
    );
  }

  const pageIds = pageRows.map((r) => r.id);
  const allPageSelected = pageIds.every((id) => selected.includes(id));

  return (
    <div className="dt-section">
      <div className="dt-wrapper">
        <table className="dt-table">
          <thead>
            <tr>
              <th><input type="checkbox" onChange={toggleAll} checked={allPageSelected} /></th>
              <th>User</th>
              <th>Car Comfort</th>
              <th>Ordered Time</th>
              <th>Start Location</th>
              <th>Finish Location</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row) => (
              <tr key={row.id} className={selected.includes(row.id) ? "dt-row--selected" : ""}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                  />
                </td>
                <td>
                  <div className="dt-user">
                    <img src={row.user.avatar} alt={row.user.name} className="dt-avatar" />
                    <div>
                      <div className="dt-username">{row.user.name}</div>
                      <div className="dt-phone">{row.user.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="dt-comfort">{row.carComfort}</td>
                <td className="dt-time">{row.orderedTime}</td>
                <td className="dt-location">{row.startLocation}</td>
                <td className="dt-location">{row.finishLocation}</td>
                <td>
                  <span className="dt-income" style={{ background: row.incomeColor }}>
                    {row.income}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dt-pagination">
        <span className="dt-count">
          {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, tableRows.length)} of {tableRows.length} items
        </span>
        <div className="dt-pages">
          <button className="dt-page-btn" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={`dt-page-btn ${page === p ? "dt-page-btn--active" : ""}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
          <button className="dt-page-btn" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
