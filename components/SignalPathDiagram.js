export default function SignalPathDiagram() {
  return (
    <div className="diagram">
      <div className="diagram-label">
        <span>
          <span className="dot"></span>SYSTEM SIGNAL PATH
        </span>
      </div>
      <svg
        className="riser"
        viewBox="0 0 420 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="120"
          width="46"
          height="70"
          fill="none"
          stroke="#2B4E6C"
          strokeWidth="1.4"
        />
        <line x1="26" y1="132" x2="60" y2="132" stroke="#2B4E6C" strokeWidth="1.4" />
        <line x1="26" y1="144" x2="60" y2="144" stroke="#2B4E6C" strokeWidth="1.4" />
        <line x1="26" y1="156" x2="60" y2="156" stroke="#2B4E6C" strokeWidth="1.4" />
        <line x1="26" y1="168" x2="60" y2="168" stroke="#2B4E6C" strokeWidth="1.4" />
        <text
          x="43"
          y="205"
          textAnchor="middle"
          className="mono"
          fontSize="9"
          fontWeight="700"
          fill="#EDF1F4"
        >
          RACK
        </text>

        <path className="riser-path" d="M66,150 C120,150 110,60 190,58" />
        <path className="riser-path" d="M66,155 C130,155 140,150 200,150" />
        <path className="riser-path" d="M66,160 C130,180 150,235 200,240" />

        <g className="riser-node" transform="translate(190,58)">
          <circle r="15" />
          <circle className="pulse" r="2.5" cx="0" cy="-1" />
          <text x="0" y="30" textAnchor="middle">
            CAMERA
          </text>
        </g>

        <g className="riser-node" transform="translate(210,150)">
          <rect x="-16" y="-11" width="32" height="22" rx="1" fill="#16354F" stroke="#E0965C" strokeWidth="1.6" />
          <circle className="pulse" r="2.5" cx="0" cy="0" />
          <text x="0" y="30" textAnchor="middle">
            DISPLAY
          </text>
        </g>

        <g className="riser-node" transform="translate(210,240)">
          <circle r="15" />
          <circle className="pulse" r="2.5" cx="0" cy="-1" />
          <text x="0" y="30" textAnchor="middle">
            AP / NETWORK
          </text>
        </g>

        <rect
          x="90"
          y="20"
          width="300"
          height="260"
          fill="none"
          stroke="#2B4E6C"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
      </svg>
    </div>
  );
}
