import {
  BrainCircuit,
  Database,
  Droplets,
  Radio,
  ScanLine,
  ShieldCheck,
  Thermometer,
  TriangleAlert,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Milk",
    text: "The milk sample is placed inside the monitoring environment.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Sensors",
    text: "Sensors collect temperature, pH and other relevant parameters.",
    icon: Thermometer,
  },
  {
    number: "03",
    title: "IoT Device",
    text: "The controller receives and transfers sensor readings.",
    icon: Radio,
  },
  {
    number: "04",
    title: "Data Layer",
    text: "Measurements can be stored and prepared for analysis.",
    icon: Database,
  },
  {
    number: "05",
    title: "AI Analysis",
    text: "The model analyzes patterns in the collected information.",
    icon: BrainCircuit,
  },
  {
    number: "06",
    title: "Prediction",
    text: "The system estimates fermentation risk and a possible time window.",
    icon: ScanLine,
  },
  {
    number: "07",
    title: "Early Alert",
    text: "The user can take action before the predicted fermentation stage.",
    icon: TriangleAlert,
  },
  {
    number: "08",
    title: "Reduce Waste",
    text: "Timely decisions can help reduce avoidable milk wastage.",
    icon: ShieldCheck,
  },
];

export default function Workflow() {
  return (
    <div className="workflow-grid">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div className="workflow-card" key={step.number}>
            <div className="workflow-number">{step.number}</div>

            <div className="workflow-icon">
              <Icon size={21} />
            </div>

            <h3>{step.title}</h3>
            <p>{step.text}</p>

            {index < steps.length - 1 && (
              <div className="workflow-connector" />
            )}
          </div>
        );
      })}
    </div>
  );
}