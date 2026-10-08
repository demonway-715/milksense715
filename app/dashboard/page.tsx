"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  ArrowLeft,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Droplets,
  Gauge,
  Pause,
  Play,
  Radio,
  Thermometer,
  TriangleAlert,
} from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Reading {
  time: string;
  temperature: number;
  ph: number;
}

const initialData: Reading[] = [
  { time: "10:00", temperature: 27.2, ph: 6.62 },
  { time: "10:30", temperature: 27.5, ph: 6.58 },
  { time: "11:00", temperature: 27.8, ph: 6.54 },
  { time: "11:30", temperature: 28.0, ph: 6.51 },
  { time: "12:00", temperature: 28.2, ph: 6.48 },
  { time: "12:30", temperature: 28.4, ph: 6.45 },
  { time: "13:00", temperature: 28.6, ph: 6.42 },
];

export default function DashboardPage() {
  const [simulation, setSimulation] = useState(false);
  const [temperature, setTemperature] = useState(28.4);
  const [ph, setPh] = useState(6.42);
  const [remaining, setRemaining] = useState(157);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (!simulation) return;

    const interval = setInterval(() => {
      setTemperature((value) =>
        Number(Math.min(value + 0.15, 32).toFixed(2))
      );

      setPh((value) =>
        Number(Math.max(value - 0.025, 5.8).toFixed(2))
      );

      setRemaining((value) => Math.max(value - 1, 5));

      setData((old) => {
        const now = new Date();

        const time = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        return [
          ...old.slice(-7),
          {
            time,
            temperature: Number(
              Math.min(temperature + 0.15, 32).toFixed(2)
            ),
            ph: Number(Math.max(ph - 0.025, 5.8).toFixed(2)),
          },
        ];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [simulation, temperature, ph]);

  const risk =
    ph > 6.2 ? "LOW" : ph > 6.0 ? "MODERATE" : "HIGH";

  const riskClass =
    risk === "LOW"
      ? "risk-low"
      : risk === "MODERATE"
      ? "risk-medium"
      : "risk-high";

  const hours = Math.floor(remaining / 60);
  const minutes = remaining % 60;

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <a href="/" className="back-link">
            <ArrowLeft size={16} />
            Back to MilkSense
          </a>

          <div className="dashboard-title-row">
            <div className="dashboard-logo">🥛</div>

            <div>
              <span className="eyebrow">MILKSENSE AI</span>
              <h1>Monitoring Dashboard</h1>
            </div>
          </div>
        </div>

        <div className="dashboard-controls">
          <div className="connection-status">
            <span />
            DEVICE ONLINE
          </div>

          <button
            className={`simulation-button ${
              simulation ? "simulation-active" : ""
            }`}
            onClick={() => setSimulation(!simulation)}
          >
            {simulation ? <Pause size={17} /> : <Play size={17} />}
            {simulation ? "Stop Simulation" : "Start Simulation"}
          </button>
        </div>
      </header>

      <main className="dashboard-container">
        <div className="demo-banner">
          <TriangleAlert size={18} />

          <div>
            <strong>SIMULATION MODE</strong>
            <span>
              The readings displayed on this dashboard are demonstration
              values and are not connected to the physical prototype yet.
            </span>
          </div>
        </div>

        <section className="dashboard-status">
          <div className="status-heading">
            <div>
              <span className="eyebrow">CURRENT MILK CONDITION</span>
              <h2>Monitoring overview</h2>
            </div>

            <span className={`risk-large ${riskClass}`}>
              <span />
              {risk} RISK
            </span>
          </div>

          <div className="dashboard-stat-grid">
            <DashboardStat
              icon={<Thermometer />}
              label="Temperature"
              value={`${temperature.toFixed(1)}°C`}
              detail="Sensor reading"
            />

            <DashboardStat
              icon={<Droplets />}
              label="pH Level"
              value={ph.toFixed(2)}
              detail="Acidity indicator"
            />

            <DashboardStat
              icon={<Clock3 />}
              label="Estimated Window"
              value={`${hours}h ${minutes}m`}
              detail="Demonstration prediction"
            />

            <DashboardStat
              icon={<BrainCircuit />}
              label="AI Confidence"
              value="91.4%"
              detail="Prototype value"
            />
          </div>
        </section>

        <section className="dashboard-chart-grid">
          <div className="big-chart-card">
            <div className="dashboard-card-heading">
              <div>
                <span className="eyebrow">SENSOR HISTORY</span>
                <h3>Temperature trend</h3>
              </div>

              <div className="chart-live">
                <span />
                Updating
              </div>
            </div>

            <div className="large-chart">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient
                      id="dashboardTemp"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#0E9F8E"
                        stopOpacity={0.3}
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
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    domain={["dataMin - 1", "dataMax + 1"]}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="temperature"
                    stroke="#0E9F8E"
                    strokeWidth={3}
                    fill="url(#dashboardTemp)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="prediction-panel">
            <div className="prediction-heading">
              <div className="prediction-icon large">
                <BrainCircuit size={25} />
              </div>

              <span>AI PREDICTION</span>
            </div>

            <h3>Fermentation risk</h3>

            <div className={`risk-display ${riskClass}`}>
              {risk}
            </div>

            <p>
              Based on the current simulated temperature and pH readings,
              the system estimates that the milk remains within the
              demonstration safe range.
            </p>

            <div className="prediction-time-large">
              <Clock3 size={21} />
              <div>
                <span>Estimated window</span>
                <strong>
                  {hours}h {minutes}m
                </strong>
              </div>
            </div>

            <div className="confidence">
              <div>
                <span>Model confidence</span>
                <strong>91.4%</strong>
              </div>

              <div className="confidence-bar">
                <div style={{ width: "91.4%" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-bottom-grid">
          <div className="system-card">
            <div className="dashboard-card-heading">
              <div>
                <span className="eyebrow">SYSTEM STATUS</span>
                <h3>Connected components</h3>
              </div>
            </div>

            <StatusRow
              icon={<Thermometer />}
              name="Temperature Sensor"
              status="Connected"
            />

            <StatusRow
              icon={<Droplets />}
              name="pH Sensor"
              status="Connected"
            />

            <StatusRow
              icon={<Radio />}
              name="IoT Controller"
              status="Simulation"
            />

            <StatusRow
              icon={<BrainCircuit />}
              name="AI Prediction"
              status="Demo"
            />
          </div>

          <div className="recommendation-card">
            <div className="recommendation-icon">
              <Gauge size={24} />
            </div>

            <span className="eyebrow">SYSTEM RECOMMENDATION</span>

            <h3>Monitor the changing conditions.</h3>

            <p>
              In a real deployment, this area can provide a recommendation
              generated from the connected sensor readings and trained model.
            </p>

            <div className="recommendation-tag">
              <CheckCircle2 size={15} />
              Prototype ready for integration
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function DashboardStat({
  icon,
  label,
  value,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="dashboard-stat">
      <div className="dashboard-stat-icon">{icon}</div>

      <span>{label}</span>

      <strong>{value}</strong>

      <small>{detail}</small>
    </div>
  );
}

function StatusRow({
  icon,
  name,
  status,
}: {
  icon: React.ReactNode;
  name: string;
  status: string;
}) {
  return (
    <div className="status-row">
      <div className="status-row-left">
        <div>{icon}</div>
        <span>{name}</span>
      </div>

      <span className="connected">
        <i />
        {status}
      </span>
    </div>
  );
}