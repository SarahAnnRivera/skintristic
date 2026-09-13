import Header from "./header";
import Diamond from "./diamonds";
import SideButton from "./sideButtons";

export default function TitlePage() {
  return (
     <main className="relative h-screen overflow-hidden">
      <Header />

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-light tracking-[-0.07em]">
  <span className="block whitespace-nowrap text-[92px] leading-[110px]">
    Sophisticated
  </span>

  <span className="block text-center text-[92px] leading-[110px]">
    skincare
  </span>
</h1>
      <p className="absolute bottom-8 left-8 w-[316px] text-xsm font-normal leading-6 uppercase">
  Skinstric developed an A.I. that creates a highly-personalised routine
  tailored to what your skin needs.
</p>
<Diamond className="fixed left-[-250px] top-1/2 -translate-y-1/2" />
<Diamond className="fixed right-[-250px] top-1/2 -translate-y-1/2" />
<div className="absolute left-8 top-1/2 -translate-y-1/2">
  <SideButton direction="left">
    Discover A.I.
  </SideButton>
</div>
<div className="absolute right-8 top-1/2 -translate-y-1/2">
  <SideButton direction="right">
    Take Test
  </SideButton>
</div>
    </main>
  );
}