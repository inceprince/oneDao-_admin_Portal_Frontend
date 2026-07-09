import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine
} from "recharts";
import { chartData } from "../data/dashboardData";
import "./StatisticsChart.css";

function StatisticsChart() {
  const [month] = useState("Aug 2021");

  return (
    <div className="chart-section">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Statistic</h3>
          <div className="chart-month">
            <i className="fa-solid fa-chevron-left"></i>
            <span>{month}</span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="chart-legend">
          <span className="legend-dot" style={{ background: "#4880FF" }}></span>
          <span className="legend-label">Avarage grade</span>
          <span className="legend-dot" style={{ background: "#22C55E" }}></span>
          <span className="legend-label">Exams</span>
        </div>
      </div>

      <div className="chart-subtitle">Progress score</div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#A7ACC4" }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip
            contentStyle={{ borderRadius: 8, fontSize: 12, border: "none", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
          />
          <ReferenceLine x="Aug" stroke="#ddd" strokeWidth={24} strokeOpacity={0.4} />
          <Line type="monotone" dataKey="average" stroke="#4880FF" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="exams" stroke="#22C55E" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatisticsChart;
