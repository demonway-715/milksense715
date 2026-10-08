"use client";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Cpu,
  FlaskConical,
  Leaf,
  Lightbulb,
  MonitorSmartphone,
  BookOpen,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Users,
} from "lucide-react";

import Sidebar from "@/components/Sidebar";
import SectionTitle from "@/components/SectionTitle";
import Workflow from "@/components/Workflow";
import ProgressSection from "@/components/ProgressSection";
import Footer from "@/components/Footer";
import DashboardPreview from "@/components/DashboardPreview";

/* =========================================================
   SHARED STYLES FOR SECTIONS
   These are intentionally explicit so existing CSS cannot
   make important text disappear.
========================================================= */

const eyebrowStyle: React.CSSProperties = {
  display: "inline-block",
  color: "#0e9f8e",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "2px",
  lineHeight: 1.4,
  marginBottom: "14px",
};

const darkTextStyle: React.CSSProperties = {
  color: "#ffffff",
};

const darkParagraphStyle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: 1.7,
};

/* =========================================================
   HARDWARE
========================================================= */

const hardware = [
  {
    icon: Cpu,
    title: "IoT Controller",
    text: "Receives sensor readings and acts as the communication layer of the prototype.",
  },
  {
    icon: Thermometer,
    title: "Temperature Sensor",
    text: "Provides temperature information that can be used as an input for prediction.",
  },
  {
    icon: FlaskConical,
    title: "pH Sensor",
    text: "Monitors acidity-related changes in the milk sample.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML Layer",
    text: "Analyzes collected parameters and estimates fermentation risk.",
  },
];

/* =========================================================
   TEAM
========================================================= */

const team = [
  {
    name: "OCEANWAY A",
    role: "Leader",
    initials: "OA",
    description:
      "Leads the IDEA REAPERS team, coordinates the project vision, development and overall execution of MilkSense.",
  },
  {
    name: "REVATHI G",
    role: "Web Master",
    initials: "RG",
    description:
      "Handles the MilkSense website, web development, interface implementation and overall digital presentation.",
  },
  {
    name: "ASHWIN K",
    role: "Task executer",
    initials: "AK",
    description:
      "Focuses on project requirements, stakeholder perspective, project value and ensuring the solution addresses the intended problem.",
  },
  {
    name: "MUTHUPANDI S",
    role: "Designer",
    initials: "MS",
    description:
      "Creates the visual identity, interface concepts and design direction for the MilkSense project.",
  },
  {
    name: "SIVA K",
    role: "Recorder",
    initials: "SK",
    description:
      "Documents project activities, records important discussions and maintains the team's project documentation.",
  },
];

/* =========================================================
   FUTURE
========================================================= */

const future = [
  {
    icon: MonitorSmartphone,
    title: "Mobile Application",
    text: "Remote monitoring and alerts through a dedicated mobile interface.",
  },
  {
    icon: Sparkles,
    title: "Smarter AI",
    text: "Improve predictions using larger and more diverse datasets.",
  },
  {
    icon: ShieldCheck,
    title: "Smart Alerts",
    text: "Notify users when the system detects increasing fermentation risk.",
  },
  {
    icon: Leaf,
    title: "Waste Reduction",
    text: "Support better decisions around milk storage and usage.",
  },
];

/* =========================================================
   DEVELOPMENT STEPS
========================================================= */

const developmentSteps = [
  ["01", "Problem Identification", "Understand the milk wastage problem."],
  ["02", "Research", "Study fermentation factors and existing approaches."],
  ["03", "Component Selection", "Select appropriate sensors and controllers."],
  ["04", "Hardware Development", "Build and test the monitoring device."],
  ["05", "Data Collection", "Collect readings under controlled conditions."],
  ["06", "AI Development", "Prepare data and develop the prediction approach."],
  ["07", "Integration", "Connect hardware, software and prediction logic."],
  ["08", "Testing", "Evaluate performance and refine the system."],
];

