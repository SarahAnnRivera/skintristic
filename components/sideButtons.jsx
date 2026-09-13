import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function SideButton({ direction = "left", children }) {
  const isLeft = direction === "left";

  return (
    <button className="flex h-[44px] items-center gap-4 text-sm uppercase">
      {isLeft && (
        <span className="flex h-8 w-8 rotate-45 items-center justify-center border border-[#1A1B1C]">
          <FaCaretLeft className="-rotate-45 text-[10px]" />
        </span>
      )}

      <span>{children}</span>

      {!isLeft && (
        <span className="flex h-8 w-8 rotate-45 items-center justify-center border border-[#1A1B1C]">
          <FaCaretRight className="-rotate-45 text-[10px]" />
        </span>
      )}
    </button>
  );
}