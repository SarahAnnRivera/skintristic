export default function Diamond({ className = "" }) {
  return (
    <svg
      viewBox="0 0 602 602"
      className={`rotate-45 overflow-visible ${className}`}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="600"
        height="600"
        fill="none"
        stroke="#A0A4AB"
        strokeWidth="2"
        strokeDasharray="0.1 8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}