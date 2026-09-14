import Header from "@/components/header";
import SideButton from "@/components/sideButtons";
import Link from "next/link";
import Diamond from "@/components/diamonds";

export default function SelectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <div className="absolute left-10 top-24">
        <h1 className="text-[16px] font-semibold uppercase">
          A.I. Analysis
        </h1>

        <p className="mt-3 text-[12px] uppercase leading-[20px]">
          A.I. has estimated the following.
          <br />
          Fix estimated information if needed.
        </p>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  <Diamond className="absolute h-[520px] w-[520px]" />
  <Diamond className="absolute left-[25px] top-[25px] h-[470px] w-[470px]" />
  <Diamond className="absolute left-[50px] top-[50px] h-[420px] w-[420px]" />

  <div className="h-[520px] w-[520px]" />
  <div className="absolute left-1/2 top-1/2 z-10 h-[111px] w-[111px] -translate-x-1/2 -translate-y-[111%] rotate-45 bg-[#D9D9D9] transition-transform duration-300 hover:-translate-y-[105%]">
  <div className="flex h-full w-full -rotate-45 items-center justify-center">
    <p className="text-[14px] font-semibold uppercase">
      Demographics
    </p>
  </div>
</div>
<div className="absolute left-1/2 top-1/2 z-10 h-[111px] w-[111px] -translate-x-1/2 translate-y-[5%] rotate-45 bg-[#F1F1F1] transition-transform duration-300 hover:translate-y-[5%]">
  <div className="flex h-full w-full -rotate-45 items-center justify-center">
    <p className="text-[14px] font-semibold uppercase">
      Weather
    </p>
  </div>
</div>
<div className="absolute left-1/2 top-1/2 z-10 h-[111px] w-[111px] -translate-x-[100%] -translate-y-1/2 rotate-45 bg-[#F1F1F1] transition-transform duration-300 hover:-translate-x-[105%]">
  <div className="flex h-full w-full -rotate-45 items-center justify-center">
    <p className="text-center text-[14px] font-semibold uppercase">
      Skin Type
      <br />
      Details
    </p>
  </div>
</div>
<div className="absolute left-1/2 top-1/2 z-10 h-[111px] w-[111px] -translate-y-1/2 rotate-45 bg-[#F1F1F1] transition-transform duration-300 hover:translate-x-[5%]">
  <div className="flex h-full w-full -rotate-45 items-center justify-center">
    <p className="text-center text-[14px] font-semibold uppercase">
      Cosmetic
      <br />
      Concerns
    </p>
  </div>
</div>
</div>

      <div className="absolute bottom-8 left-8">
        <Link href="/result">
          <SideButton direction="left">Back</SideButton>
        </Link>
      </div>
    </main>
  );
}