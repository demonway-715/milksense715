"use client";

import {
  Activity,
  BarChart3,
  Beaker,
  BookOpen,
  Cpu,
  FlaskConical,
  Gauge,
  Home,
  Info,
  Lightbulb,
  Menu,
  MessageSquare,
  Rocket,
  Settings2,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const menu = [
  {
    label: "MAIN",
    items: [
      { name: "Home", icon: Home, href: "/" },
      { name: "Dashboard", icon: Gauge, href: "/dashboard" },
    ],
  },
  {
    label: "PROJECT",
    items: [
      { name: "About Project", icon: Info, href: "#about" },
      { name: "How It Works", icon: Activity, href: "#how-it-works" },
      { name: "Workflow", icon: BarChart3, href: "#workflow" },
    ],
  },
  {
    label: "TECHNOLOGY",
    items: [
      { name: "Hardware & Software", icon: Cpu, href: "#technology" },
      { name: "AI Prediction", icon: FlaskConical, href: "#ai" },
      { name: "Existing Systems", icon: BookOpen, href: "#existing" },
    ],
  },
  {
    label: "PROJECT PROGRESS",
    items: [
      { name: "Progress", icon: BarChart3, href: "#progress" },
      { name: "Stakeholder Review", icon: MessageSquare, href: "#reviews" },
      { name: "Future Scope", icon: Rocket, href: "#future" },
    ],
  },
  {
    label: "TEAM",
    items: [
      { name: "Team Details", icon: Users, href: "#team" },
      { name: "Summary", icon: Lightbulb, href: "#summary" },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="mobile-menu-button" onClick={() => setOpen(true)}>
        <Menu size={22} />
      </button>

      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-top">
          <a href="/" className="brand">
            <div className="brand-icon">🥛</div>
            <div>
              <strong>MilkSense</strong>
              <span>AI</span>
            </div>
          </a>

          <button
            className="sidebar-close"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-subtitle">
          SMART MILK MONITORING
        </div>

        <nav className="sidebar-nav">
          {menu.map((group) => (
            <div className="nav-group" key={group.label}>
              <div className="nav-label">{group.label}</div>

              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-item"
                    onClick={() => setOpen(false)}
                  >
                    <Icon size={17} strokeWidth={1.8} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="system-mini">
            <div className="online-dot" />
            <div>
              <strong>Prototype Online</strong>
              <span>Simulation enabled</span>
            </div>
          </div>
        </div>
      </aside>

      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}