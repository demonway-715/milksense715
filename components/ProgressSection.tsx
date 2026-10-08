const progress = [
  {
    name: "Problem Research",
    value: 100,
    status: "Completed",
  },
  {
    name: "Hardware Selection",
    value: 80,
    status: "In progress",
  },
  {
    name: "Prototype Development",
    value: 65,
    status: "In progress",
  },
  {
    name: "Data Collection",
    value: 50,
    status: "In progress",
  },
  {
    name: "AI Model",
    value: 40,
    status: "In progress",
  },
  {
    name: "Website",
    value: 70,
    status: "In progress",
  },
  {
    name: "Testing",
    value: 25,
    status: "Upcoming",
  },
];

export default function ProgressSection() {
  return (
    <div className="progress-panel">
      <div className="overall-progress">
        <div>
          <span>PROJECT COMPLETION</span>
          <strong>65%</strong>
        </div>

        <div className="large-progress">
          <div style={{ width: "65%" }} />
        </div>

        <p>
          Prototype development is currently in progress. Values shown here
          are editable project placeholders.
        </p>
      </div>

      <div className="progress-list">
        {progress.map((item) => (
          <div className="progress-item" key={item.name}>
            <div className="progress-item-top">
              <div>
                <strong>{item.name}</strong>
                <span>{item.status}</span>
              </div>
              <b>{item.value}%</b>
            </div>

            <div className="small-progress">
              <div style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}