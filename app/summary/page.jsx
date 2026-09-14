import Header from "@/components/header";
import SideButton from "@/components/sideButtons";
import Link from "next/link";

export default function SummaryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <div className="absolute left-10 top-24">
        <p className="text-[16px] font-semibold uppercase">
          A.I. Analysis
        </p>

        <h1 className="mt-2 text-[40px] font-normal uppercase leading-none">
          Demographics
        </h1>

        <p className="mt-2 text-[12px] uppercase">
          Predicted Race & Age
        </p>
      </div>
      <div className="absolute left-10 right-10 top-[300px] bottom-[90px] flex gap-3">
  {/* LEFT SELECTOR */}
  <div className="w-[175px]">
    <div className="border-t border-[#1A1B1C] bg-[#1A1B1C] p-4 text-white">
      <p className="text-[12px] font-semibold uppercase">East Asian</p>
      <p className="mt-8 text-[12px] font-semibold uppercase">Race</p>
    </div>

    <div className="mt-2 border-t border-[#1A1B1C] bg-[#E8E8E8] p-4">
      <p className="text-[12px] font-semibold">20–29</p>
      <p className="mt-8 text-[12px] font-semibold uppercase">Age</p>
    </div>

    <div className="mt-2 border-t border-[#1A1B1C] bg-[#F1F1F1] p-4">
      <p className="text-[12px] font-semibold uppercase">Female</p>
      <p className="mt-8 text-[12px] font-semibold uppercase">Sex</p>
    </div>
  </div>

  {/* CENTER */}
  <div className="relative flex-1 border-t border-[#1A1B1C] bg-[#F5F5F5] p-4">
    <h2 className="text-[28px] font-normal">East asian</h2>

    <div className="absolute bottom-8 right-8 flex h-[320px] w-[320px] items-center justify-center rounded-full border-2 border-[#1A1B1C]">
      <p className="text-[40px] font-light">96%</p>
    </div>
  </div>

  {/* RIGHT CONFIDENCE */}
  <div className="w-[375px] border-t border-[#1A1B1C] bg-[#F5F5F5]">
    <div className="flex justify-between p-4 text-[12px] uppercase">
      <span>Race</span>
      <span>A.I. Confidence</span>
    </div>

    <div className="flex justify-between bg-[#1A1B1C] px-4 py-3 text-[12px] text-white">
      <span>◇ East Asian</span>
      <span>96%</span>
    </div>

    <div className="space-y-4 p-4 text-[12px]">
      <div className="flex justify-between"><span>◇ White</span><span>6%</span></div>
      <div className="flex justify-between"><span>◇ Black</span><span>3%</span></div>
      <div className="flex justify-between"><span>◇ South Asian</span><span>2%</span></div>
      <div className="flex justify-between"><span>◇ Latino Hispanic</span><span>0%</span></div>
      <div className="flex justify-between"><span>◇ South East Asian</span><span>0%</span></div>
      <div className="flex justify-between"><span>◇ Middle Eastern</span><span>0%</span></div>
    </div>
  </div>
</div>

      <div className="absolute bottom-8 left-8">
        <Link href="/select">
          <SideButton direction="left">Back</SideButton>
        </Link>
      </div>

    </main>
  );
}