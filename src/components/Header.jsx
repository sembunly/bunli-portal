import { Menu } from "lucide-react";
import pfJpg from "../assets/pf.jpg";

export default function Header() {
  return (
    /* Fixed to viewport top, centered to match the 430px app container */
    <header
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full border-b border-slate-100"
      style={{
        maxWidth: 430,
        background: "rgba(247,249,252,0.97)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center justify-between px-5 py-3">
        {/* Left: Avatar + Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm flex-shrink-0 border border-slate-200">
            <img
              src={pfJpg}
              alt="Bunly"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="text-[13px] font-bold text-slate-800 leading-none">
              Bunly
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Developer from Cambodia
            </p>
          </div>
        </div>

        {/* Right: Hamburger */}
        <button
          aria-label="Open menu"
          className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
