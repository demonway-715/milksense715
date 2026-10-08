import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">
          <span>🥛</span>
          <strong>MilkSense AI</strong>
        </div>

        <p>
          An IoT + AI based prototype for monitoring milk conditions and
          predicting an approaching fermentation window.
        </p>
      </div>

      <div className="footer-right">
        <span>COLLEGE PROJECT • 2026</span>
        <a href="#summary">
          Back to top <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}