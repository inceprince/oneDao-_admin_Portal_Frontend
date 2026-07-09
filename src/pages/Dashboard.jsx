import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import KnowledgeBase from "../components/KnowledgeBase";
import TopDrivers from "../components/TopDrivers";
import StatisticsChart from "../components/StatisticsChart";
import DataTable from "../components/DataTable";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <div className="topbar-left">
            <i
              className="fa-solid fa-bars topbar-hamburger"
              onClick={() => setSidebarOpen((o) => !o)}
            ></i>
            <h1 className="topbar-greeting">
              Good morning, <em>Maharram</em> 👋
            </h1>
            <span className="topbar-message">
              you have <span className="topbar-highlight">1 new message</span>
            </span>
          </div>
          <div className="topbar-right">
            
            <button className="topbar-logout-icon" onClick={() => navigate("/login")} title="Logout">
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </div>

        <div className="dashboard-row">
          <div className="dashboard-left-col">
            <KnowledgeBase />
            <StatisticsChart />
          </div>
          <TopDrivers />
        </div>

        <DataTable />
      </main>
    </div>
  );
}

export default Dashboard;
