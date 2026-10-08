"use client";

import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Clock3,
  Droplets,
  Thermometer,
} from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { time: "10:00", temp: 27.4 },
  { time: "10:30", temp: 27.8 },
  { time: "11:00", temp: 28.0 },
  { time: "11:30", temp: 28.2 },
  { time: "12:00", temp: 28.4 },
  { time: "12:30", temp: 28.7 },
  { time: "13:00", temp: 29.0 },
];

export default function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="preview-header">
        <div>
          <span className="eyebrow">LIVE MONITORING</span>
          <h3>Milk condition overview</h3>
        </div>

        <div className="status-pill">
          <span />
          SIMULATION
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="sensor-card">
          <div className="sensor-icon temperature">
            <Thermometer size={20} />
          </div>
          <div className="sensor-info">
            <span>Temperature</span>
            <strong>28.4°C</strong>
          </div>
          <ArrowUpRight size={16} className="metric-up" />
        </div>

        <div className="sensor-card">
          <div className="sensor-icon ph">
            <Droplets size={20} />
          </div>
          <div className="sensor-info">
            <span>pH Level</span>
            <strong>6.42</strong>
          </div>
        </div>

        <div className="sensor-card">
          <div className="sensor-icon prediction">
            <BrainCircuit size={20} />
          </div>
          <div className="sensor-info">
            <span>AI Confidence</span>
            <strong>91.4%</strong>
          </div>
        </div>
      </div>

      <div className="preview-main-grid">
        <div className="chart-card">
          <div className="chart-heading">
            <div>
              <span>Temperature trend</span>
              <strong>28.4°C</strong>
            </div>
            <span className="chart-badge">Last 3h</span>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient
                    id="tempGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#0E9F8E"
                      stopOpacity={0.28}
                    />
                    <stop
                      offset="100%"
                      stopColor="#0E9F8E"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                />

                <YAxis
                  domain={["dataMin - 1", "dataMax + 1"]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="temp"
                  stroke="#0E9F8E"
                  strokeWidth={3}
                  fill="url(#tempGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="prediction-card">
          <div className="prediction-top">
            <div className="prediction-icon">
              <BrainCircuit size={22} />
            </div>
            <span>AI PREDICTION</span>
          </div>

          <h4>Estimated fermentation window</h4>

          <div className="prediction-time">
            <Clock3 size={22} />
            <strong>02h 37m</strong>
          </div>

          <div className="risk-box">
            <div className="risk-status">
              <span className="risk-dot" />
              <strong>LOW RISK</strong>
            </div>
            <span>Current milk condition appears stable.</span>
          </div>

          <div className="prediction-note">
            <Activity size={16} />
            <span>
              Demonstration value — connect your real AI model later.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}