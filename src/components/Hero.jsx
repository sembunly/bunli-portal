import { BookOpen, Send } from "lucide-react";
import heroPng from "../assets/hero.png";
import pfJpg from "../assets/pf.jpg";

export default function Hero() {
  return (
    <section className="w-full rounded-[22px] bg-white shadow-sm border border-slate-100 overflow-hidden">
      {/* Subtle top-right tint */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none rounded-[22px]"
        style={{
          background:
            "radial-gradient(circle at top right, #dbeafe55, transparent 70%)",
        }}
      />

      <div className="relative px-5 pt-5 pb-5">
        <div className="flex items-start gap-3">
          {/* Left: Text */}
          <div className="flex-1 min-w-0">
            <p className="text-[9px] font-bold tracking-[0.22em] text-blue-400 uppercase mb-1">
              Hello, I&apos;m
            </p>
            <h1 className="text-[26px] font-extrabold text-slate-800 leading-tight mb-1.5">
              SEM{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                }}
              >
                BUNLY
              </span>
            </h1>
            <p className="text-[11px] text-slate-500 font-medium leading-snug mb-0.5">
              Backend Developer
            </p>
            <p className="text-[11px] text-slate-400 mb-4">
              Always learning, always building
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://docs.bunli-it.site"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-white text-[12px] font-semibold rounded-xl shadow-sm transition-all duration-200 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                }}
              >
                <Send size={12} />
                View My Projects
              </a>
              <a
                href="https://docs.bunli-it.site"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 text-slate-600 text-[12px] font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200 active:scale-95"
              >
                <BookOpen size={12} />
                Read My Docs
              </a>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="flex-shrink-0 flex flex-col items-center justify-start pt-1">
            <div className="relative">
              {/* Speech bubble */}
              <div
                className="absolute -top-2 -right-1 text-white text-[8px] font-bold px-2 py-1 rounded-xl rounded-bl-none shadow z-10 whitespace-nowrap leading-tight"
                style={{ background: "#3b82f6" }}
              >
                Let&apos;s Build
                <br />
                Together!
              </div>
              {/* Avatar box */}
              <div
                className="w-[88px] h-[88px] rounded-[18px] flex items-center justify-center border border-blue-100 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                }}
              >
                <img
                  src={heroPng}
                  src={pfJpg}
                  alt="Bunly developer illustration"
                  className="w-full h-full object-contain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
