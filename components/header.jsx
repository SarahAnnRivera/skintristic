import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-[1000] flex h-16 w-full items-center justify-between px-6">
      
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-[12px] font-semibold uppercase leading-4 text-[#1A1B1C]"
        >
          SKINSTRIC
        </Link>

        <span className="text-[12px] font-normal uppercase leading-4 text-[#A0A4AB]">
          [ INTRO ]
        </span>
      </div>

      <button className="h-9 bg-[#1A1B1C] px-5 text-[10px] font-semibold uppercase leading-4 tracking-[-0.02em] text-white">
        ENTER CODE
      </button>
      
    </header>
  );
}