export default function Home() {
  return (
    <div className="site-shell">
      <Sidebar />

      <main className="main-content">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="hero-section" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-copy">
            <div className="hero-badge">
              <span className="pulse-dot" />
              IoT + AI PROJECT
            </div>

            <h1>
              Predict milk
              <br />
              <span>fermentation</span>
              <br />
              before it happens.
            </h1>

            <p>
              MilkSense AI is a smart monitoring concept that combines
              sensor-based measurements with artificial intelligence to
              estimate an approaching fermentation window.
            </p>

            <div className="hero-actions">
              <a href="/dashboard" className="primary-button">
                Open Dashboard
                <ArrowRight size={18} />
              </a>

              <a href="#about" className="secondary-button">
                Explore Project
                <ChevronRight size={17} />
              </a>
            </div>

            <div className="hero-trust">
              <CheckCircle2 size={16} />
              Prototype demonstration
              <span>•</span>
              Simulation data
            </div>
          </div>

          <div className="hero-dashboard">
            <DashboardPreview />
          </div>
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="stats-strip">
          <div className="stat-box">
            <span>01</span>
            <strong>Sense</strong>
            <p>Monitor milk conditions.</p>
          </div>

          <div className="stat-box">
            <span>02</span>
            <strong>Analyze</strong>
            <p>Process collected data.</p>
          </div>

          <div className="stat-box">
            <span>03</span>
            <strong>Predict</strong>
            <p>Estimate fermentation risk.</p>
          </div>

          <div className="stat-box">
            <span>04</span>
            <strong>Act</strong>
            <p>Take action before deterioration.</p>
          </div>
        </section>

        {/* =====================================================
            01 ABOUT PROJECT
        ====================================================== */}

        <section className="content-section" id="about">
          <SectionTitle
            eyebrow="01 / ABOUT PROJECT"
            title="Turning sensor readings into useful decisions."
            description="The project focuses on early detection and prediction rather than simply reacting after fermentation has already occurred."
          />

          <div className="about-grid">
            <div className="about-main-card">
              <div className="about-card-icon">
                <Lightbulb size={24} />
              </div>

              <h3>The problem</h3>

              <p>
                Milk quality can change over time depending on storage
                conditions and environmental factors. When fermentation
                progresses unnoticed, the opportunity to use the milk for its
                intended purpose may be lost.
              </p>

              <p>
                Our proposed system explores whether sensor readings such as
                temperature and pH can be combined with historical data and
                machine learning to provide an early indication of this
                change.
              </p>
            </div>

            <div className="about-side-card solution-card">
              <span>OUR APPROACH</span>

              <h3>Sense → Analyze → Predict → Alert</h3>

              <div className="mini-flow">
                <div>
                  <Thermometer size={18} />
                  <span>Sensors</span>
                </div>

                <div>
                  <Cpu size={18} />
                  <span>IoT</span>
                </div>

                <div>
                  <BrainCircuit size={18} />
                  <span>AI</span>
                </div>

                <div>
                  <ShieldCheck size={18} />
                  <span>Action</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            02 HOW IT WORKS
        ====================================================== */}

        <section
          className="content-section light-section"
          id="how-it-works"
        >
          <SectionTitle
            eyebrow="02 / HOW IT WORKS"
            title="From milk sample to early warning."
            description="A simple pipeline connects physical measurements with software-based prediction."
            centered
          />

          <Workflow />
        </section>

        {/* =====================================================
            03 TECHNOLOGY
        ====================================================== */}

        <section className="content-section" id="technology">
          <SectionTitle
            eyebrow="03 / TECHNOLOGY"
            title="The building blocks behind the prototype."
            description="The exact components can be updated once your team finalizes the hardware and software stack."
          />

          <div className="technology-grid">
            {hardware.map((item) => {
              const Icon = item.icon;

              return (
                <div className="technology-card" key={item.title}>
                  <div className="technology-icon">
                    <Icon size={22} />
                  </div>

                  <span className="technology-tag">PLANNED</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="card-arrow">
                    View details
                    <ArrowRight size={15} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            04 AI PREDICTION
            DARK SECTION — WHITE TEXT
        ====================================================== */}

        <section className="ai-section" id="ai">
          <div className="ai-content">

            <span
              className="eyebrow"
              style={eyebrowStyle}
            >
              04 / AI PREDICTION
            </span>

            <h2 style={darkTextStyle}>
              Don't just monitor the milk.
              <br />
              <span style={{ color: "#ffffff" }}>
                Understand what may happen next.
              </span>
            </h2>

            <p style={darkParagraphStyle}>
              The proposed AI layer can use multiple inputs rather than
              depending on a single fixed threshold. The model can learn
              patterns from collected observations and estimate fermentation
              risk and a possible time window.
            </p>

            <div className="ai-pipeline">
              <div>
                <strong>01</strong>
                <span>Temperature</span>
              </div>

              <div>
                <strong>02</strong>
                <span>pH</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Time</span>
              </div>

              <div>
                <strong>04</strong>
                <span>AI Model</span>
              </div>

              <div className="ai-output">
                <strong>→</strong>
                <span>Prediction</span>
              </div>
            </div>

            <div className="prototype-warning">
              <Sparkles size={18} />

              <span style={{ color: "#ffffff" }}>
                AI prediction shown in the current dashboard is demonstration
                data. A trained project model can be connected later.
              </span>
            </div>

          </div>
        </section>

        {/* =====================================================
            05 DEVELOPMENT WORKFLOW
        ====================================================== */}

        <section className="content-section" id="workflow">
          <SectionTitle
            eyebrow="05 / DEVELOPMENT WORKFLOW"
            title="How the project moves from idea to prototype."
            description="This timeline represents the development process of the project team."
          />

          <div className="development-timeline">
            {developmentSteps.map(([number, title, text]) => (
              <div className="timeline-item" key={number}>
                <div className="timeline-number">{number}</div>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            06 PROJECT PROGRESS
        ====================================================== */}

        <section
          className="content-section light-section"
          id="progress"
        >
          <SectionTitle
            eyebrow="06 / PROJECT PROGRESS"
            title="Track the journey."
            description="These are editable placeholder values. Replace them with our team's actual progress."
          />

          <ProgressSection />
        </section>

        {/* =====================================================
            07 OUR TEAM
        ====================================================== */}

        <section className="content-section" id="team">

          <div
            className="team-section-heading"
            style={{
              textAlign: "center",
              marginBottom: "48px",
            }}
          >

            {/* BLUE / TEAL SECTION NUMBER */}
            <div
              style={{
                ...eyebrowStyle,
                marginBottom: "12px",
              }}
            >
              07 / OUR TEAM
            </div>

            {/* LARGE TEAM NAME */}
            <div
              className="team-name"
              style={{
                color: "#071a2b",
                fontSize: "46px",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: "1px",
                marginBottom: "12px",
              }}
            >
              IDEA REAPERS
            </div>

            {/* NORMAL SECTION TITLE */}
            <h2
              className="team-main-title"
              style={{
                color: "#071a2b",
                fontSize: "30px",
                lineHeight: 1.25,
                fontWeight: 700,
                margin: 0,
              }}
            >
              The people building MilkSense AI.
            </h2>

          </div>

          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>

                <div className="team-avatar">
                  {member.initials}
                </div>

                <div
                  className="team-role"
                  style={{
                    color: "#0e9f8e",
                    fontSize: "14px",
                    fontWeight: 800,
                    letterSpacing: "1px",
                  }}
                >
                  {member.role}
                </div>

                <h3>{member.name}</h3>

                <p
                  style={{
                    color: "#222222",
                    fontSize: "15px",
                    lineHeight: 1.7,
                  }}
                >
                  {member.description}
                </p>

                <div className="team-link">
                  <Users size={15} />
                  Project contributor
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* =====================================================
            08 FUTURE SCOPE
        ====================================================== */}

        <section
          className="content-section light-section"
          id="future"
        >
          <SectionTitle
            eyebrow="08 / FUTURE SCOPE"
            title="Where this project could go next."
            description="Potential improvements and extensions beyond the current prototype."
          />

          <div className="future-grid">
            {future.map((item) => {
              const Icon = item.icon;

              return (
                <div className="future-card" key={item.title}>
                  <div className="future-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            09 STAKEHOLDER REVIEW
        ====================================================== */}

        <section className="content-section" id="reviews">
          <SectionTitle
            eyebrow="09 / STAKEHOLDER REVIEW"
            title="Feedback will shape the next version."
            description="Add real feedback from faculty members, users or other stakeholders here."
          />

          <div className="review-placeholder">
            <MessageIcon />

            <div>
              <span>FEEDBACK PLACEHOLDER</span>

              <h3>
                “Add your real stakeholder feedback here after the review.”
              </h3>

              <p>Reviewer name • Role • Date</p>
            </div>
          </div>
        </section>

        {/* =====================================================
            10 EXISTING SYSTEMS
        ====================================================== */}

        <section
          className="content-section light-section"
          id="existing"
        >
          <SectionTitle
            eyebrow="10 / EXISTING SYSTEMS & PRIOR ART"
            title="What makes our proposed approach different?"
            description="This section should be updated with verified research and patent information before final submission."
          />

          <div className="comparison-grid">

            <div className="comparison-card">
              <span>TRADITIONAL APPROACH</span>

              <ul>
                <li>Manual observation</li>
                <li>Simple time-based decisions</li>
                <li>Limited continuous monitoring</li>
                <li>Reactive decision making</li>
              </ul>
            </div>

            <div className="comparison-vs">
              VS
            </div>

            <div className="comparison-card proposed">
              <span>PROPOSED APPROACH</span>

              <ul>
                <li>Sensor-based monitoring</li>
                <li>Continuous data collection</li>
                <li>AI-assisted analysis</li>
                <li>Predicted fermentation window</li>
                <li>Early warning concept</li>
              </ul>
            </div>

          </div>

          <div className="patent-note">
            <BookIcon />

            <div>
              <strong>Patent / prior-art research</strong>

              <p>
                Do not claim that this concept is unique or patented until
                your team completes a proper patent and prior-art search.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            11 PROJECT SUMMARY
            DARK SECTION — WHITE TEXT
        ====================================================== */}

        <section className="summary-section" id="summary">

          <div className="summary-content">

            {/* BLUE / TEAL TOP LABEL */}
            <span
              className="eyebrow"
              style={eyebrowStyle}
            >
              11 / PROJECT SUMMARY
            </span>

            <h2 style={{ color: "#ffffff" }}>
              From sensing
              <br />
              <span style={{ color: "#ffffff" }}>
                to smarter decisions.
              </span>
            </h2>

            {/* WHITE — CLEARLY VISIBLE ON DARK BACKGROUND */}
            <p
              style={{
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: 1.75,
                maxWidth: "720px",
              }}
            >
              MilkSense AI explores how IoT sensors and predictive analytics
              can work together to identify changing milk conditions and
              provide an early indication of approaching fermentation.
            </p>

            <div className="summary-flow">
              <span>SENSORS</span>
              <i>→</i>
              <span>IoT</span>
              <i>→</i>
              <span>AI</span>
              <i>→</i>
              <span>PREDICTION</span>
              <i>→</i>
              <span>ACTION</span>
            </div>

          </div>
        </section>

        <Footer />

      </main>
    </div>
  );
}

/* =========================================================
   SMALL ICON HELPERS
========================================================= */

function MessageIcon() {
  return <MonitorSmartphone size={28} />;
}

function BookIcon() {
  return <BookOpen size={23} />;
}

function BookOpenIcon({ size }: { size: number }) {
  return (
    <div style={{ display: "flex" }}>
      <Users size={size} />
    </div>
  );
}