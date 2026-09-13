export default function Diamond({ className = "" }) {
  return (
    <div
      className={`h-[450px] w-[450px] rotate-45 border border-dotted border-[#A0A4AB] ${className}`}
    />
  );
}