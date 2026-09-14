import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-[1000] box-border flex h-[64px] w-full items-center justify-between px-8">
      <div className="flex items-center gap-6">
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

      <button className="w-fit bg-[#1A1B1C] px-4 py-2 text-[10px] font-semibold leading-none text-white">
  ENTER CODE
</button>
    </header>
  );
}