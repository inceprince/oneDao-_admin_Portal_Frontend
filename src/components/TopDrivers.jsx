import { topDrivers } from "../data/dashboardData";
import "./TopDrivers.css";

function TopDrivers() {
  return (
    <div className="td-section">
      <div className="td-header">
        <h3 className="td-title">Top Drivers</h3>
        <i className="fa-solid fa-chevron-right td-arrow"></i>
      </div>
      <div className="td-list">
        {topDrivers.map((driver) => (
          <div key={driver.name} className="td-row">
            <div className="td-avatar-wrap">
              <img
                src={driver.avatar}
                alt=""
                className="td-avatar"
                onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
              />
              <div className="td-avatar-fallback" style={{ display: "none" }}>
                {driver.name.charAt(0)}
              </div>
            </div>
            <div className="td-info">
              <div className="td-name">{driver.name}</div>
              <div className="td-phone">{driver.phone}</div>
            </div>
            <div className="td-stats">
              <div className="td-stat">Orders: <span>{driver.orders}</span></div>
              <div className="td-stat">Income: <span className="td-income">${" "}{driver.income}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDrivers;
